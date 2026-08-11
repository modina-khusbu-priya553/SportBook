import React from "react";
import {
  ArrowsRotateLeft,
  Box,
  ChevronDown,
  CreditCard,
  MapPin,
  PlanetEarth,
  Receipt,
  ShieldCheck,
  ShoppingBag,
} from "@gravity-ui/icons";
import { Accordion } from "@heroui/react";
import { CalendarClock } from "lucide-react";

const items = [
  {
    icon: <CalendarClock />,
    title: "How do I book a sports facility?",
    content:
      "Browse facilities on the All Facilities page, choose your preferred sport and location, select an available time slot and date, then confirm your booking. You'll need to be logged in to complete the reservation.",
  },
  {
    icon: <ArrowsRotateLeft />,
    title: "Can I cancel or change my booking?",
    content:
      "Yes, you can cancel a booking from your My Bookings page before the scheduled time. Once the slot has started, cancellation is no longer available.",
  },
  {
    icon: <CreditCard />,
    title: "What are the facility prices?",
    content:
      "Each facility sets its own hourly rate, shown on its details page. Pricing depends on the sport, location, and capacity of the venue you choose.",
  },
  {
    icon: <MapPin />,
    title: "Can I list my own facility on SportNest?",
    content:
      "Absolutely. Create an account, go to Add Facility, and fill in your venue's details — name, location, sport type, pricing, and available time slots. Your listing will appear for other users to book.",
  },
  {
    icon: <ShieldCheck />,
    title: "Are the facilities verified?",
    content:
      "We review facility listings to make sure the information provided is accurate, so you can book with confidence.",
  },
  {
    icon: <CalendarClock />,
    title: "What if my preferred time slot is unavailable?",
    content:
      "Available slots are set by each facility owner and update in real time. If your desired slot is taken, try another time on the same day or check nearby facilities offering the same sport.",
  },
];

const FaqSection = () => {
  return (
    <div className="bg-[#F7F7F2]">
      <div className="max-w-7xl mx-auto py-10 md:py-20 px-5 space-y-4">
        <h2 className="md:text-2xl text-lg font-bold text-blue-950 px-5">
          Frequently Ask Questions
        </h2>
        <Accordion className="w-full" variant="surface">
          {items.map((item, index) => (
            <Accordion.Item key={index}>
              <Accordion.Heading>
                <Accordion.Trigger>
                  {item.icon ? (
                    <span className="me-3 size-4 shrink-0 text-[#22C55E]">
                      {item.icon}
                    </span>
                  ) : null}
                  {item.title}
                  <Accordion.Indicator>
                    <ChevronDown />
                  </Accordion.Indicator>
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body>{item.content}</Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FaqSection;
