import { User } from "./Models/usersModel";
import { Games } from "./Models/gamesModel";
import { Faction } from "./Models/factionsModel";

export const seedDatabase = async (factionData: typeof Faction) => {
    await Faction.deleteMany({});
    await Faction.insertMany(factionData);
}
