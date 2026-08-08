import React from "react";
import { getFacilitiesData } from "@/app/lib/data";
import AllFacilitiesCard from "@/components/cards/AllFacilitiesCard";
import { Label, SearchField, ListBox, Select } from "@heroui/react";
import { BiFilterAlt } from "react-icons/bi";

const AllFacilitiesPage = async () => {
  const allFacilitiesData = await getFacilitiesData();

  return (
    <div className="bg-[#F7F7F2]">
      <div className="container mx-auto py-20 px-10">
        <div className="flex flex-col items-center gap-8 justify-center text-center">
          <h2 className="text-xl md:text-5xl font-bold">
            Discover Our Sports Facilities
          </h2>
          <p className="text-muted text-xl">
            Explore premium sports venues and book your favorite facility in
            just a few clicks.
          </p>
        </div>
        <div className="flex items-center gap-8 justify-center flex-col md:flex-row py-8">
          <SearchField
            name="primary-search"
            variant="primary"
            className="w-full md:w-1/2"
          >
            <SearchField.Group className="p-5">
              <SearchField.SearchIcon className="text-xl font-semibold" />
              <SearchField.Input
                className="text-xl font-semibold"
                placeholder="Search Facility..."
              />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>
          <div>
            <Select
              className="w-[256px] hover: text-lg"
              placeholder="All sports"
              variant="primary"
            >
              <Select.Trigger className="p-2">
                <span className="flex items-center gap-1 ">
                  <BiFilterAlt className="text-2xl font-semibold px-0.5 text-gray-500" />
                  <Select.Value className="text-lg font-semibold" />
                </span>
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="florida" textValue="Florida">
                    Florida
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="delaware" textValue="Delaware">
                    Delaware
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="california" textValue="California">
                    California
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="texas" textValue="Texas">
                    Texas
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="new-york" textValue="New York">
                    New York
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="washington" textValue="Washington">
                    Washington
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-5">
          {allFacilitiesData.map((facility) => (
            <AllFacilitiesCard key={facility._id} facility={facility} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFacilitiesPage;
