import React from "react";
import { Button, Card } from "@heroui/react";
import Image from "next/image";

const BookingCard = ({ bookings }) => {
  const {
    image,
    name,
    totalPrice,
    price_per_hour,
    capacity,
    bookingDate,
    timeSlots,
    status,
    location,
  } = bookings;
  return (
    <Card className="items-stretch md:flex-row max-w-7xl mx-auto">
      <div>
        <Image
          src={image}
          alt="djn"
          width={400}
          height={400}
          className="object-cover rounded-xl w-full h-64 "
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pe-8">{name}</Card.Title>
          <Card.Description>
            Lorem ipsum dolor sit amet consectetur. Sed arcu donec id aliquam
            dolor sed amet faucibus etiam.
          </Card.Description>
          
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">
              Only 10 spots
            </span>
            <span className="text-xs text-muted">Submission ends Oct 10.</span>
          </div>
          <Button className="w-full sm:w-auto">Apply Now</Button>
        </Card.Footer>
      </div>
    </Card>
  );
};

export default BookingCard;
