export const getFacilitiesData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`,{
        cache: 'no-store',
    })
    const data = await res.json()
    return data
}

// 2: details api with id
export const getFacilityDetails = async (facilityId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${facilityId}`,{
        cache: 'no-store',
    })
    const data = await res.json()
    return data 
}

// bookings api with userId
export const getBookings = async (userId) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${userId}`,{
        cache: 'no-store',
    })
    const data = await res.json()
    return data 
}

// facility api only for login user
export const getMyFacilities = async (userId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-facilities/${userId}`,{
        cache: 'no-store',
    }
        
    )
    const data = await res.json()
    return data 
}