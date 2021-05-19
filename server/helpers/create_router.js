const createRouter = function(collection){

    router.get('/', (req, res)=>{
        collection.find().toArray().then(data=> res.json(data)).then(result=> res.send(result))
        
    })
   





// CREATE
router.post('/', (req, res) =>)



// DELETE

    router.delete('/:id', (req, res) =>{
        const deleteBooking = req.params.id
        collection
        .deleteOne({_id:ObjectID(deleteBooking)});
        .then((docs) => res.json.(docs))
    })
}