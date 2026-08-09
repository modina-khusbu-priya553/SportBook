import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { PiCalendarXBold } from "react-icons/pi";

const EmptyBookingCard = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="bg-gray-100 p-6 rounded-full mb-6">
        <PiCalendarXBold className="text-5xl text-gray-400" />
      </div>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
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
  );
};

export default EmptyBookingCard;
