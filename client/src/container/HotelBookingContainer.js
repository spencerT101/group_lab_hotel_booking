import { useState, useEffect } from 'react';
import GuestList from "../components/GuestList";
import GuestItem from "../components/GuestItem";
import AddBookingForm from "../components/AddBookingForm"
import BookingService from './BookingService'


    
const  HotelBookingContainer= function (){
    const [guest,SetGuest]= useState([])

    useEffect(() => {
        BookingService.getBookings().then(result=>SetGuest(result))
    }, [])

    // const fetchBookings = () => {
    //     fetch('http://localhost:5000/api/bookings')
    //     .then(res => res.json())
    //     .then(bookings => SetGuest(bookings));
    // }



    //const allGuest = guest.map()
const submitGuest = function (name,email,CheckIn){
   BookingService.addBookings(name,email,CheckIn)
   .then(newGuest =>SetGuest([...guest,{newGuest}]))
   
}
const deleteBooking = (id) =>{
    BookingService.deleteBooking(id)
    .then(()=> BookingService.getBookings())
    .then(result=>SetGuest(result))
}

    return (
        <div>
        <AddBookingForm submitGuest={submitGuest}/>
        <GuestList guest={guest} handleBooking={deleteBooking}/>

        </div>
    )

}

export default HotelBookingContainer;