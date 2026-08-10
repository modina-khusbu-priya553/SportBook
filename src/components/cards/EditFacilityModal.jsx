import React from 'react';
import { Button, FieldError, Input, Label, Modal, Surface, TextField, Select, ListBox, TextArea } from "@heroui/react";
import { FaPen } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const EditFacilityModal = ({facilities}) => {
    const {
    image,
    name,
    location,
    sport_type,
    price_per_hour,
    capacity,
    description,
  } = facilities;
    return (
        <div>
            <Modal>
        <Button variant="outline" className='flex items-center gap-1'><FaPen />Edit</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading>Update Sport Facility</Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted">
                  Make changes to the  details below
                </p>
              </Modal.Header>
              <Modal.Body className="p-2">
                <Surface variant="default">
                  <form  className="p-2 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/*  */}
                      <div className="md:col-span-2">
                        <TextField name="destinationName" isRequired >
                          <Label></Label>
                          <Input
                            placeholder="Enter Location"
                            className="rounded-2xl"
                          />
                          <FieldError />
                        </TextField>
                      </div>

                      {/* */}
                      <TextField name="country" isRequired >
                        <Label></Label>
                        <Input
                          placeholder=""
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>

                      {/*  */}
                      <div>
                        <Select
                          name="category"
                          isRequired
                          className="w-full"
                          placeholder="Select Sport Type"
                          
                        >
                          <Label></Label>
                          <Select.Trigger className="rounded-2xl">
                            <Select.Value />
                            <Select.Indicator />
                          </Select.Trigger>
                          <Select.Popover>
                            <ListBox>
                              <ListBox.Item id="Beach" textValue="">
                                
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="Mountain" textValue="">
                                
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="City" textValue="">
                               
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item
                                id="Adventure"
                                textValue="Adventure"
                              >
                                
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="Cultural" textValue="">
                                
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="Luxury" textValue="">
                                
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>
                      </div>

                      {/* Price */}
                      <TextField name="price" type="number" isRequired >
                        <Label>Price </Label>
                        <Input
                          type="number"
                          placeholder="Price"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>

                      {/* Duration */}
                      <TextField name="duration" isRequired defaultValue={capacity}>
                        <Label>Capacity</Label>
                        <Input
                          placeholder="Capacity"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>

                      {/* Departure Date */}
                      <div className="md:col-span-2">
                        <TextField name="departureDate" type="date" isRequired >
                          <Label>Departure Date</Label>
                          <Input type="date" className="rounded-2xl" />
                          <FieldError />
                        </TextField>
                      </div>

                      {/* Image URL - Removed preview */}
                      <div className="md:col-span-2">
                        <TextField name="imageUrl" isRequired defaultValue={image}>
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
                        <TextField name="description" isRequired >
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
                        <Button slot="close" variant="outline" className="text-red-500 rounded-md"><MdDeleteOutline />
                        Cancel
                        </Button>
                        <Button type="submit" slot="close" className="rounded-md">Save Changes</Button>
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