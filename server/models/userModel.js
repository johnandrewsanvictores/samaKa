import mongoose from 'mongoose';
import {ObjectId, Timestamp} from "mongodb";

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: false },
    googleId: { type: String, required: false },
    rememberToken: { type: String, required: false },
    role:  {type: String, default: "public_user"},
    barangayId: {type: ObjectId, required: false},
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;