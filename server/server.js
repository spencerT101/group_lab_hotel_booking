const express = require("express");
const app = express();
const MongoClient= require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router.js")

app.use(express.json())
//connection established
MongoClient.connect('mongodb://localhost:27017')
.then(client => {
    const db = client.db("guests");
    const bookingcollection = db.collection("bookings");
    const bookingRouter = createRouter(bookingcollection);
    app.use('/api/bookings', bookingRouter);
})
.catch(console.error);

const cors = require('cors')
app.use(corse());

//port
app.listen(5000, function(){
    this.address().port()  
})