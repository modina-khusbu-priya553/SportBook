import React from 'react';
import { getFacilityDetails } from '@/app/lib/data';
import { Card, Button, Chip } from "@heroui/react";
import { Heart, MapPin, Users, Clock } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';
import { FaArrowLeftLong } from 'react-icons/fa6';

const FacilitiesDetails = async ({ params }) => {
    const { detailsId } = await params;
    const facilityDetails = await getFacilityDetails(detailsId);
    const {
        _id,
        name,
        sport_type,
        description,
        available_slots,
        capacity,
        price_per_hour,
        location,
        image,
    } = facilityDetails;

    return (
        <div className="bg-[#F7F7F2]">
            <div className="container mx-auto py-20 px-10 md:px-20">
                <Card className="w-full flex flex-col justify-between md:flex-row overflow-hidden shadow-sm">
                    {/* Left: Image */}
                    <div className="relative w-full md:w-1/3 h-[220px] md:h-auto flex-shrink-0">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    
                    {/* Right: Details */}
                    <Card className='w-full space-y-3'>
                        <div className="flex justify-between items-start gap-2">
                            <div className='space-y-3'>
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                                    {name}
                                </h2>
                                <Chip size="lg" variant="flat" color="primary" className="mt-1 md:text-lg">
                                    {sport_type}
                                </Chip>
                            </div>

                            {/* Price */}
                            <div className="text-right">
                                <p className="text-xl md:text-4xl font-bold text-gray-800">
                                    ${price_per_hour} <span className="text-sm md:text-lg font-normal">/hr</span>
                                </p>
                            </div>
                        </div>

                        <p className="md:text-lg text-gray-500 line-clamp-2">
                            {description}
                        </p>

                        <div className="flex flex-col gap-3">
                                <span className="flex items-center gap-1 text-lg text-gray-600 font-medium">
                                    <Clock size={20} /> Available Slots
                                </span>
                                <div className="flex md:flex-row flex-col gap-2">
                                    {available_slots.map((slot, index) => (
                                        <Chip key={index} size="md" variant="flat" color="success">
                                            {slot}
                                        </Chip>
                                    ))}
                                </div>
                        </div>
                        {/* Specs row */}
                        <div className="flex flex-wrap gap-4 text-gray-600">
                            
                            <span className="flex items-center gap-1">
                                <Users size={20} /> Capacity: {capacity}
                            </span>
                            
                            <span className="flex items-center gap-1">
                                <MapPin size={20} /> {location}
                            </span>
                        </div>

                        {/* Footer: wishlist + CTA */}
                        <div className="flex items-center justify-end gap-3 mt-2">
                            <Button variant='outline' 
                            className="hover:bg-blue-950 hover:text-white text-blue-950 border-blue-950 rounded-lg">
                                <Link href='/all-facilities'><span className="flex items-center justify-center gap-2"><FaArrowLeftLong />Back facilities</span></Link></Button>
                            <Button className="rounded-lg bg-[#22C55E] hover:bg-[#16A34A] text-white">
                                <Link href="/">
                                <span className="flex items-center gap-2">
                                    Book Now
                                    <FiExternalLink />
                                </span>

                                </Link>
                            </Button>
                        </div>
                    </Card>
                </Card>
            </div>
        </div>
    );
};

export default FacilitiesDetails;