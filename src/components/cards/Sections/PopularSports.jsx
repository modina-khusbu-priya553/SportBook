import React from "react";
import Image from "next/image";
import Link from "next/link";
import footballImg from "../../../../public/asset/football.jpg";
import cricketImg from "../../../../public/asset/cricket.jpg";
import basketballImg from "../../../../public/asset/basketball.jpg";

const sports = [
  { name: "Football", image: footballImg },
  { name: "Cricket", image: cricketImg },
  { name: "Basketball", image: basketballImg },
];

const PopularSports = () => {
  return (
    <div className="bg-emerald-600 mt-4">
      <section className="py-15">
        <div className="max-w-7xl mx-auto px-5">
          {/* heading */}
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-10 space-y-2">
            <h2 className="text-2xl md:text-4xl font-bold text-[#F7F7F2]">
              Explore Popular Sports
            </h2>
            <p className="text-white/70 text-base md:text-lg">
              Find the perfect facility for the game you love.
            </p>
          </div>

          {/* cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
            {sports.map(({ name, image }, index) => (
              <Link
                key={index}
                href={"/all-facilities"}
                className="group relative h-40 md:h-56 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* dark overlay - text always readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* sport name */}
                <div className="absolute inset-0 flex items-end justify-center pb-4">
                  <h3 className="text-white text-lg md:text-xl font-semibold tracking-wide">
                    {name}
                  </h3>
                </div>

                {/* hover accent underline */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#22C55E] group-hover:w-16 transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularSports;
