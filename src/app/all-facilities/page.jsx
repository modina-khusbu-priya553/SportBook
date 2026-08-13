import React from "react";
import { getFacilitiesData } from "@/app/lib/data";
import AllFacilitiesCard from "@/components/cards/AllFacilityCard/AllFacilitiesCard";
import FacilityFilters from "@/components/cards/AllFacilityCard/FacilityFilters";

const AllFacilitiesPage = async ({ searchParams }) => {
  const { search, sport_type } = await searchParams;
  const allFacilitiesData = await getFacilitiesData(search, sport_type);

  return (
    <div className="bg-[#F7F7F2]">
      <div className="max-w-7xl mx-auto md:py-20 py-10 px-5">
        <div className="flex flex-col items-center gap-8 justify-center text-center">
          <h2 className="text-2xl text-blue-950 md:text-5xl font-bold">
            Discover Our Sports Facilities
          </h2>
          <p className="text-muted text-xl">
            Explore premium sports venues and book your favorite facility in
            just a few clicks.
          </p>
        </div>

        <FacilityFilters />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
          {allFacilitiesData.length === 0 ? (
            <p className="col-span-full text-center text-gray-500 py-10">
              No facilities found.
            </p>
          ) : (
            allFacilitiesData.map((facility) => (
              <AllFacilitiesCard key={facility._id} facility={facility} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AllFacilitiesPage;