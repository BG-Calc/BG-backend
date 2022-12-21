import { User } from "./Models/usersModel";
import { Games } from "./Models/gamesModel";
import { Faction } from "./Models/factionsModel";
import mongoose from "mongoose";

export const seedDatabase = async (factionData: typeof Faction, usersData: typeof User, gamesData: typeof Games) => {
    await Faction.deleteMany({});
    await Faction.insertMany(factionData);
    await User.deleteMany({});
    await User.insertMany(usersData);
    await Games.deleteMany({});
    await Games.insertMany(gamesData)
}

export const closeDB = async () => {
    await mongoose.connection.close()
}