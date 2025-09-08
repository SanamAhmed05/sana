// app/components/HowItWorks.tsx
import { MapPin, Bell, Receipt, Donut } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-12">
          How does it work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <MapPin className="text-yellow-400 w-8 h-8" />
            <h3 className="font-semibold text-sm mt-4">Select location</h3>
            <p className="text-gray-500 text-xs mt-2">
              Choose the location where your<br/> food will be delivered.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <Bell className="text-yellow-400 w-8 h-8" />
            <h3 className="font-semibold text-sm mt-4">Choose order</h3>
            <p className="text-gray-500 text-xs mt-2">
              Check over hundreds of menus to<br/> pick your favorite food
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <Receipt className="text-yellow-400 w-8 h-8" />
            <h3 className="font-semibold text-sm mt-4">Pay advanced</h3>
            <p className="text-gray-500 text-xs mt-2">
              It's quick, safe, and simple. Select<br/> several methods of payment
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <Donut className="text-yellow-400 w-8 h-8" />
            <h3 className="font-semibold text-sm mt-4">Enjoy meals</h3>
            <p className="text-gray-500 text-xs mt-2">
              Food is made and delivered <br/>directly to your home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
