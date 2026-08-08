'use server'
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

export const postBookingData = async(bookingData) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(bookingData),

    });

    const data = await res.json();
    console.log(data)
    return data;
}