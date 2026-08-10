'use client'
import React from 'react';
import {AlertDialog, Button} from "@heroui/react";

const DeleteFacilityCard = () => {
    return (
        <div>
            <div>
            <AlertDialog>
                <Button variant="danger">Delete</Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                        <AlertDialog.Icon status="danger" />
                        <AlertDialog.Heading>Confirm Delete Booking</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                        <p>
                            
                        </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                        <Button slot="close" variant="tertiary">
                            Cancel
                        </Button>
                        <Button  slot="close" variant="danger">
                            Delete
                        </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
        </div>
    );
};

export default DeleteFacilityCard;