import React from 'react';
import { getFacilityDetails } from '@/app/lib/data';

const FacilitiesDetails = async({params}) => {
    const { detailsId } = params;
    const facilityDetails = await getFacilityDetails(detailsId);
    console.log(facilityDetails);
    return (
        <div>
            
        </div>
    );
};

export default FacilitiesDetails;