import React from "react";
import { getFacilityDetails } from "@/app/lib/data";
import { Chip } from "@heroui/react";
import { MapPin, Users, Clock } from "lucide-react";
import Image from "next/image";
import BookingFormCard from "@/components/cards/BookingCard/BookingFormCard";
import { postBookingData } from "@/app/lib/action";

const FacilitiesDetails = async ({ params }) => {
  const { detailsId } = await params;
  const facilityDetails = await getFacilityDetails(detailsId);
  const {
    name,
    sport_type,
    description,
    available_slots,
    capacity,
    price_per_hour,
    location,
    image,
  } = facilityDetails;

  return (
    <div className="bg-[#F7F7F2]">
      <div className="max-w-7xl mx-auto py-10 md:py-15 p-5">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 ">
          {/* left */}
          <div className="bg-white px-6 shadow-lg space-y-4 rounded-lg p-6 w-full md:w-auto">
            <Image
              src={image}
              alt={name}
              width={400}
              height={400}
              className="object-cover rounded-xl w-full h-64 "
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <h2 className="text-lg md:text-2xl font-bold text-gray-800">
              {name}
            </h2>

            <div className="flex items-center justify-center gap-4 text-gray-600">
              <span className="flex items-center gap-1 bg-gray-100 p-3 rounded-xl w-full">
                <MapPin size={20} /> Location:{" "}
                <h2 className="text-black font-semibold">{location}</h2>
              </span>

              <span className="flex items-center gap-1 bg-gray-100 p-3 rounded-xl w-full">
                <h3>Sport Type:</h3>
                <h2 className="text-black font-semibold">{sport_type}</h2>
              </span>
            </div>

            <div className="flex items-center justify-center gap-4 text-gray-600">
              <span className="flex items-center gap-1 bg-gray-100 p-3 rounded-xl w-full">
                <Users size={16} /> Capacity:
                <h2 className="text-black font-semibold"> Up to {capacity}</h2>
              </span>

              <span className="flex items-center gap-1 bg-gray-100 p-3 rounded-xl w-full">
                <h2>Price:</h2>{" "}
                <h2 className="text-black font-semibold">
                  ${price_per_hour}/hr
                </h2>
              </span>
            </div>
            <div className="flex flex-col gap-3  bg-gray-100 p-3 rounded-xl">
              <span className="flex items-center gap-1 text-lg font-medium">
                <Clock size={16} /> Available Slots
              </span>
              <div className="flex gap-2">
                {available_slots.map((slot, index) => (
                  <Chip key={index} size="md" variant="flat" color="success">
                    {slot}
                  </Chip>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-[400]  bg-gray-100 p-3 rounded-xl">
              <span className="text-lg font-semibold">About this facility</span>
              <p className=" text-gray-500">{description}</p>
            </div>
          </div>

          {/* right */}

          <BookingFormCard postBookingAction={postBookingData} facilityDetails={facilityDetails}></BookingFormCard>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesDetails;
