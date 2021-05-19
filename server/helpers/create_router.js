const createRouter = function(collection){

    router.get('/', (req, res)=>{
        collection.find().toArray()
        
    })
   











    router.delete('/:id', (req, res))
}