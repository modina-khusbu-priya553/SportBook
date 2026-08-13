// 1: facility data
export const getFacilitiesData = async (search = "", sport_type = "") => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/facilities?search=${search}&sport_type=${sport_type}`,
        { cache: "no-store" }
    );
    const data = await res.json();
    return data;
}

// 2: details api with id
export const getFacilityDetails = async (facilityId, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${facilityId}`,{
        cache: 'no-store',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    const data = await res.json()
    return data 
}

// bookings api with userId
export const getBookings = async (userId, token) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${userId}`,{
        cache: 'no-store',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    const data = await res.json()
    return data 
}

// facility api only for login user
export const getMyFacilities = async (userId, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-facilities/${userId}`,{
        cache: 'no-store',
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
        
    )
    const data = await res.json()
    return data 
}