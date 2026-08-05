import React from 'react';
import {Badge, Button, Card} from "@heroui/react";
import Image from 'next/image';
import { MdOutlineLocationOn } from 'react-icons/md';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

const AllFacilitiesCard = ({facility}) => {
    const {name, sport_type, description, available_slots, capacity, price_per_hour, location, image} = facility;
    return (
        <Card className="rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <figure className='relative w-full aspect-square'>
                <Image
                    src={image}
                    alt={name}
                    fill
                    className='object-cover rounded-xl'
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </figure>
            <div>
                <Badge 
                    placement='badge--bottom-left' 
                    variant=".badge--soft.badge--default" size="md" 
                    className="p-2 absolute top-7 right-7">
                    {sport_type}
                </Badge>
            </div>
            
            
            <Card.Header>
                <Card.Title className='text-lg md:text-xl font-bold'>{name}</Card.Title>
                <span className="flex items-center gap-2 text-muted space-y-1">
                    <MdOutlineLocationOn />
                    {location}
                </span>
                <h2 className="text-2xl text-blue-950 font-bold">${price_per_hour.toFixed(2)}</h2>
            </Card.Header>
            <Card.Footer>
                <div className="flex items-center gap-2 md:flex-row md:justify-between">
                    <Button variant='outline' 
                        className="hover:bg-blue-950 hover:text-white text-blue-950 border-blue-950 rounded-lg">
                        <Link href={`/all-facilities/${facility._id}`}>View Details</Link>
                    </Button>
                    <Button className="rounded-lg bg-[#22C55E] hover:bg-[#16A34A] text-white">
                        <Link href="/">
                           <span className="flex items-center gap-2">
                            Book Now
                            <FiExternalLink />
                           </span>

                        </Link>
                    </Button>
                </div>
            </Card.Footer>
        </Card>
           
    );
};

export default AllFacilitiesCard;