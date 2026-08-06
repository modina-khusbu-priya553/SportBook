import React from 'react';
import {Card, Input, Label, ListBox, TextField, Select, TextArea, Button, Description, AlertDialog} from "@heroui/react";
const AddFacilityCard = ({postFacilityAction}) => {
    return (
        <div>
            <div className='flex flex-col py-10 px-5 md:py-20 container mx-auto'>
                <div className='flex flex-col gap-10 px-2 py-4'>
                    <h2 className='text-2xl md:text-5xl text-center font-bold'>Add New Facility</h2>
                    <p className='md:text-lg text-gray-500 line-clamp-2'>List your sports facility and make it available <br/> for players to discover and book anytime.</p>
                </div>

                <Card>
                    <form id="add-facility-form" action={postFacilityAction}>
                         <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                            <div className='w-full space-y-8'>
                                <TextField name="name" type="text" isRequired>
                                    <Label className='text-lg text-gray-500'>Facility Name</Label>
                                    <Input placeholder="e.g. Smash Badminton Arena" />
                                </TextField>
                                <TextField name="image" isRequired>
                                    <Label className='text-lg text-gray-500'>Image URL</Label>
                                    <Input placeholder="url" />
                                </TextField>
                                <TextField name="location" type="location" isRequired>
                                    <Label className='text-lg text-gray-500'>Location</Label>
                                    <Input placeholder="e.g. Helsinki" />
                                </TextField>
                            </div>
                            <div className='w-full space-y-8'>
                                <div>
                                <Select
                                name="sport_type"
                                isRequired
                                className="w-full"
                                placeholder="Type"
                                >
                                    <Label className='text-lg text-gray-500'>Facility Type</Label>
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
                                        <ListBox.Item id="Table Tennis" textValue="Table Tennis">
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
                                <TextField name="price_per_hour" type='number' isRequired>
                                    <Label className='text-lg text-gray-500'>Price Per Hour($)</Label>
                                    <Input placeholder="e.g 20" />
                                </TextField>
                                <TextField name="capacity" type="number" isRequired>
                                    <Label className='text-lg text-gray-500'>Capacity</Label>
                                    <Input placeholder="e.g. 15" />
                                </TextField>
                            </div>
                         </div>
                        <div className='space-y-8 my-8'>
                            <TextField name="available_slots" type="" isRequired>
                                    <Label className='text-lg text-gray-500'>Available Time Slots</Label>
                                    <Input placeholder="e.g. 10:00-11:00" />
                            </TextField>

                            <TextField name="description" type='text' isRequired>
                                <Label className='text-lg text-gray-500'>Description</Label>
                                <TextArea placeholder="Describe about the facility..." />
                                <Description>Character: 0 / 200</Description>
                            </TextField>
                        </div>
                        <AlertDialog>
                            <Button size='lg' type='button' className="rounded-lg bg-[#22C55E] hover:bg-[#16A34A] text-white" variant="danger">Add Facility</Button>
                            <AlertDialog.Backdrop>
                                <AlertDialog.Container>
                                <AlertDialog.Dialog className="sm:max-w-[400px]">
                                    <AlertDialog.CloseTrigger />
                                    <AlertDialog.Header>
                                    <AlertDialog.Icon className='text-white bg-[#22C55E]' />
                                    <AlertDialog.Heading>Ready to Add a New Facility?</AlertDialog.Heading>
                                    </AlertDialog.Header>
                                    <AlertDialog.Body>
                                    <p>
                                        Enter accurate information about <strong>your sports</strong>  facility to make it available for bookings.
                                        
                                    </p>
                                    </AlertDialog.Body>
                                    <AlertDialog.Footer>
                                    <Button slot="close" variant="danger" type="button">
                                        Cancel
                                    </Button>
                                    <Button 
                                        type='submit' 
                                        className="bg-[#22C55E] hover:bg-[#16A34A] text-white" 
                                        variant="primary"
                                        form="add-facility-form">
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