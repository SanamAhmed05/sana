// app/page.tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import { Bike, Package, Search } from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("delivery");

  const offers = [
    {
      id: 1,
      image: "/assest/bc.png",
      discount: "15%",
      title: "Greys Vage",
      days: "6 Days Remaining",
    },
    {
      id: 2,
      image: "/assest/sald.png",
      discount: "10%",
      title: "Greys Vage",
      days: "6 Days Remaining",
    },
    {
      id: 3,
      image: "/assest/sal.png",
      discount: "25%",
      title: "Greys Vage",
      days: "7 Days Remaining",
    },
    {
      id: 4,
      image: "/assest/saln.png",
      discount: "20%",
      title: "Greys Vage",
      days: "8 Days Remaining",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-300 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 flex flex-col md:flex-row items-center justify-between relative">
          {/* Left Content */}
          <div className="text-center md:text-left md:w-1/2 z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Are you starving?
            </h1>
            <p className="text-sm sm:text-base text-gray-100 mb-6 sm:mb-8">
              Within a few clicks, find meals that are accessible near you
            </p>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow p-4">
              <div className="flex gap-4 sm:gap-6 mb-4 justify-center md:justify-start">
                <button
                  className={`flex items-center gap-2 font-medium text-sm sm:text-base ${
                    activeTab === "delivery"
                      ? "text-orange-500 border-b-2 border-orange-500 pb-1"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab("delivery")}
                >
                  <Bike className="w-4 h-4" /> Delivery
                </button>
                <button
                  className={`flex items-center gap-2 font-medium text-sm sm:text-base ${
                    activeTab === "pickup"
                      ? "text-orange-500 border-b-2 border-orange-500 pb-1"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab("pickup")}
                >
                  <Package className="w-4 h-4" /> Pickup
                </button>
              </div>

              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row border border-gray-200 rounded-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  className="flex-1 px-4 py-3 outline-none text-gray-700 text-sm sm:text-base"
                />
                <button className="bg-orange-500 px-4 sm:px-6 py-3 text-white font-medium flex items-center justify-center gap-2 text-sm sm:text-base">
                  <Search className="w-4 h-4" /> Find Food
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="mt-8 md:mt-0 md:absolute md:right-0 md:pr-8 md:bottom-[-20px] sm:bottom-[-30px] md:bottom-[-40px] md:right-8">
            <Image
              src="/assest/egg.jpg"
              alt="Food Bowl"
              width={200}
              height={150}
              className="rounded-full w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="overflow-hidden"
          >
            {/* Image with Discount Tag */}
            <div className="relative">
              <Image
                src={offer.image}
                alt={offer.title}
                width={50}
                height={200}
                className="w-full h-40 sm:h-48 md:h-56 object-cover"
              />
              <span className="absolute bottom-0 left-0 text-sm sm:text-base bg-yellow-400 h-8 sm:h-10 text-white font-bold px-2 sm:px-3 py-1 rounded">
                {offer.discount} Off
              </span>
            </div>

            {/* Text */}
            <div className="p-4">
              <h3 className="font-bold text-sm sm:text-base">{offer.title}</h3>
              <p className="bg-orange-100 text-black-200 font-medium mt-2 inline-block px-2 sm:px-3 py-1 rounded text-xs sm:text-sm">
                {offer.days}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}