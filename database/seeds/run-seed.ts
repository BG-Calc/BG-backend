

const connection = require("../connection");

const mongooseSeed = require("mongoose");
const { seedDatabase } = require("./seed");
const data = require("../test_data/index");

const { factionData, usersData, gamesData } = data;

// console.log(factionData)

connection();
const runSeed = async () => {
    try {
        console.log("seeding")
        await seedDatabase(factionData, usersData, gamesData);
        mongooseSeed.connection.close();
    } catch(err) {
        console.log(err)
    }
}

runSeed()