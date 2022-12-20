import { Schema, model } from 'mongoose';
import { IUser } from './usersModel'

interface IGames {
    date: Date,
    players: IUser["name"][],
    winner: string,
    score: number
}

const gameSchema = new Schema<IGames>({
    date: {type: Date, required: true},
    players: [{type: String, ref: 'User', required: true}],
    winner: {type: String, required: true},
    score: {type: Number, required: true}
})

export const Games = model<IGames>('Games', gameSchema);