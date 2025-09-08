"use client";
import Image from "next/image";

export default function Ss() {
  return (
    <section className="bg-gradient-to-b from-[#fff8ef] to-[#ffe7c7] py-16 relative">
      {/* Top Features */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl flex justify-between items-center px-10 py-6 mb-20">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center">
          <Image src="/assets/discount.png" alt="Discount" width={50} height={50} />
          <p className="mt-2 font-bold text-orange-500">Daily<br />Discounts</p>
        </div>

        {/* Divider */}
        <div className="w-[1px] h-12 bg-gray-300"></div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center">
          <Image src="/assets/tracking.png" alt="Tracking" width={50} height={50} />
          <p className="mt-2 font-bold text-orange-500">Live<br />Tracing</p>
        </div>

        {/* Divider */}
        <div className="w-[1px] h-12 bg-gray-300"></div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center">
          <Image src="/assets/delivery.png" alt="Delivery" width={50} height={50} />
          <p className="mt-2 font-bold text-orange-500">Quick<br />Delivery</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-8">
        {/* Phone Mockups */}
        <div className="relative flex gap-4">
          <Image
            src="/assets/phone1.png"
            alt="Phone 1"
            width={220}
            height={450}
            className="rounded-xl shadow-lg"
          />
          <Image
            src="/assets/phone2.png"
            alt="Phone 2"
            width={220}
            height={450}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Install App Text */}
        <div className="mt-10 md:mt-0 md:ml-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">Install the app</h2>
          <p className="text-gray-600 mb-6 max-w-md">
            It’s never been easier to order food. Look for the finest discounts and you’ll
            be lost in a world of delectable food.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Image
              src="/assets/googleplay.png"
              alt="Google Play"
              width={150}
              height={50}
              className="cursor-pointer"
            />
            <Image
              src="/assets/appstore.png"
              alt="App Store"
              width={150}
              height={50}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
