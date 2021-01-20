use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Ragnar Lothbrook",
        email: "ragnarlovesmurder@vikings.com",
        checkin: true
    },
    {
        name: "Ivor Loftbrook",
        email: "ivortheboneless@vikings.com",
        checkin: true
    },
    {
        name: "Harold Fairhair",
        email: "kingofallnorway@aol.com",
        checking: false
    }
])