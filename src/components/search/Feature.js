import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FoodDeliveryPage() {
  return (
    <div className="bg-[#FEFAF1] py-10">
      <div className="max-w-5xl mx-auto  shadow-sm p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">
            Search by Food
          </h1>
          <div className="flex items-center space-x-3">
            <span className="text-orange-500 text-sm font-medium">View all</span>
            <button className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Food Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {/* Pizza */}
          <div className="text-center cursor-pointer">
            <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=150&h=150&fit=crop&crop=center"
                alt="Pizza"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm font-medium text-gray-800">Pizza</p>
          </div>

          {/* Burger */}
          <div className="text-center cursor-pointer">
            <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
              <img
                src="/assest/1.png"
                alt="Burger"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm font-medium text-gray-800">Burger</p>
          </div>

          {/* Noodles */}
          <div className="text-center cursor-pointer">
            <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border-4 border-gray-600">
              <img
                src="/assest/burger.png"
                alt="Noodles"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm font-medium text-gray-800">Noodles</p>
          </div>

          {/* Sub-sandwich */}
          <div className="text-center cursor-pointer">
            <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden ">
              <img
                src="/assest/3.png"
                alt="Sub-sandwich"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm font-medium text-gray-800">Sub-sandwich</p>
          </div>

          {/* Chowmein */}
          <div className="text-center cursor-pointer">
            <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                <img
                src="/assest/4.png"
                alt="Chowmein"
                className="w-full h-full object-cover"
                />
            </div>
            <p className="text-sm font-medium text-gray-800">Chowmein</p>
          </div>

          {/* Steak */}
          <div className="text-center cursor-pointer">
            <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden ">
              <img
                src="/assest/5.png"
                alt="Steak"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm font-medium text-gray-800">Steak</p>
          </div>
        </div>
      </div>
    </div>
  );
}
