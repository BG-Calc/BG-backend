import IUser, { User } from "./Models/usersModel";
import IGames, { Games } from "./Models/gamesModel";
import IFaction, { Faction } from "./Models/factionsModel";
import mongoose from "mongoose";

export const seedDatabase = async (factionData: IFaction, usersData: IUser, gamesData: IGames) => {
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

export default mongoose