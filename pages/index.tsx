import Image from "next/image";
import Pill from "@/components/common/Pill";
import { PROPERTYLISTINGSAMPLE, HERO_BACKGROUND } from "@/constants";
import { PropertyProps } from "@/interfaces";

export default function Home() {
  const filters = ["Top Villa", "Self Checkin", "Free Parking", "Pet Friendly"];

  return (
    <div>
      {/* Hero */}
      <section
        className="w-full h-[300px] bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
        style={{ backgroundImage: `url(${HERO_BACKGROUND})` }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Find your favorite place here!</h1>
        <p className="text-lg">The best prices for over 2 million properties worldwide.</p>
      </section>

      {/* Filters */}
      <section className="flex flex-wrap gap-3 justify-center my-6">
        {filters.map((filter) => (
          <Pill key={filter} label={filter} />
        ))}
      </section>

      {/* Listings */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps) => (
          <div key={property.name} className="border rounded overflow-hidden shadow hover:shadow-md transition">
            <img src={property.image} alt={property.name} className="w-full h-52 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{property.name}</h2>
              <p className="text-sm text-gray-600">
                {property.address.city}, {property.address.country}
              </p>
              <p className="text-blue-600 font-semibold mt-2">${property.price}/night</p>
              <p className="text-yellow-600">⭐ {property.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
