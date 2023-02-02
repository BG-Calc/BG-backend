import mongoose from '../seeds/seed'
const ObjectId = mongoose.Types.ObjectId;

const users = [
    {
        _id: new ObjectId(),
        name: "bilbo",
        gamesPlayed: 3,
        gamesWon: 1,
        maxScore: 59
    },
    {
        _id: new ObjectId(),
        name: "frodo",
        gamesPlayed: 3,
        gamesWon: 2,
        maxScore: 62
    },
    {
        _id: new ObjectId(),
        name: "pippin",
        gamesPlayed: 3,
        gamesWon: 0,
        maxScore: 45
    }
];

module.exports = users;