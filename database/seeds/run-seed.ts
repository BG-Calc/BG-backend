

const connection = require("../connection");

const mongooseSeed = require("mongoose");
const { seedDatabase } = require("./seed");
const data = require("../test_data/index");

const { factionData, usersData } = data;

// console.log(factionData)

connection();
const runSeed = async () => {
    try {
        console.log("seeding")
        await seedDatabase(factionData, usersData);
        mongooseSeed.connection.close();
    } catch(err) {
        console.log(err)
    }
}

runSeed()