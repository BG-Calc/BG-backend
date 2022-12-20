

const connection = require("../connection");

const mongooseSeed = require("mongoose");
const { seedDatabase } = require("./seed");
const data = require("../dev_data/index");

const { factionData } = data;

// console.log(factionData)

connection();
const runSeed = async () => {
    try {
        console.log("seeding")
        await seedDatabase(factionData);
        mongooseSeed.connection.close();
    } catch(err) {
        console.log(err)
    }
}

runSeed()