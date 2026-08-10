import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { PiCalendarXBold } from "react-icons/pi";

const EmptyBookingCard = () => {
  return (
    <div className="md:py-10">
      <div className="bg-white flex flex-col items-center justify-center gap-3 py-6 px-3 rounded-lg shadow-lg text-center">
        
        <PiCalendarXBold className="text-5xl text-red-600" />
      
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
        No bookings yet
      </h2>
      <p className="text-gray-500 max-w-sm mb-6">
        You have not booked any facility. Explore available facilities and
        reserve your slot today.
      </p>
      <Link href="/all-facilities">
        <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-lg">
          Browse Facilities
        </Button>
      </Link>
      </div>
    </div>
  );
};

export default EmptyBookingCard;
