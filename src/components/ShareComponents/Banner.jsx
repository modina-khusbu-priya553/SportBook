import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import heroImage from '../../../public/asset/heroImage.jpg';

const Banner = () => {
    return (
         <div className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
      {/* background image - blurred */}
      <Image
        src={heroImage}
        alt="Sports facility"
        fill
        priority
        sizes="100vw"
        className="object-cover blur-sm scale-110"
      />

      {/* dark overlay - text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 via-blue-950/60 to-blue-950/80" />

      {/* content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-5 max-w-4xl mx-auto">
        <span className="text-[#4ADE80] font-semibold tracking-wide text-sm md:text-base mb-4 uppercase">
          Book smarter, play more
        </span>

        <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight mb-5">
          Find & Book Your Perfect
          <br />
          Sports Facility
        </h1>

        <p className="text-white/80 text-base md:text-xl max-w-xl mb-8">
          Discover premium sports venues near you and reserve your spot in
          just a few clicks.
        </p>

        <Link
          href="/all-facilities"
          className="group flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
        >
          Explore Facilities
          <ArrowRight
            size={20}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
    );
};

export default Banner;