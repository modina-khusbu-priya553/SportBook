"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchField, Select, ListBox } from "@heroui/react";
import { BiFilterAlt } from "react-icons/bi";

const sportOptions = [
  "Football",
  "Table Tennis",
  "Hockey",
  "Volleyball",
  "Tennis",
  "Cricket",
  "Basketball",
  "Badminton",
  "Swimming",
];

const FacilityFilters = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [sportType, setSportType] = useState("");

  const handleSearch = (value) => {
    setSearch(value);
    router.push(`/all-facilities?search=${value}&sport_type=${sportType}`);
  };

  const handleSportSelect = (key) => {
    setSportType(key);
    router.push(`/all-facilities?search=${search}&sport_type=${key}`);
  };

  return (
    <div className="flex items-center gap-8 justify-center flex-col md:flex-row py-8">
      <SearchField
        name="primary-search"
        variant="primary"
        value={search}
        onChange={handleSearch}
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

      <Select
        className="w-[256px] text-lg"
        placeholder="All sports"
        variant="primary"
        onSelectionChange={handleSportSelect}
      >
        <Select.Trigger className="p-2">
          <span className="flex items-center gap-1">
            <BiFilterAlt className="text-2xl font-semibold px-0.5 text-gray-500" />
            <Select.Value className="text-lg font-semibold" />
          </span>
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            {sportOptions.map((sport) => (
              <ListBox.Item key={sport} id={sport} textValue={sport}>
                {sport}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>
    </div>
  );
};

export default FacilityFilters;