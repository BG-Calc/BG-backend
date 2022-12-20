import { Schema, model } from 'mongoose';

interface IUser {
    _id: string,
    name: string,
    gamesPlayed: number,
    gamesWon: number,
    maxScore: number
}

const userSchema = new Schema<IUser>({
    _id : {type: String, required: true},
    name: { type: String, required: true},
    gamesPlayed: {type: Number, required: true},
    gamesWon: {type: Number, required: true},
    maxScore: {type: Number, required: true}
});

const User = model<IUser>('User', userSchema);