import React from 'react';
import { getFacilitiesData } from '@/app/lib/data';

const AllFacilitiesPage = async() => {
    const allFacilitiesData = await getFacilitiesData();
    console.log(allFacilitiesData);
    return (
        <div>
            <h1>All Facilities</h1>
        </div>
    );
};

export default AllFacilitiesPage;