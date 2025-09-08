"use client";
import Image from "next/image";

export default function Ooter() {
  return (
    <div className="mt-10">
      {/* CTA Section */}
    <section className="relative w-full h-[220px] md:h-[260px] lg:h-[300px] overflow-hidden">
  {/* Background Image */}
  <Image
    src="/assest/footer.jpg"
    alt="Order Banner"
    fill
    className="object-cover object-[center]" // default center
  />

  {/* Content Overlay */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6">
      Are you ready to order with <br /> the best deals?
    </h2>
    <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs md:text-sm font-semibold px-5 md:px-6 py-2 md:py-3 rounded-md">
      PROCEED TO ORDER →
    </button>
  </div>
</section>


      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-20">
        {/* Top Cities */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-10 text-sm">
          <div>
            <h3 className="font-semibold mb-3">Our top cities</h3>
            <ul className="space-y-1">
              <li>San Francisco</li>
              <li>Miami</li>
              <li>San Diego</li>
              <li>East Bay</li>
              <li>Long Beach</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-1 mt-7">
              <li>Los Angeles</li>
              <li>Washington DC</li>
              <li>Seattle</li>
              <li>Portland</li>
              <li>Nashville</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-1 mt-7">
              <li>New York City</li>
              <li>Orange County</li>
              <li>Atlanta</li>
              <li>Charlotte</li>
              <li>Denver</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-1 mt-7">
              <li>Chicago</li>
              <li>Phoenix</li>
              <li>Las Vegas</li>
              <li>Sacramento</li>
              <li>Oklahoma City</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-1 mt-7">
              <li>Columbus</li>
              <li>New Mexico</li>
              <li>Albuquerque</li>
              <li>Sacramento</li>
              <li>New Orleans</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 mb-8" />

        {/* Bottom Links */}
        <div className="grid md:grid-cols-4 gap-6 text-sm mb-10">
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-1">
              <li>About us</li>
              <li>Team</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-1">
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-1">
              <li>Terms & Conditions</li>
              <li>Refund & Cancellation</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">FOLLOW US</h3>
            <div className="flex gap-4 mb-4">
              <span>🌐</span>
              <span>🐦</span>
              <span>📸</span>
            </div>
            <p className="mb-2">Receive exclusive offers in your mailbox</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your email"
                className="p-2 rounded-l-md flex-1 text-gray-900"
              />
              <button className="bg-orange-500 text-white px-4 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>All Rights Reserved © Your Company, 2021</p>
          <p>
            Made with 💛 by <span className="font-semibold">Themewapan</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
