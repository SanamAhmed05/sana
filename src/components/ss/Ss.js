"use client";
import Image from 'next/image';

const InstallAppSection = () => {
  return (
    <div className="bg-[#FDEBC9] py-12 px-4 md:px-12">
      {/* Top feature bar */}
      <div className="max-w-3xl mx-auto bg-white rounded-[46px] shadow-lg flex flex-col md:flex-row items-center justify-between py-5 px-6 space-y-6 md:space-y-0 md:space-x-6">
        {/* Feature 1 */}
        <div className="flex items-center space-x-3">
          <div className="relative w-40 h-40">
            <Image
              src="/assest/location.jpg" // Add your discount tag icon here
              alt="Daily Discounts"
              
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="text-orange-500 text-2xl font-bold">Daily Discounts</div>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-12 border-l border-gray-300" />

        {/* Feature 2 */}
        <div className="flex items-center h-30 space-x-3">
          <div className="relative w-20 h-40">
            <Image
              src="/assest/Icon (8).svg" // Add your location pin icon here
              alt="Live Tracing"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="text-orange-500 text-2xl font-bold">Live Tracing</div>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-12 border-l border-gray-300" />

        {/* Feature 3 */}
        <div className="flex items-center space-x-3">
          <div className="relative w-20 h-40">
            <Image
              src="/assest/Icon (9).svg" // Add your quick delivery icon here
              alt="Quick Delivery"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="text-orange-500 text-2xl font-bold">Quick Delivery</div>
          </div>
          </div>

      {/* Bottom section */}
      <div className="max-w-6xl mx-auto mt-30 flex flex-col-reverse md:flex-row items-center md:items-start space-y-12 md:space-y-0 md:space-x-20">
        {/* Images on left */}
        <div className="relative pt-20 w-full h-100 max-w-md ">
          <div className="relative  left-0 h-104 md:w-60 md:left-55 md:h-93">
            <Image
              src="/assest/Shadow.svg" // Replace with your first phone screenshot
              alt="Order App Screen 1"
              layout="fill"

              objectFit="contain"
              className="rounded-2xl "
            />
          </div>
          <div className="absolute  -top-16 left-0 w-60 h-104 md:w-72 md:h-88 mt-40 z-10">
            <Image
              src="/assest/iPhone.svg" 
              // Replace with your second phone screenshot
              alt="Order App Screen 2"
              layout="fill"
              objectFit="contain"
              className="rounded-2xl "
            />
          </div>
        </div>

        {/* Text and buttons on right */}
        <div className="max-w-xl text-center md:text-left mt-6 md:mt-0">
          <h2 className="text-5xl font-extrabold text-orange-500 mb-4">
            Install the app
          </h2>
          <p className="text-gray-700 mb-8 max-w-sm">
            It is never been easier to order food. Look for the finest discounts and you will be lost in a world of delectable food.
          </p>
          <div className="flex justify-center md:justify-start space-x-5">
            {/* Google Play button */}
            <a href="#" className="inline-flex items-center px-5 py-2 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <Image src="/assest/Subtract.svg" alt="Google Play" width={30} height={30} />
              <span className="ml-3 text-sm font-semibold text-gray-800">GET IT ON <br /> <span className='font-bold text-lg'>Google Play</span> </span>
            </a>
            {/* App Store button */}
            <a href="#" className="inline-flex items-center px-5 py-2 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <Image src="/assest/Apple logo.svg" alt="App Store" width={30} height={30} />
              <span className="ml-3 text-sm font-semibold text-gray-800">Download on the <br /> <span className='font-bold text-lg'>App Store</span></span>
            </a>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default InstallAppSection;