import React from "react";
import { getMyFacilities } from "../lib/data";
import { headers } from "next/headers";
import { auth } from "../lib/auth";

import EmptyCard from "@/components/cards/ManageMyFacilitiesCard/EmptyCard";
import MyFacilities from "@/components/cards/ManageMyFacilitiesCard/MyFacilities";

const ManageFacilities = async () => {
  // user info
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  const user = session?.user;
  const userId = user?.id;

  // token
  const tokenResult = await auth.api.getToken({
    headers: await headers(),
  });
  const token = tokenResult?.token;

  const myFacilities = await getMyFacilities(userId, token);

  return (
    <div>
      <div className="max-w-7xl mx-auto py-10 md:py-20 px-5 gap-4 flex flex-col items-center justify-center">
        <h2 className="md:text-3xl text-xl font-bold text-blue-950">
          Manage Your Facilities
        </h2>

        <p className="text-gray-500 pb-4 md:pb-5">
          Update your facility details or remove a listing whenever needed.
        </p>

        {myFacilities.length === 0 ? (
          <EmptyCard></EmptyCard>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            {myFacilities.map((facilities) => (
              <MyFacilities
                key={facilities._id}
                facilities={facilities}
              ></MyFacilities>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageFacilities;
