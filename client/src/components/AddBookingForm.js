import React from 'react';

const AddBookingForm = function ({submitGuest}) {

    const handleSubmit = function (event){
    event.preventDefault();
        
        const name = event.target.name.value;
        const email = event.target.email.value;
        const checkIn = event.target.select.value;
        submitGuest(name,email,checkIn);

    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
        <label for="name" ></label>
            <input type="text" id="name" name="id" placeholder="Enter name"></input>
            <label for="email" > </label>
            <input type="email" id="email" name="email" placeholder="Enter email"></input>
           
           <select id="select" name="select">
               <option value = "IN">IN</option>
               <option value = "OUT">OUT</option>
           </select>
            <button type = "submit" id="submit" name="submit">Submit</button>
        </form>
      
        </div>
    )
}


export default AddBookingForm;