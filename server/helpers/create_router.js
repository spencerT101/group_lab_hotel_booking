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

    // FIND BY ID
    router.get('/:id', (req, res) => {
        const id = req.params.id;
        collection
            .findOne({_id: ObjectID(id)})
            .then(doc => res.json(doc))
    })

    // CREATE
    router.post('/', (req, res) => {
        const newBooking = req.body;
        collection
        .insertOne(newBooking)
        .then((document) => res.json(document.ops[0]))
    })

    //Update
    router.put('/:id', (req, res)=>{
        const id = req.params.id
        const body = req.body
        
        collection
        .update({_id: ObjectID(id)},{$set: body})
        .then(result=>res.json(result)) 
    })

    // DELETE
    
        router.delete('/:id', (req, res) =>{
            const deleteBooking = req.params.id
            collection
            .deleteOne({_id:ObjectID(deleteBooking)})
            .then((docs) => res.json(docs))
        })

    
        
        
        


        
        
    
    


    
    return router;
}

module.exports = createRouter;