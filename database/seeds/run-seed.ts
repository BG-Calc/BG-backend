const connection = require("../connection");
const mongooseSeed = require("mongoose");
const { seedDatabase } = require("./seed");
const data = require("../dev_data/index");

const { factionData, usersData, gamesData } = data;

connection();
const runSeed = async () => {
    try {
        await seedDatabase(factionData, usersData, gamesData);
        mongooseSeed.connection.close();
    } catch(err) {
        console.log(err)
    }
}

runSeed()