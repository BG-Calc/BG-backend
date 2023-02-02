import { Schema, model } from 'mongoose';
import IUser from './usersModel'

interface IPlayer {
    name: IUser,
    coinsInHand: number,
    popularity: number,
    stars: number,
    territories: number,
    resources: number,
    bonusPoints: number,
    totalScore: number
}

 export default interface IGames {
    date: Date,
    winner: string,
    score: number,
    players: IPlayer[]
    // IUser["name"][]
}

const gameSchema = new Schema<IGames>({
    date: {type: Date, required: true},
    players: [{
        name: { type: Schema.Types.ObjectId, ref: 'User' },
        coinsInHand: { type: Number, required: true },
        popularity: { type: Number, required: true },
        stars: { type: Number, required: true },
        territories: { type: Number, required: true },
        resources: { type: Number, required: true },
        bonusPoints: {type:Number, required: true},
        totalScore: { type: Number, required: true }
    }],
    winner: {type: String, required: true},
    score: {type: Number, required: true}
})

export const Games = model<IGames>('Games', gameSchema);