import React from "react";
import { getBookings } from "@/app/lib/data";
import { auth } from "../lib/auth";
import { headers } from "next/headers";
import BookingCard from "@/components/cards/BookingCard/BookingCard";
import { getDeleteBooking } from "../lib/action";
import EmptyBookingCard from "@/components/cards/BookingCard/EmptyBookingCard";

const MyBookings = async () => {
  // user info
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  // token
  const tokenResult = await auth.api.getToken({
    headers: await headers(),
  });
  const token = tokenResult?.token;
  
  const user = session?.user;
  const userId = user?.id;
  const bookingDetails = await getBookings(userId, token);

  return (
    <div className="bg-[#F7F7F2]">
      <div className="md:py-20 py-10 px-5 max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <h2 className="font-bold pb-8 text-xl  text-blue-950 md:text-3xl">
            My Bookings
          </h2>
        </div>

        {bookingDetails.length === 0 ? (
          <EmptyBookingCard></EmptyBookingCard>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            {bookingDetails.map((bookings) => (
              <div key={bookings._id}>
                <BookingCard bookings={bookings} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
