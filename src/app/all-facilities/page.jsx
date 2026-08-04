import React from 'react';
import { getFacilitiesData } from '@/app/lib/data';
import AllFacilitiesCard from '@/components/cards/AllFacilitiesCard';

const AllFacilitiesPage = async() => {
    const allFacilitiesData = await getFacilitiesData();
    
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20">
                {allFacilitiesData.map(facility => <AllFacilitiesCard key={facility._id} facility={facility} />)}
            </div>
        </div>
    );
};

export default AllFacilitiesPage;