const express = require("express");
const ObjectID = require("mongodb").ObjectID;

const createRouter = function(collection){

    const router = express.Router();


    // SHOW ALL BOOKINGS
    router.get('/', (req, res)=>{
        collection.find().toArray()
        .then(data=> res.json(data))
        .then(result=> res.send(result))
        
    })


    
      // SHOW
//   router.get('/:id', (req, res) => {
//     const id = req.params.id;
//     collection
//       .findOne({_id: ObjectID(id)})
//       .then(doc => res.json(doc))
//   })
   





// CREATE
router.post('/', (req, res) => {})



// DELETE

    // router.delete('/:id', (req, res) =>{
    //     const deleteBooking = req.params.id
    //     collection
    //     .deleteOne({_id:ObjectID(deleteBooking)});
    //     // .then((docs) => res.json.(docs))
    // })

    //Update

    
    return router;
}

module.exports = createRouter;