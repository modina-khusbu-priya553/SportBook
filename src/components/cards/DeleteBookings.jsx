'use client'
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';

const DeleteBookings = ({bookings, deleteBookingsAction}) => {
    const id = bookings._id
    
    
    const handleDelete = async(bookingId) =>{
        return deleteBookingsAction(bookingId);

    }
    return (
        <div>
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
                    <Button onClick= {() => {handleDelete(id)}} slot="close" variant="danger">
                      Cancel Booking
                    </Button>
                  </AlertDialog.Footer>
                </AlertDialog.Dialog>
              </AlertDialog.Container>
            </AlertDialog.Backdrop>
          </AlertDialog>
        </div>
    );
};

export default DeleteBookings;