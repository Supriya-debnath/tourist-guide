import React from 'react';
import { useForm } from 'react-hook-form';
import './Booking.css';

const BookingForm = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="confirm-form w-75  mx-auto py-3">
            <h2 className="text-center">Confirm Booking</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="">
                {
                    
                     <input
                    {...register("userName")}
                    type='text'
                    readOnly
                    // defaultValue={user?.displayName}
                />
                }
                <input {...register("email")}
                type='text' 
                readOnly
                // defaultValue={user?.email} 
                />
                
                {/* <input {...register("name")}
                type='text' 
                readOnly
                defaultValue={booking?.name} 
                /> */}

                <input
                    {...register("address")}
                    placeholder="Enter your address"
                   
                />
                <input
                    type="text"
                    {...register("phoneNumber")}
                    placeholder="Enter your number"
                   
                />
                <input type="submit" className="confirmbutton" />
            </form>
        </div>
    );
};

export default BookingForm;