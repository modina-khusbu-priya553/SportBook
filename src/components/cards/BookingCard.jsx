import React from "react";
import { AlertDialog, Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { FaRegClock, FaRegHeart, FaRegUser } from "react-icons/fa6";

const BookingCard = ({ bookings }) => {
  console.log(bookings);
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
    <Card className="flex flex-col md:flex-row gap-6 md:justify-between p-4 [&_svg]:text-[#22C55E]">
      {/* Mobile: image + badge*/}
      <div className="relative">
        <Image
                      src={image}
                      alt={name}
                      width={400}
                      height={400}
                      className="object-cover rounded-xl w-full h-64 "
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

        {/* Chip overlays top-right of image, mobile only */}
        <div className="absolute top-3 right-3 md:hidden">
          <Chip color="default" size="lg">
            <Chip.Label>{status}</Chip.Label>
          </Chip>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col gap-3">
        <h2 className="md:text-lg  text-blue-950 font-semibold">{name}</h2>

        <span className="flex items-center gap-2 text-sm md:text-md text-gray-600">
            <FaRegClock /> Booking time:
          {timeSlots.map((slot, index) => (
            <span key={index} className="flex items-center gap-1">
               {slot}
            </span>
          ))}
        </span>

        <span className="flex items-center gap-2 text-sm md:text-md text-gray-600">
          <MdDateRange />
          Booking date:{" "}
          {new Date(bookingDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>

        <span className="flex items-center gap-2 text-sm md:text-md text-gray-600">
          <FaRegUser />
          Capacity: {capacity}
        </span>

        <span className="flex items-center gap-2 text-sm md:text-md text-gray-600">
          <IoLocationOutline />
          {location}
        </span>

        {/* Mobile: price shown here, before cancel button */}
        <div className="md:hidden space-y-2">
          <p className="text-sm md:text-md text-gray-500">Total price:</p>
          <p className="text-2xl font-semibold text-[#22C55E]">${totalPrice}</p>
        </div>

        <Card.Footer className="mt-auto flex items-center gap-3 pt-2">
          <span className="bg-gray-100 hover:bg-gray-200 transition-colors w-fit p-2.5 rounded-full cursor-pointer">
            <FaRegHeart className="text-lg" />
          </span>

          <AlertDialog>
            <Button variant="danger" size="sm">
              Cancel Booking
            </Button>
            <AlertDialog.Backdrop>
              <AlertDialog.Container>
                <AlertDialog.Dialog className="sm:max-w-[400px]">
                  <AlertDialog.CloseTrigger />
                  <AlertDialog.Header>
                    <AlertDialog.Icon status="danger" />
                    <AlertDialog.Heading>
                      Cancel This Booking?
                    </AlertDialog.Heading>
                  </AlertDialog.Header>
                  <AlertDialog.Body>
                    <p>
                      Are you sure you want to cancel this booking? This action
                      will remove your reservation and you may not be able to
                      restore it.
                    </p>
                  </AlertDialog.Body>
                  <AlertDialog.Footer>
                    <Button slot="close" variant="tertiary">
                      Keep Booking
                    </Button>
                    <Button slot="close" variant="danger">
                      Cancel Booking
                    </Button>
                  </AlertDialog.Footer>
                </AlertDialog.Dialog>
              </AlertDialog.Container>
            </AlertDialog.Backdrop>
          </AlertDialog>
        </Card.Footer>
      </div>

      {/* Desktop: chip + price column */}
      <div className="hidden md:flex flex-col justify-between items-end">
        <Chip color="success" variant="soft" size="lg">
          <Chip.Label>{status}</Chip.Label>
        </Chip>

        <div className="text-right">
          <p className=" text-gray-500">Total price</p>
          <p className="text-2xl font-semibold text-[#22C55E]">${totalPrice}</p>
        </div>
      </div>
    </Card>
  );
};

export default BookingCard;
