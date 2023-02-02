import mongoose from './seed';
const connection = require("../connection");
const { seedDatabase } = require("./seed");
const data = require("../dev_data/index");

const { factionData, usersData, gamesData } = data;

connection();
const runSeed = async () => {
    try {
        await seedDatabase(factionData, usersData, gamesData);
        mongoose.connection.close();
    } catch(err) {
        console.log(err)
    }
}

runSeed()