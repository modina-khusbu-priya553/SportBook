'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// 1: post api for add facilities

export const getPostData = async(formData) =>{
    const newFacility = Object.fromEntries(formData.entries())
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(newFacility),

    });

    const data = await res.json();
    console.log(data)
    return data;
}

// post api for booking

export const postBookingData = async(bookingData) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(bookingData),

    });
     if (!res.ok) {
    console.error("Response status:", res.status);
     const text = await res.text();
    console.error("Response body:", text);
    throw new Error("Booking failed");
  }

  const data = await res.json();
  console.log(data);
  return data;
};

// delete api for booking
export const getDeleteBooking = async(bookingId) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${bookingId}`,{
        method: "DELETE"
    })
     const data = await res.json();
    console.log("data delete",data)

    if(data.deletedCount > 0){
        revalidatePath('/my-bookings')
        redirect('/my-bookings')
    }
    return data;

}
