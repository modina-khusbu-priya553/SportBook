'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// 1: post api for add facilities

export const getPostData = async(formData, token) =>{
    const newFacility = Object.fromEntries(formData.entries())
    newFacility.available_slots = formData.getAll("available_slots");
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(newFacility),

    });

    const data = await res.json();
    console.log(data)
    return data;
}

// post api for booking

export const postBookingData = async(bookingData, token) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
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
    return data;
  
};

// delete api for booking
export const getDeleteBooking = async(bookingId, token) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${bookingId}`,{
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
     const data = await res.json();

    console.log("data after delete",data)

    if(data.deletedCount > 0){
        revalidatePath('/my-bookings')
        redirect('/my-bookings')
    }
    return data;

}

// update api for manage facility

export const getUpdateFacility = async(userId, formData, token) =>{
    const updatedFacility = Object.fromEntries(formData.entries())
    updatedFacility.available_slots = formData.getAll("available_slots");
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-facilities/${userId}`,{
        method: "PATCH",
         headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedFacility),
    });

    const data = await res.json();

     if(data.modifiedCount > 0){
        revalidatePath('/manage-facilities')
        redirect('/manage-facilities')
    }

    return data;
}

export const getDeleteFacility = async(userId, token) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-facilities/${userId}`,{
       method: "DELETE" ,
       headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await res.json();

    console.log("data after delete",data)

    if(data.deletedCount > 0){
        revalidatePath('/manage-facilities')
        redirect('/manage-facilities')
    }
    return data;
}
