"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  Input,
  Label,
  ListBox,
  TextField,
  Select,
  TextArea,
  Button,
  Description,
  AlertDialog,
  Chip,
} from "@heroui/react";
import { authClient } from "@/app/lib/auth-client";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";

const AddFacilityCard = ({ postFacilityAction }) => {

  const router = useRouter();

  const [currentSlot, setCurrentSlot] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);

  const handleAddSlot = () => {
    if (currentSlot.trim() === "") return;
    setTimeSlots([...timeSlots, currentSlot]);
    setCurrentSlot("");
  };

  const handleRemoveSlot = (indexToRemove) => {
    setTimeSlots(timeSlots.filter((_, i) => i !== indexToRemove));
  };

;

  // user info
  const { data } = authClient.useSession();
  const user = data?.user;

  const handleAddFacility = async (formData) => {
    
  // token
    const { data: tokenData} = await authClient.token()
    const result = await postFacilityAction(formData, tokenData?.token);

    if (result?.insertedId) {
      toast.success("Facility added successfully!");
      setTimeSlots([]);
      setCurrentSlot("");
      
    } else {
      toast.error("Failed to add facility.");
    }
  };

  return (
    <div>
      <div className="flex flex-col py-10 px-5 md:py-20 max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 px-2 py-4">
          <h2 className="text-xl md:text-3xl text-blue-950 font-bold">
            Add New Facility
          </h2>
          <p className=" text-gray-500 line-clamp-2">
            List your sports facility and make it available <br /> for players
            to discover and book anytime.
          </p>
        </div>

        <Card>
          <form id="add-facility-form" action={handleAddFacility}>
            {/* user info */}

            <input type="hidden" name="userId" value={user?.id || ""} />
            <input type="hidden" name="userName" value={user?.name || ""} />
            <input type="hidden" name="userEmail" value={user?.email || ""} />

            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              {/* description */}
              <div className="w-full space-y-8">
                <TextField name="name" type="text" isRequired>
                  <Label className="text-gray-500">Facility Name</Label>
                  <Input placeholder="e.g. Smash Badminton Arena" />
                </TextField>
                <TextField name="image" isRequired>
                  <Label className=" text-gray-500">Image URL</Label>
                  <Input placeholder="url" />
                </TextField>
                <TextField name="location" type="text" isRequired>
                  <Label className=" text-gray-500">Location</Label>
                  <Input placeholder="e.g. Helsinki" />
                </TextField>
              </div>

              <div className="w-full space-y-8">
                {/* select city */}
                <div>
                  <Select
                    name="sport_type"
                    isRequired
                    className="w-full"
                    placeholder="Type"
                  >
                    <Label className=" text-gray-500">Facility Type</Label>
                    <Select.Trigger className="rounded-2xl">
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="Football" textValue="Football">
                          Football
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item
                          id="Table Tennis"
                          textValue="Table Tennis"
                        >
                          Table Tennis
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Hockey" textValue="Hockey">
                          Hockey
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Volleyball" textValue="Volleyball">
                          Volleyball
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Tennis" textValue="Tennis">
                          Tennis
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Cricket" textValue="Cricket">
                          Cricket
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Basketball" textValue="Basketball">
                          Basketball
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Badminton" textValue="Badminton">
                          Badminton
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Swimming" textValue="Swimming">
                          Swimming
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </div>

                <TextField name="price_per_hour" type="number" isRequired>
                  <Label className=" text-gray-500">Price Per Hour($)</Label>
                  <Input placeholder="e.g 20" />
                </TextField>
                <TextField name="capacity" type="number" isRequired>
                  <Label className=" text-gray-500">Capacity</Label>
                  <Input placeholder="e.g. 15" />
                </TextField>
              </div>
            </div>

            <div className="space-y-8 my-8">
              {/* slots */}
              <div className="flex justify-center items-center gap-3">
                <TextField className="w-full" type="text">
                  <Label className="text-gray-500">Time Slot</Label>
                  <Input
                    placeholder="e.g. 10:00 - 11:00"
                    value={currentSlot}
                    onChange={(e) => setCurrentSlot(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddSlot();
                      }
                    }}
                  />
                </TextField>
                <Button
                  type="button"
                  className="bg-[#22C55E] hover:bg-[#16A34A] text-white"
                  onPress={handleAddSlot}
                >
                  + Add
                </Button>
              </div>

              {timeSlots.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {timeSlots.map((slot, index) => (
                    <Chip key={index} color="default" size="sm" variant="soft">
                      <Chip.Label>{slot}</Chip.Label>
                      <button
                        type="button"
                        onClick={() => handleRemoveSlot(index)}
                        className="ml-1 hover:text-red-500"
                      >
                        <IoClose size={14} />
                      </button>
                    </Chip>
                  ))}
                </div>
              )}

              {timeSlots.map((slot, index) => (
                <input
                  key={index}
                  type="hidden"
                  name="available_slots"
                  value={slot}
                />
              ))}

              {/* description */}
              <TextField name="description" type="text" isRequired>
                <Label className="text-gray-500">Description</Label>
                <TextArea placeholder="Describe about the facility..." />
                <Description>Character: maximum 200</Description>
              </TextField>
            </div>

            {/* Add with confirmation */}

            <AlertDialog>
              <Button
                size="lg"
                type="button"
                className="rounded-lg bg-[#22C55E] hover:bg-[#16A34A] text-white"
                variant="danger"
              >
                Add Facility
              </Button>
              <AlertDialog.Backdrop>
                <AlertDialog.Container>
                  <AlertDialog.Dialog className="sm:max-w-[400px]">
                    <AlertDialog.CloseTrigger />
                    <AlertDialog.Header>
                      <AlertDialog.Icon className="text-white bg-[#22C55E]" />
                      <AlertDialog.Heading>
                        Ready to Add a New Facility?
                      </AlertDialog.Heading>
                    </AlertDialog.Header>
                    <AlertDialog.Body>
                      <p>
                        Enter accurate information about{" "}
                        <strong>your sports</strong> facility to make it
                        available for bookings.
                      </p>
                    </AlertDialog.Body>
                    <AlertDialog.Footer>
                      <Button slot="close" variant="danger" type="button">
                        Cancel
                      </Button>
                      <Button
                        slot="close"
                        type="submit"
                        className="bg-[#22C55E] hover:bg-[#16A34A] text-white"
                        variant="primary"
                        form="add-facility-form"
                      >
                        Add Facility
                      </Button>
                    </AlertDialog.Footer>
                  </AlertDialog.Dialog>
                </AlertDialog.Container>
              </AlertDialog.Backdrop>
            </AlertDialog>
          </form>
        </Card>
      </div>
    </div>
    
  );
};

export default AddFacilityCard;
