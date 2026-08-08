import React from "react";
import { Button, Card, CloseButton } from "@heroui/react";
import { getBookings } from "@/app/lib/data";
import { auth } from "../lib/auth";
import { headers } from "next/headers";
import Image from "next/image";


const MyBookings = async () => {

    // user info
    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
    })
      const user = session?.user;
      const userId = user?.id
  const bookingDetails = await getBookings({userId: userId});

  const {image, bookingDate} = bookingDetails;
  console.log(bookingDetails)
  console.log(user)
  return (
    <div className="bg-[#F7F7F2]">
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
            <Card.Title className="pe-8">Become an ACME Creator!</Card.Title>
            <Card.Description>
              Lorem ipsum dolor sit amet consectetur. Sed arcu donec id aliquam
              dolor sed amet faucibus etiam.
            </Card.Description>
            <CloseButton
              aria-label="Close banner"
              className="absolute end-3 top-3"
            />
          </Card.Header>
          <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">
                Only 10 spots
              </span>
              <span className="text-xs text-muted">
                Submission ends Oct 10.
              </span>
            </div>
            <Button className="w-full sm:w-auto">Apply Now</Button>
          </Card.Footer>
        </div>
      </Card>
    </div>
  );
};

export default MyBookings;
