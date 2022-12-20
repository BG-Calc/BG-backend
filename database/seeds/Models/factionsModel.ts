import { Schema, model } from "mongoose";

interface IFactions {
    name: string
}

const factionSchema = new Schema<IFactions>({
    name: {type: String, required: true}
})

export const Faction = model<IFactions>("Faction", factionSchema);