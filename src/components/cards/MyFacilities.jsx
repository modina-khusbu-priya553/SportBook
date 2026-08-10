import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaRegUser } from "react-icons/fa6";

import { IoLocationOutline } from "react-icons/io5";
import { LuBadgeDollarSign } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";

import EditFacilityModal from "./EditFacilityModal";
import DeleteFacilityCard from "./DeleteFacilityCard";
import { getUpdateFacility } from "@/app/lib/action";

const MyFacilities = ({ facilities }) => {
  const {
    image,
    name,
    location,
    sport_type,
    price_per_hour,
    capacity,
    description,
    available_slots,
  } = facilities;
  return (
    <Card
      className="shadow-md hover:shadow-xl transition-shadow duration-300 
        flex flex-col md:flex-row gap-6 md:justify-between p-4 [&_svg]:text-[#22C55E]"
    >
      {/* Mobile: image + badge*/}
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="object-cover rounded-xl "
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Chip overlays top-right of image, mobile only */}
        <div className="absolute top-3 right-3 md:hidden">
          <Chip color="default" size="lg">
            <Chip.Label>{sport_type}</Chip.Label>
          </Chip>
        </div>
      </div>
      {/* Details */}
      <div className="flex flex-col justify-between gap-4">
        <div className="space-y-2">
          <h2 className="md:text-lg  text-blue-950 font-semibold">{name}</h2>
          <p className="text-sm md:text-md text-gray-500">{description}</p>

          <span className="flex items-center gap-2 text-sm md:text-md text-gray-600">
            <IoLocationOutline />
            Location: {location}
          </span>
          <span className="flex items-center gap-2 text-sm md:text-md text-gray-600">
            <FaRegUser />
            Capacity: {capacity}
          </span>

          <div className="flex items-center gap-2 text-sm md:text-md text-gray-600">
            <LuBadgeDollarSign />
            <span className="text-sm md:text-md text-gray-500">Price:</span>
            <span className="font-semibold text-[#22C55E]">
              ${price_per_hour}/hr
            </span>
          </div>

          {/* Available slots */}
          {available_slots?.length > 0 && (
            <div className="flex flex-col gap-1.5 pt-1">
              <span className="flex items-center gap-2 text-sm md:text-md text-gray-600">
                <FaRegClock />
                Available Slots:
              </span>
              <div className="flex flex-wrap gap-2">
                {available_slots.map((slot, index) => (
                  <Chip key={index} color="default" size="sm" variant="soft">
                    <Chip.Label>{slot}</Chip.Label>
                  </Chip>
                ))}
              </div>
            </div>
          )}
        </div>

          {/* button */}
        <div className="flex items-center gap-4">
          <EditFacilityModal facilities={facilities} updatedFacilityAction={getUpdateFacility}></EditFacilityModal>
          <DeleteFacilityCard></DeleteFacilityCard>
        </div>
      </div>

      {/* Desktop: chip */}
      <div className="hidden md:flex flex-col justify-between items-end">
        <Chip color="success" variant="soft" size="lg">
          <Chip.Label>{sport_type}</Chip.Label>
        </Chip>
      </div>
    </Card>
  );
};

export default MyFacilities;
