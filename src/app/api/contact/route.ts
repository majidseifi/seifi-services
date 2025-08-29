import { NextRequest, NextResponse } from 'next/server';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';
import { Storage } from '@google-cloud/storage';

// Initialize Google Cloud Storage
const storage = new Storage();
const bucketName = process.env.GCS_BUCKET_NAME || 'seifi-portfolio-data';
const csvFileName = 'services-contact/contact-submissions.csv';

// CSV header
const csvHeader = 'Timestamp,Name,Email,Subject,Message\n';

// Function to escape CSV values
function escapeCsvValue(value: string): string {
  if (typeof value !== 'string') return '';
  // Escape quotes and wrap in quotes if contains comma, newline, or quote
  if (value.includes(',') || value.includes('\n') || value.includes('"')) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

// Function to append to CSV in Google Cloud Storage
async function appendToCsv(formData: { name: string; email: string; subject: string; message: string }) {
  try {
    const bucket = storage.bucket(bucketName);
    const file = bucket.file(csvFileName);
    
    // Check if file exists
    const [exists] = await file.exists();
    
    let csvContent = '';
    
    if (!exists) {
      // Create file with header
      csvContent = csvHeader;
    }
    
    // Prepare CSV row
    const timestamp = new Date().toISOString();
    const csvRow = [
      timestamp,
      escapeCsvValue(formData.name),
      escapeCsvValue(formData.email),
      escapeCsvValue(formData.subject),
      escapeCsvValue(formData.message)
    ].join(',') + '\n';
    
    csvContent += csvRow;
    
    if (exists) {
      // Append to existing file
      const [currentContent] = await file.download();
      csvContent = currentContent.toString() + csvRow;
    }
    
    // Save updated content
    await file.save(csvContent);
    
  } catch (error) {
    console.error('CSV save error:', error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }
    
    // Prepare MailerSend email
    const sentFrom = new Sender(
      process.env.MAILERSEND_FROM_EMAIL || 'noreply@seifi.dev', 
      'Seifi Services Contact Form'
    );
    
    const recipients = [
      new Recipient(
        process.env.CONTACT_EMAIL || 'majid@seifi.dev', 
        'Majid'
      )
    ];
    
    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(new Recipient(email, name))
      .setSubject(`Web Development Inquiry: ${subject}`)
      .setText(`
        New contact form submission from your web development services website:
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
        
        ---
        Sent from seifi.dev/services contact form
        Timestamp: ${new Date().toISOString()}
      `)
      .setHtml(`
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #FFB800; padding-bottom: 10px;">
            New Web Development Inquiry
          </h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
            <h3 style="margin-top: 0; color: #333;">Message:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #f0f0f0; border-radius: 5px; text-align: center;">
            <small style="color: #666;">
              Sent from <a href="https://seifi.dev" style="color: #FFB800;">Web Development Services</a> contact form<br>
              ${new Date().toLocaleString()}
            </small>
          </div>
        </div>
      `);
    
    let emailSent = false;
    let emailError: string | null = null;
    
    // Try to send email via MailerSend API
    try {
      // Check if API token is properly set
      if (!process.env.MAILERSEND_API_TOKEN) {
        throw new Error('MAILERSEND_API_TOKEN environment variable is not set');
      }
      
      const token = process.env.MAILERSEND_API_TOKEN.trim();
      if (token.length < 10) {
        throw new Error('MAILERSEND_API_TOKEN appears to be invalid (too short)');
      }
      
      // Initialize MailerSend client per request to avoid token caching issues
      const mailerSend = new MailerSend({
        apiKey: token,
      });
      
      await mailerSend.email.send(emailParams);
      emailSent = true;
    } catch (emailErr: any) {
      console.error('Email sending failed:', emailErr.message);
      emailError = emailErr.message;
      // Continue processing even if email fails
    }
    
    // Save to CSV (always try to save, regardless of email status)
    let csvSaved = false;
    let csvError: string | null = null;
    
    try {
      await appendToCsv({ name, email, subject, message });
      csvSaved = true;
    } catch (csvErr: any) {
      console.error('CSV save failed:', csvErr.message);
      csvError = csvErr.message;
    }
    
    // Determine response based on what succeeded
    if (emailSent || csvSaved) {
      // Success if either email sent OR data was saved
      let message = '';
      if (emailSent && csvSaved) {
        message = 'Message sent successfully and data saved';
      } else if (emailSent) {
        message = 'Message sent successfully';
      } else if (csvSaved) {
        message = 'Message received and saved (email delivery pending)';
      }
      
      return NextResponse.json({ 
        success: true, 
        message: message,
        emailSent: emailSent,
        dataSaved: csvSaved
      });
    } else {
      // Both failed
      throw new Error(`Both email and data saving failed. Email: ${emailError}, CSV: ${csvError}`);
    }
    
  } catch (error: any) {
    console.error('Contact form error:', error.message);
    return NextResponse.json({ 
      error: 'Internal server error',
      message: 'Failed to send email. Please try again later.'
    }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}