// app/components/FeaturedRestaurants.tsx
"use client";
import Image from "next/image";

const restaurants = [
  {
    id: 1,
    name: "Foodworld",
    logo: "/assest/pic11.png",
    image: "/assest/pic1.png",
    discount: "20% off",
    fast: true,
    rating: 46,
    status: "Opens tomorrow",
    statusType: "closed",
  },
  {
    id: 2,
    name: "Pizzahub",
    logo: "/assest/pic2.png",
    image: "/assest/pic22.png",
    discount: "15% off",
    fast: true,
    rating: 40,
    status: "Opens tomorrow",
    statusType: "closed",
  },
  {
    id: 3,
    name: "Donuts hut",
    logo: "/assest/pic3.png",
    image: "/assest/burger1.png",
    discount: "10% off",
    fast: true,
    rating: 20,
    status: "Open Now",
    statusType: "open",
  },
  {
    id: 4,
    name: "Donuts hut",
    logo: "/assest/pic4.png",
    image: "/assest/pic44.png",
    discount: "15% off",
    fast: true,
    rating: 50,
    status: "Open Now",
    statusType: "open",
  },
  {
    id: 5,
    name: "Ruby Tuesday",
    logo: "/assest/pic5.png",
    image: "/assest/pic55.png",
    discount: "10% off",
    fast: true,
    rating: 26,
    status: "Open Now",
    statusType: "open",
  },
  {
    id: 6,
    name: "Kuakata Fried Chicken",
    logo: "/assest/pic666.png",
    image: "/assest/pic66.png",
    discount: "25% off",
    fast: true,
    rating: 53,
    status: "Open Now",
    statusType: "open",
  },
  {
    id: 7,
    name: "Red Square",
    logo: "/assest/pic7.png",
    image: "/assest/pic77.png",
    discount: "10% off",
    fast: true,
    rating: 45,
    status: "Open Now",
    statusType: "open",
  },
  {
    id: 8,
    name: "Taco Bell",
    logo: "/assest/pic7.png",
    image: "/assest/pp.png",
    discount: "10% off",
    fast: true,
    rating: 35,
    status: "Open Now",
    statusType: "open",
  },
];

export default function FeaturedRestaurants() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8">
        Featured Restaurants
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-30">
        {restaurants.map((res) => (
          <div
            key={res.id}
            className="rounded-xl  hover:shadow-lg transition overflow-hidden w-60 max-w-[400px] mx-auto"
          >
            {/* Image with discount + fast */}
            <div className="relative">
              <Image
                src={res.image}
                alt={res.name}
                width={200}
                height={200}
                className="w-60 h-32 object-cover"
              />
              <div className="absolute top-2 left-2 flex gap-2">
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-md">
                  {res.discount}
                </span>
                {res.fast && (
                  <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-md">
                    Fast
                  </span>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="p-3 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image src={res.logo} alt={res.name} width={22} height={22} />
                <p className="font-semibold text-sm">{res.name}</p>
              </div>
              <p className="text-yellow-500 text-sm">⭐ {res.rating}</p>

              {/* Status with colored box */}
              <span
                className={`text-xs px-2 py-1 rounded-md font-medium w-fit ${
                  res.statusType === "open"
                    ? "bg-green-100 text-green-700"
                    : "bg-green-100 text-orange-500"
                }`}
              >
                {res.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <button className="bg-yellow-400 px-6 py-2 rounded-full font-medium hover:bg-yellow-500 transition">
          View All
        </button>
      </div>
    </section>
  );
}
