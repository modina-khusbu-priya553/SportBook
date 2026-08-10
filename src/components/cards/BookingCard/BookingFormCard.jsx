"use client";
import React, { useState } from "react";
import {
  TextField,
  Label,
  Input,
  Calendar,
  DateField,
  DatePicker,
  ListBox,
  Chip,
  Button,
  AlertDialog,
} from "@heroui/react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import { authClient } from "@/app/lib/auth-client";
import { toast } from "react-toastify";

const BookingFormCard = ({ facilityDetails, postBookingAction }) => {
  // user info
  const { data } = authClient.useSession();
  const user = data?.user;

  console.log(user);

  const {
    _id,
    name,
    available_slots,
    capacity,
    location,
    image,
    price_per_hour,
  } = facilityDetails;

  const [bookingDate, setBookingDate] = useState(null);

  const [selectedSlots, setSelectedSlots] = useState(new Set());
  const totalPrice = selectedSlots.size * price_per_hour;

  //   booking handle
  const handleBooking = async () => {
    if (selectedSlots.size === 0) {
      toast.error("Please select at least one time slot");
      return;
    }
    if (!bookingDate) {
      toast.error("Please select date");
      return;
    }
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      userEmail: user?.email,
      _id,
      totalPrice,
      price_per_hour,
      image,
      name,
      capacity,
      location,
      bookingDate: new Date(bookingDate),
      timeSlots: [...selectedSlots],
    };
   
    await postBookingAction(bookingData);
    toast.success("Booking successful!");
  };

  const handleRemoveSlot = (slot) => {
    const updated = new Set(selectedSlots);
    updated.delete(slot);
    setSelectedSlots(updated);
  };

  return (
    <div className="space-y-8 p-6 md:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white rounded-lg">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-blue-950">
          Reserve Your Time Slot
        </h2>
        <p className="text-gray-500">
          Choose a suitable date and time to secure your booking.
        </p>
      </div>

      <div>
        <form className="space-y-4">
          <TextField
            className="w-full"
            name="name"
            type="text"
            defaultValue={name}
            isReadOnly
          >
            <Label>FACILITY NAME</Label>
            <Input
              placeholder=""
              className="border data-[selected]:border-green-500 data-[selected]:bg-green-50 rounded-md px-2 py-1 cursor-pointer"
            />
          </TextField>

          <DatePicker
            onChange={setBookingDate}
            isRequired
            className="w-full"
            name="date"
          >
            <Label>BOOKING DATE</Label>
            <DateField.Group
              className="border rounded-md px-3 py-2 flex items-center justify-between
               data-[focus-within]:border-green-500 
               data-[focus-within]:ring-1 
               data-[focus-within]:ring-green-500
               transition-colors"
            >
              <DateField.Input>
                {(segment) => <DateField.Segment segment={segment} />}
              </DateField.Input>
              <DateField.Suffix>
                <DatePicker.Trigger>
                  <DatePicker.TriggerIndicator />
                </DatePicker.Trigger>
              </DateField.Suffix>
            </DateField.Group>
            <DatePicker.Popover>
              <Calendar aria-label="Event date">
                <Calendar.Header>
                  <Calendar.YearPickerTrigger>
                    <Calendar.YearPickerTriggerHeading />
                    <Calendar.YearPickerTriggerIndicator />
                  </Calendar.YearPickerTrigger>
                  <Calendar.NavButton slot="previous" />
                  <Calendar.NavButton slot="next" />
                </Calendar.Header>
                <Calendar.Grid>
                  <Calendar.GridHeader>
                    {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                  </Calendar.GridHeader>
                  <Calendar.GridBody>
                    {(date) => <Calendar.Cell date={date} />}
                  </Calendar.GridBody>
                </Calendar.Grid>
                <Calendar.YearPickerGrid>
                  <Calendar.YearPickerGridBody>
                    {({ year }) => <Calendar.YearPickerCell year={year} />}
                  </Calendar.YearPickerGridBody>
                </Calendar.YearPickerGrid>
              </Calendar>
            </DatePicker.Popover>
          </DatePicker>

          <div className="w-full">
            <Label>TIME SLOT</Label>
            <ListBox
              selectionMode="multiple"
              selectedKeys={selectedSlots}
              onSelectionChange={setSelectedSlots}
              aria-label="available_slots"
              className="border rounded-md p-2 text-sm"
            >
              {available_slots.map((slot, index) => (
                <ListBox.Item
                  key={index}
                  id={slot}
                  textValue={slot}
                  className="border-2 data-[selected]:border-[#22C55E] data-[selected]:bg-green-50 rounded-md px-2 py-1 cursor-pointer"
                >
                  {slot}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </div>
          {selectedSlots.size > 0 && (
            <div className="mt-3">
              <Label>Selected Slots</Label>
              <div className="flex flex-wrap gap-2 mt-1">
                {[...selectedSlots].map((slot) => (
                  <Chip
                    key={slot}
                    size="md"
                    variant="flat"
                    color="success"
                    onClose={() => handleRemoveSlot(slot)}
                  >
                    {slot}
                  </Chip>
                ))}
              </div>
            </div>
          )}

          <div className=" bg-green-100 p-4 rounded-lg">
            <p className="text-sm text-gray-500">
              {selectedSlots.size} slot{selectedSlots.size !== 1 ? "s" : ""} × $
              {price_per_hour}/hr
            </p>

            <span className="flex justify-between text-xl font-semibold">
              <h2>Total Price:</h2>${totalPrice}
            </span>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <Link
              href="/all-facilities"
              className="hover:bg-blue-950 hover:text-white text-blue-950 border border-blue-950 rounded-lg w-full flex items-center justify-center gap-2 py-2.5 px-4 transition-colors"
            >
              <FaArrowLeftLong />
              Back facilities
            </Link>
            <AlertDialog>
              <Button
                size="lg"
                type="button"
                className="rounded-lg bg-[#22C55E] hover:bg-[#16A34A] text-white w-full"
                variant="danger"
              >
                Confirm Booking
              </Button>
              <AlertDialog.Backdrop>
                <AlertDialog.Container>
                  <AlertDialog.Dialog className="sm:max-w-[400px]">
                    <AlertDialog.CloseTrigger />
                    <AlertDialog.Header>
                      <AlertDialog.Icon className="text-white bg-[#22C55E]" />
                      <AlertDialog.Heading>
                        Confirm Your Booking
                      </AlertDialog.Heading>
                    </AlertDialog.Header>
                    <AlertDialog.Body>
                      <p>
                        Please make sure the date and time slots are correct
                        before confirming. This action cannot be undone.
                      </p>
                    </AlertDialog.Body>
                    <AlertDialog.Footer>
                      <Button slot="close" variant="danger" type="button">
                        Cancel
                      </Button>
                      <Button
                        slot="close"
                        onClick={handleBooking}
                        type="button"
                        className="bg-[#22C55E] hover:bg-[#16A34A] text-white"
                        variant="primary"
                      >
                        Confirm Booking
                      </Button>
                    </AlertDialog.Footer>
                  </AlertDialog.Dialog>
                </AlertDialog.Container>
              </AlertDialog.Backdrop>
            </AlertDialog>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingFormCard;
