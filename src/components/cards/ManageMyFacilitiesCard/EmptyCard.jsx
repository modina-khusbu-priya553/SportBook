import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { PiCalendarXBold } from "react-icons/pi";

const EmptyCard = () => {
  return (
    <div className="py-4">
      <div className="bg-[#F7F7F2] flex flex-col items-center justify-center gap-3 py-6 px-3 rounded-lg shadow-lg text-center">
        <PiCalendarXBold className="text-5xl text-red-600" />

        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Nothing to Manage
        </h2>
        <p className="text-gray-500 max-w-sm mb-6">
          You have not added any facilities yet. Add your first facility to
          start managing your listings
        </p>
        <Link href="/add-facility">
          <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-lg">
            + Add Facility
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCard;
