"use client";
import React, { useState } from "react";
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  Select,
  ListBox,
  TextArea,
  Chip,
} from "@heroui/react";
import { FaPen } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const EditFacilityModal = ({ facilities, updatedFacilityAction }) => {
  const {
    userId,
    image,
    name,
    location,
    sport_type,
    price_per_hour,
    capacity,
    description,
    available_slots,
  } = facilities;
  

  const [slots, setSlots] = useState(available_slots || []);
  const [newSlot, setNewSlot] = useState("");

  const handleAddSlot = () => {
    const trimmed = newSlot.trim();
    if (!trimmed) return;
    if (slots.includes(trimmed)) {
      setNewSlot("");
      return;
    }
    setSlots((prev) => [...prev, trimmed]);
    setNewSlot("");
  };

  const handleRemoveSlot = (slotToRemove) => {
    setSlots((prev) => prev.filter((s) => s !== slotToRemove));
  };

  const handleUpdateForm = async (formData) => {
    const updated = await updatedFacilityAction(userId, formData);
    console.log(updated);
  };
  return (
    <div>
      <Modal>
        <Button variant="outline" className="flex items-center gap-1">
          <FaPen />
          Edit
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading>Update Sport Facility</Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted">
                  Make changes to the details below
                </p>
              </Modal.Header>
              <Modal.Body className="p-2">
                <Surface variant="default">
                  <form action={handleUpdateForm} className="p-2 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* name */}
                      <div className="md:col-span-2">
                        <TextField name="name" isRequired defaultValue={name}>
                          <Label>Facility Name</Label>
                          <Input
                            placeholder="Enter Facility name"
                            className="rounded-2xl"
                          />
                          <FieldError />
                        </TextField>
                      </div>

                      {/* location*/}
                      <TextField
                        name="location"
                        isRequired
                        defaultValue={location}
                      >
                        <Label>Location</Label>
                        <Input
                          placeholder="Facility Location"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>

                      {/* spot type */}
                      <div>
                        <Select
                          defaultValue={sport_type}
                          name="sport_type"
                          isRequired
                          className="w-full"
                          placeholder="Select Sport Type"
                        >
                          <Label>Sport</Label>
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
                              <ListBox.Item
                                id="Volleyball"
                                textValue="Volleyball"
                              >
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
                              <ListBox.Item
                                id="Basketball"
                                textValue="Basketball"
                              >
                                Basketball
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item
                                id="Badminton"
                                textValue="Badminton"
                              >
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

                      {/* Price */}
                      <TextField
                        name="price"
                        type="number"
                        isRequired
                        defaultValue={price_per_hour}
                      >
                        <Label>Price per hour</Label>
                        <Input
                          type="number"
                          placeholder="Price"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>

                      {/* Duration */}
                      <TextField
                        name="duration"
                        isRequired
                        defaultValue={capacity}
                      >
                        <Label>Capacity</Label>
                        <Input placeholder="Capacity" className="rounded-2xl" />
                        <FieldError />
                      </TextField>

                    {/* slots */}
                      <div className="md:col-span-2">
                        <Label>Available Slots</Label>

                        {slots.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-1 mb-2">
                            {slots.map((slot, index) => (
                              <Chip
                                key={index}
                                color="default"
                                size="sm"
                                variant="soft"
                              >
                                <Chip.Label>{slot}</Chip.Label>
                                <button
                                  type="button"
                                  onClick={() => handleRemoveSlot(slot)}
                                  className="ml-1 hover:text-red-500"
                                >
                                  <IoClose size={14} />
                                </button>
                              </Chip>
                            ))}
                          </div>
                        )}

                        <div className="flex gap-2">
                          <Input
                            placeholder="e.g. 10:00 AM - 11:00 AM"
                            className="rounded-2xl w-full"
                            value={newSlot}
                            onChange={(e) => setNewSlot(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                handleAddSlot();
                              }
                            }}
                          />
                          <Button
                            type="button"
                            onClick={handleAddSlot}
                            className="rounded-2xl"
                          >
                            Add
                          </Button>
                        </div>
                        {slots.map((slot, index) => (
                          <input
                            key={index}
                            type="hidden"
                            name="available_slots"
                            value={slot}
                          />
                        ))}
                      </div>

                      {/* Image URL - Removed preview */}
                      <div className="md:col-span-2">
                        <TextField
                          name="imageUrl"
                          isRequired
                          defaultValue={image}
                        >
                          <Label>Image URL</Label>
                          <Input
                            type="url"
                            placeholder="img url"
                            className="rounded-2xl"
                          />
                          <FieldError />
                        </TextField>
                      </div>

                      {/* Description */}
                      <div className="md:col-span-2">
                        <TextField
                          name="description"
                          isRequired
                          defaultValue={description}
                        >
                          <Label>Description</Label>
                          <TextArea
                            placeholder="Describe the travel experience..."
                            className="rounded-3xl"
                          />
                          <FieldError />
                        </TextField>
                      </div>
                    </div>

                    <Modal.Footer>
                      <Button
                        slot="close"
                        variant="outline"
                        className="text-red-500 rounded-md"
                      >
                        <MdDeleteOutline />
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        slot="close"
                        className="rounded-md bg-blue-950"
                      >
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default EditFacilityModal;
