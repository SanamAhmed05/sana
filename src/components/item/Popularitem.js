// app/components/PopularItems.tsx
"use client";

import Image from "next/image";

export default function PopularItems() {
  const items = [
    { id: 1, name: "Cheese Burger", location: "Burger Arena", price: "$3.88", image: "/assest/pp.png" },
    { id: 2, name: "Toffe's Cake", location: "Top Sticks", price: "$4.00", image: "/assest/jj.png" },
    { id: 3, name: "Dancake", location: "Cake World", price: "$1.99", image: "/assest/burger1.png" },
    { id: 4, name: "Crispy Sandwich", location: "Fastfood Dine", price: "$3.00", image: "/assest/pp.png" },
    { id: 5, name: "Pizza Slice", location: "Pizza World", price: "$2.50", image: "/assest/yy.png" },
  ];

  return (
    <div className="popular-items-section py-6 px-4 bg-transparent relative">
      <h2 className="section-title text-2xl font-bold mb-6 text-center">Popular items</h2>
      <div className="flex items-center justify-center space-x-4 relative">
        {/* Left Circle */}
        <div className="absolute left-14 top-1/3 -translate-y-1/2 w-12 h-12 bg-orange-500 text-white rounded-full text-lg font-bold flex items-center justify-center cursor-pointer">
          {"<"}
        </div>

        {/* Items */}
        <div className="flex items-center space-x-4 overflow-x-auto">
          {items.map((item) => (
            <div key={item.id} className="item-card flex-shrink-0 w-46">
              <Image
                src={item.image}
                alt={item.name}
                width={190}
                height={190}  // make all images square
                className="item-image rounded-lg object-cover"
              />
              <div className="item-info p-2 text-left">
  <h3 className="item-title text-sm font-semibold">{item.name}</h3>
  <p className="item-location text-yellow-300 text-xs">📍 {item.location}</p>
  <p className="item-price font-bold text-sm mt-1">{item.price}</p>
  <button className="mt-2 bg-orange-500 text-white text-sm px-5 py-2 rounded w-full hover:bg-orange-600 transition">
    Order Now
  </button>

              </div>
            </div>
          ))}
        </div>
        {/* Right Circle */}
        <div className="absolute right-14 top-1/3 -translate-y-1/2 w-12 h-12 bg-orange-500 text-white rounded-full text-lg font-bold flex items-center justify-center cursor-pointer">
          {">"}
        </div>
      </div>
    </div>
  );
}
