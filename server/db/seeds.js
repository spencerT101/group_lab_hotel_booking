use guests;
db.dropDatabase;

db.bookings.insertMany([
    {
        name: "Gregg",
        email: "gregg76@gmail.com",
        checkInStatus: "IN"
    },
    {
        name: "Steve",
        email: "steve94@gmail.com",
        checkInStatus: "OUT"
    }
]);