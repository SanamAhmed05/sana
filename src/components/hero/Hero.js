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
      <section className="bg-gradient-to-r from-yellow-400 bg-yellow-300 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16  pl-27 flex flex-col md:flex-row items-center justify-between relative">
          {/* Left Content */}
          <div className="text-center md:text-left md:w-1/2 z-10">
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Are you starving?
            </h1>
            <p className="text-gray-100 mb-8">
              Within a few clicks, find meals that are accessible near you
            </p>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow p-4">
              <div className="flex gap-6 mb-4">
                <button
                  className={`flex items-center gap-2 font-medium ${
                    activeTab === "delivery"
                      ? "text-orange-500 border-b-2 border-orange-500 pb-1"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab("delivery")}
                >
                  <Bike className="w-4 h-4" /> Delivery
                </button>
                <button
                  className={`flex items-center gap-2 font-medium ${
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
              <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  className="flex-1 px-4 py-3 outline-none text-gray-700"
                />
                <button className="bg-orange-500 px-6 text-white font-medium flex items-center gap-2">
                  <Search className="w-4 h-4" /> Find Food
                </button>
              </div>
            </div>
          </div>

          {/* Right Image - niche lagane ke liye absolute */}
          <div className="absolute right-0 pr-12 bottom-0 md:bottom-[-40px] md:right-12">
            <Image
              src="/assest/egg.jpg"
              alt="Food Bowl"
              width={320}
              height={220}
              className="rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className=" overflow-hidden"
          >
            {/* Image with Discount Tag */}
            <div className="relative">
              <Image
                src={offer.image}
                alt={offer.title}
                width={50}
                height={200}
                className="w-full h-56 object-cover"
              />
              <span className="absolute bottom-0 left-0 text-3xl bg-yellow-400 h-10 text-white text-sm font-bold px-3 py-1 rounded">
                {offer.discount} Off
              </span>
            </div>

            {/* Text */}
            <div className="p-4">
              <h3 className="font-bold">{offer.title}</h3>
              <p className="bg-orange-100 text-black-200 font-medium mt-2 inline-block px-3 py-1 rounded">
                {offer.days}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
