import React from 'react';
import { getMyFacilities } from '../lib/data';
import { headers } from 'next/headers';
import { auth } from '../lib/auth';
import MyFacilities from '@/components/cards/MyFacilities';

const ManageFacilities = async() => {

    // user info
      const session = await auth.api.getSession({
        headers: await headers(), // you need to pass the headers object.
      });
      const user = session?.user;
      const userId = user?.id;

    const myFacilities = await getMyFacilities(userId)
    console.log(myFacilities)

    return (
        <div className=''>
            <div className='max-w-7xl mx-auto py-10 md:py-20 px-4 flex flex-col items-center justify-center'>
                <div>
                    <h2>Manage Your Facilities</h2>
                    <p>Update your facility details or remove a listing whenever needed.</p>
                </div>
            
                <div className='grid grid-cols-1 gap-4 md:gap-6'>
                    
                        {myFacilities.map(facilities => <MyFacilities key={facilities._id} facilities={facilities}></MyFacilities>)}
                    

                </div>

            </div>
        </div>
    );
};

export default ManageFacilities;