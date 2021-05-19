const GuestItem =({eachGuest, deleteBooking}) => {



return(
    <div>
        <li>{eachGuest.name}, {eachGuest.email}, {eachGuest.checkInStatus} {eachGuest.CheckIn}
        <button onClick={()=>deleteBooking(eachGuest._id)}> 🗑 </button>
    </li>
    </div>

)

}

export default GuestItem;