// app/components/DealsSection.tsx
"use client";
import Image from "next/image";

export default function DealsSection() {
  const deals = [
    {
      id: 1,
      title: (
        <>
          Best deals <span className="text-yellow-100">Crispy Sandwiches</span>
        </>
      ),
      desc: "Enjoy the large size of <br/>sandwiches. Complete perfect slice of sandwiches.",
      btn: "PROCEED TO ORDER",
      image: "/assest/rr.jpg",
      reverse: true,
    },
    {
      id: 2,
      title: (
        <>
          Celebrate parties with{" "}
          <span className="text-orange-500">Fried Chicken</span>
        </>
      ),
      desc: "Get the best fried chicken smeared<br/> with a lip smacking lemon chili flavor. Check out best deals for fried chicken.",
      btn: "Proceed to order",
      image: "/assest/22.png",
      reverse: false,
    },
    {
      id: 3,
      title: (
        <>
          Wanna eat hot <br/> & spicy{" "}
          <span className="text-orange-500">Pizza?</span>
        </>
      ),
      desc: "Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.",
      btn: "PROCEED TO ORDER",
      image: "/assest/pizza.png",
      reverse: true,
    },
  ];

  return (
    <section className="space-y-10 p-6 md:p-12 max-w-5xl mx-auto">
      {deals.map((deal) => (
        <div
          key={deal.id}
          className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col md:flex-row items-center"
        >
          {/* Image Section */}
          <div
            className={`md:w-1/2 w-full h-64 ${
              deal.reverse ? "order-2" : "order-1"
            }`}
          >
            <Image
              src={deal.image}
              alt="deal"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div
            className={`md:w-1/2 w-full p-4 md:p-6 flex flex-col justify-center h-64 ${
              deal.reverse ? "order-1" : "order-2"
            }`}
          >
            <h2 className="text-xl font-bold mb-2">{deal.title}</h2>
            <p className="text-gray-600 mb-4">{deal.desc}</p>
            <button className="bg-gradient-to-r from-orange-400 to-yellow-400 px-4 py-2 rounded-lg text-white font-semibold shadow-md hover:opacity-90 transition text-sm">
              {deal.btn}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
