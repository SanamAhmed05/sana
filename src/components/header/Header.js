"use client";
import Image from "next/image";
import { MapPin, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row md:items-center md:justify-between px-6 py-3 bg-white shadow-sm">
      {/* Top (Logo for mobile center) */}
      <div className="flex justify-between items-center w-full md:w-auto pl-0 md:pl-20 mb-3 md:mb-0">
        <Image
          src="/assest/logo.png"
          alt="FoodWagon Logo"
          width={140}
          height={40}
          priority
        />
      </div>

      {/* Center: Location */}
      <div className="hidden md:flex items-center text-gray-700 text-sm">
        <span className="font-semibold mr-1">Deliver to:</span>
        <MapPin className="text-orange-500 w-4 h-4 mr-1" />
        <span className="font-medium">
          Current Location{" "}
          <span className="font-semibold">Mohammadpur Bus Stand, Dhaka</span>
        </span>
      </div>

      {/* Right: Search + Login */}
      <div className="flex justify-center md:justify-end items-center gap-3 md:gap-4 w-full md:w-auto pr-0 md:pr-20">
        {/* Search Button */}
        <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-orange-500">
          <Search className="w-4 h-4" />
          <span className="hidden sm:inline">Search Food</span>
        </button>

        {/* Login Button */}
        <button className="flex items-center gap-1 sm:gap-2 text-orange-500 text-sm font-medium px-3 py-2 rounded-lg shadow shadow-orange-300 hover:shadow-orange-400">
          <User className="w-4 h-4" />
          <span className="hidden sm:inline">Login</span>
        </button>
      </div>
    </nav>
  );
}
