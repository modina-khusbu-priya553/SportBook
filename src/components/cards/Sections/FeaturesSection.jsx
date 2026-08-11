import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getFacilitiesData } from "@/app/lib/data";
import { Chip } from "@heroui/react";
import { MapPin, ArrowUpRight } from "lucide-react";

const FeaturesSection = async () => {
    const allFacilitiesData = await getFacilitiesData();

     const featured = allFacilitiesData.slice(0, 6);
    return (
        <section className="bg-[#F7F7F2] py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-3">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-950">
            Featured Facilities
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            Hand-picked venues our players book the most.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((facility) => {
            const {
              _id,
              name,
              image,
              location,
              sport_type,
              price_per_hour,
              capacity,
            } = facility;

            return (
              <div
                key={_id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Chip
                    size="sm"
                    variant="solid"
                    className="absolute top-3 right-3 bg-white/90 backdrop-blur"
                  >
                    {sport_type}
                  </Chip>
                </div>

                {/* details */}
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-semibold text-blue-950">
                    {name}
                  </h3>

                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <MapPin size={16} />
                    <span>{location}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 pt-1">
                    <span>Capacity: {capacity}</span>
                    <span className="text-lg font-bold text-[#22C55E]">
                      ${price_per_hour}
                      <span className="text-xs font-normal text-gray-500">/hr</span>
                    </span>
                  </div>

                  <Link
                    href={`/all-facilities/${_id}`}
                    className="mt-2 flex items-center justify-center gap-2 w-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-medium py-2.5 rounded-lg transition-colors"
                  >
                    Book Now
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    );
};

export default FeaturesSection;