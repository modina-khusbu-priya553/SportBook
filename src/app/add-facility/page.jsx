import React from 'react';
import { getPostData } from '../lib/action';
import AddFacilityCard from '@/components/cards/AddFacilityCard';

const AddFacilities = async() => {
    return (
        <div className="bg-[#F7F7F2]">
            <AddFacilityCard postFacilityAction={getPostData}></AddFacilityCard>
        </div>
    );
};

export default AddFacilities;