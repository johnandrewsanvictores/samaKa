import mongoose from 'mongoose';
import {Double, Int32, ObjectId, Timestamp} from "mongodb";

const brgySchema = new mongoose.Schema({
    municipalId: { type: ObjectId, required: true },
    barangayName: { type: String, required: true },
}, { timestamps: true });

const Barangay = mongoose.model('Barangay', brgySchema);

export default Barangay;