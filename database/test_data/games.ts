const usersArr = require('./users');

const games = [
    {
        date: new Date,
        players: [
            {
                name: usersArr[1]._id,
                coinsInHand: 5,
                popularity: 9,
                stars: 3,
                territories: 5,
                resources: 4,
                bonusPoints: 0,
                totalScore: 36
            }, 
            {
                name: usersArr[0]._id,
                coinsInHand: 8,
                popularity: 13,
                stars: 3,
                territories: 7,
                resources: 10,
                bonusPoints: 3,
                totalScore: 59
            }, 
            {
                name: usersArr[2]._id,
                coinsInHand: 3,
                popularity: 4,
                stars: 6,
                territories: 2,
                resources: 10,
                bonusPoints: 2,
                totalScore: 32
            }],
        winner: usersArr[0]._id,
        score: 59
    },
    {
        date: new Date,
        players: [
            {
                name: usersArr[1]._id,
                coinsInHand: 10,
                popularity: 10,
                stars: 4,
                territories: 6,
                resources: 4,
                bonusPoints: 2,
                totalScore: 62
            }, 
            {
                name: usersArr[0]._id,
                coinsInHand: 8,
                popularity: 1,
                stars: 3,
                territories: 7,
                resources: 10,
                bonusPoints: 3,
                totalScore: 39
            }, 
            {
                name: usersArr[2]._id,
                coinsInHand: 3,
                popularity: 4,
                stars: 6,
                territories: 2,
                resources: 10,
                bonusPoints: 0,
                totalScore: 30
            }],
        winner: usersArr[1]._id,
        score: 62
    },
    {
        date: new Date,
        players: [
            {
                name: usersArr[1]._id,
                coinsInHand: 10,
                popularity: 10,
                stars: 4,
                territories: 6,
                resources: 0,
                bonusPoints: 0,
                totalScore: 54
            }, 
            {
                name: usersArr[0]._id,
                coinsInHand: 8,
                popularity: 5,
                stars: 4,
                territories: 7,
                resources: 10,
                bonusPoints: 3,
                totalScore: 42
            }, 
            {
                name: usersArr[2]._id,
                coinsInHand: 8,
                popularity: 4,
                stars: 6,
                territories: 2,
                resources: 10,
                bonusPoints: 0,
                totalScore: 35
            }],
        winner: usersArr[1]._id,
        score: 54
    }
];

module.exports = games;