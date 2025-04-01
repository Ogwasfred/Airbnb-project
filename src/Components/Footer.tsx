import React from 'react'

function Footer() {
  return (
    <div className="bg-gray-100 text-gray-700 p-10">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Tabs */}
        <div className="mb-6 border-b pb-2 flex space-x-6 text-sm font-medium">
          <span className="border-b-2 border-black">Popular</span>
          <span>Historic</span>
          <span>Coastal</span>
          <span>Islands</span>
          <span>Lakes</span>
          <span>Unique stays</span>
          <span>Categories</span>
          <span>Things to do</span>
        </div>
        
        {/* Listings */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {Array(12).fill("Aberfeldy").map((place, index) => (
            <div key={index} className="text-sm">
              <p className="font-semibold">{place}</p>
              <p className="text-gray-500">Holiday rentals</p>
            </div>
          ))}
          <span className="text-sm font-semibold cursor-pointer">Show more ▼</span>
        </div>
        
        {/* Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t pt-6 text-sm">
          <div>
            <p className="font-semibold">Support</p>
            <p>Help centre</p>
            <p>AirCover</p>
            <p>Anti-discrimination</p>
            <p>Disability support</p>
            <p>Cancellation options</p>
            <p>Report neighbourhood concern</p>
          </div>
          <div>
            <p className="font-semibold">Hosting</p>
            <p>Airbnb your home</p>
            <p>AirCover for hosts</p>
            <p>Hosting resources</p>
            <p>Community forum</p>
            <p>Hosting responsibly</p>
          </div>
          <div>
            <p className="font-semibold">Airbnb</p>
            <p>Newsroom</p>
            <p>New features</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Gift cards</p>
            <p>Airbnb.org emergency stays</p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-6 border-t pt-4 text-xs flex justify-between">
          <p>© 2023 Airbnb, Inc. · Privacy · Terms · Sitemap · UK Modern Slavery Act · Company details</p>
          <div className="flex space-x-4">
            <p>🌍 English (GB)</p>
            <p>£ GBP</p>
            <p>📘 Facebook</p>
            <p>🐦 Twitter</p>
            <p>📸 Instagram</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

