'use client'

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const BookingCalendar = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"discovery-call","embedJsUrl":"https://calendar.seifi.dev/embed/embed.js"});
      cal("ui", {
        "hideEventTypeDetails":false,
        "layout":"month_view",
        "theme":"dark"
      });
    })();
  }, [])

  return (
    <div className="bg-gradient-to-br from-primary-gray/50 to-primary-dark/50 p-8 rounded-2xl border border-accent-yellow/20">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-accent-yellow mb-4">Book Your Free Consultation</h3>
        <p className="text-text-gray">
          Schedule a 30-minute call to discuss your project. No commitment required.
        </p>
      </div>

      <div className="min-h-[600px] rounded-lg overflow-hidden">
        <Cal 
          namespace="discovery-call"
          calLink="majidseifi/discovery-call"
          style={{width:"100%",height:"100%",overflow:"scroll"}}
          config={{
            "layout":"month_view",
            "theme":"dark"
          }}
          calOrigin="https://calendar.seifi.dev"
          embedJsUrl="https://calendar.seifi.dev/embed/embed.js"
        />
      </div>

      <div className="mt-6 p-4 bg-accent-yellow/10 rounded-lg">
        <h4 className="text-sm font-semibold text-accent-yellow mb-2">What to expect:</h4>
        <ul className="text-xs text-text-gray space-y-1">
          <li>• Free 30-minute consultation call</li>
          <li>• Discussion of your project requirements</li>
          <li>• Custom quote and timeline proposal</li>
          <li>• No pressure, no commitment required</li>
        </ul>
      </div>
    </div>
  )
}

export default BookingCalendar