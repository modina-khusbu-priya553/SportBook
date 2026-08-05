import React from 'react';
import { getFacilityDetails } from '@/app/lib/data';

const FacilitiesDetails = async({params}) => {
    const { detailsId } = await params;
    const facilityDetails = await getFacilityDetails(detailsId);
    console.log(detailsId);
    console.log(facilityDetails);
    return (
        <div>
            <h2>details</h2>
        </div>
    );
};

export default FacilitiesDetails;