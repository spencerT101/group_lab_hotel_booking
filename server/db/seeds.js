use guests;
db.dropDatabase;

db.bookings.insertMany([
    {
        name: "Gregg",
        email: "gregg76@gmail.com",
        CheckIn: "IN"
    },
    {
        name: "Steve",
        email: "steve94@gmail.com",
        CheckIn: "OUT"
    }
]);