'use client'
import React from 'react';
import {AlertDialog, Button} from "@heroui/react";
import { toast } from 'react-toastify';

const DeleteFacilityCard = ({facilities, deleteFacilityAction}) => {

    const handleDelete = async(userId) =>{
        const deleteFacility = await deleteFacilityAction(userId)
        toast.success('Delete successfully!');
        return deleteFacility;
    }
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
                        
                        <AlertDialog.Heading> Delete This Facility?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                        <p>
                            Are you sure you want to delete this facility?
                        </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                        <Button slot="close" variant="tertiary">
                            Cancel
                        </Button>
                        <Button onClick={() =>{handleDelete(facilities.userId)}} slot="close" variant="danger">
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