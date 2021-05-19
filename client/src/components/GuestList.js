import GuestItem from './GuestItem'

const GuestList = ({guest, handleBooking}) => {
    
    const deleteBooking = (id) => {
         handleBooking(id)
    }


    const eachBooking = guest.map((eachGuest, index) => {
        return <GuestItem eachGuest={eachGuest}   key={index} deleteBooking ={deleteBooking}/>
    });
    
    return (
        <div>
            <ul>{eachBooking}</ul>
        </div>

    )
}

export default GuestList;