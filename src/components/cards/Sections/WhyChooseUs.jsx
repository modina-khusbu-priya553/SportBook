import React from 'react';
import { Zap, ShieldCheck, Wallet, Lock } from "lucide-react";
import verifiedimg from '../../../../public/asset/varified.jpg';
import secureImage from '../../../../public/asset/secure.jpg';
import affortImage from '../../../../public/asset/affort.jpg';
import bookingImage from '../../../../public/asset/book.jpg';
import Image from 'next/image';

const features = [
  {
    icon: Zap,
    title: "Instant Booking",
    description: "Book your facility in just a few clicks.",
    image: bookingImage,
  },
  {
    icon: ShieldCheck,
    title: "Verified Facilities",
    description: "Discover quality facilities with ease.",
    image: verifiedimg,
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description: "Find sports facilities that fit your budget.",
    image: affortImage,
  },
  {
    icon: Lock,
    title: "Secure & Reliable",
    description: "Your booking experience is simple & safe.",
    image: secureImage,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-10 md:py-20 max-w-7xl mx-auto px-5">
      
        <div className="bg-[#F7F7F2] py-10 px-8 rounded-2xl">
        {/* heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-3">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-950">
            Why Choose SportNest?
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            Everything you need to find, book, and enjoy your favorite sports
            facilities.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {features.map(({ icon: Icon, title, description, image }, index) => (
            <div
              key={index}
              className="h-full flex flex-col relative overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* upper half - white, icon + text - flex-1 flexible height */}
              <div className="bg-white p-6 flex-1 flex flex-col items-center justify-center text-center gap-3 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#22C55E]/10 flex items-center justify-center">
                  <Icon className="text-[#22C55E]" size={24} />
                </div>
                <h3 className="font-semibold text-blue-950 text-lg">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {description}
                </p>
              </div>

              {/* lower half - blurred image - always fixed height, shrink-0 */}
              <div className="relative h-28 shrink-0 overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover blur-[2px] scale-110 group-hover:scale-125 group-hover:blur-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </section>
  );
};

export default WhyChooseUs;