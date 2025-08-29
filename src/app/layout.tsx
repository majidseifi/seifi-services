import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://seifi.dev'),
  title: 'Web Development Services - Professional Website Development',
  description: 'Transform your business with professional web development services. I specialize in React, Next.js, TypeScript, and modern web technologies to create responsive, high-performance websites.',
  keywords: 'web development, React developer, Next.js, TypeScript, responsive design, e-commerce, SEO, web developer Toronto, professional websites',
  authors: [{ name: 'Majid Seifi Kashani' }],
  openGraph: {
    title: 'Web Development Services - Professional Website Development',
    description: 'Transform your business with professional web development services. Specializing in modern web technologies.',
    url: 'https://seifi.dev/',
    siteName: 'Seifi Web Development',
    type: 'website',
    locale: 'en_CA',
    images: [{
      url: '/socialpreview.png',
      width: 1200,
      height: 630,
      alt: 'Professional Web Development Services',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Services - Professional Website Development',
    description: 'Transform your business with professional web development services. Specializing in modern web technologies.',
    creator: '@Maj_Seifi',
    images: ['/socialpreview.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
  alternates: {
    canonical: 'https://seifi.dev/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
        <meta name="theme-color" content="#FFB800" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Seifi Web Development Services",
              "description": "Professional web development services specializing in React, Next.js, and modern web technologies",
              "url": "https://seifi.dev",
              "provider": {
                "@type": "Person",
                "name": "Majid Seifi Kashani",
                "jobTitle": "Software Developer & Digital Strategist",
                "url": "https://seifi.dev",
                "sameAs": [
                  "https://linkedin.com/in/majidseifi",
                  "https://github.com/majidseifi",
                  "https://x.com/Maj_Seifi"
                ]
              },
              "areaServed": {
                "@type": "Place",
                "name": "Toronto, Ontario, Canada"
              },
              "serviceType": [
                "Web Development",
                "React Development",
                "E-commerce Development",
                "SEO Optimization",
                "Responsive Design"
              ]
            })
          }}
        />
      </head>
      <body className="font-inter bg-primary-black text-text-white">
        {children}
      </body>
    </html>
  )
}