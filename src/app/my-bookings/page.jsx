import React from "react";
import { getBookings } from "@/app/lib/data";
import { auth } from "../lib/auth";
import { headers } from "next/headers";
import BookingCard from "@/components/cards/BookingCard";


const MyBookings = async () => {

    // user info
    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
    })
      const user = session?.user;
      const userId = user?.id
  const bookingDetails = await getBookings({userId: userId});
  console.log(bookingDetails)
  console.log(user)
  return (
    <div className="bg-[#F7F7F2]">
      {bookingDetails.map(bookings =><BookingCard key={bookings._id} bookings={bookings}></BookingCard>)}
    </div>
  );
};

export default MyBookings;
