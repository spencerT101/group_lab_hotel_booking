import { useState, useEffect } from 'react';
import GuestList from "../components/GuestList";
import GuestItem from "../components/GuestItem";
import AddBookingForm from "../components/AddBookingForm"
import BookingService from './BookingService'


    
const  HotelBookingContainer= function (){
    const [guest,SetGuest]= useState([])

    useEffect(() => {
        fetchBookings()
    }, [])

    const fetchBookings = () => {
        fetch('http://localhost:5000/api/bookings')
        .then(res => res.json())
        .then(bookings => SetGuest(bookings));
    }



    //const allGuest = guest.map()
const submitGuest = function (name,email,CheckIn){
    const newGuest= BookingService.addBookings(name,email,CheckIn).SetGuest([...guest,{newGuest}])
}

    return (
        <div>
        <AddBookingForm submitGuest={submitGuest}/>
        {/* <GuestList/> */}

        </div>
    )
}


export default HotelBookingContainer;