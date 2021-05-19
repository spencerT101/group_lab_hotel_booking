const express = require("express");
const app = express();
const MongoClient= require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router.js")

app.use(express.json())
MongoClient.connect(('mongodb://localhost:27017')
.then(client => {
    const db = client.db("guests");
    const bookingcollection = db.collection("bookings");
    const bookingRouter = createRouter(bookingcollection);
    app.use('/api/bookings', bookingRouter);


})

const cors = require('cors')
app.use(corse());



app.get('/',(req,res)=>{



})




//port
app.listen(5000, function(){
  this.address().port()  
})