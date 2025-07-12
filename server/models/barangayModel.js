import mongoose from 'mongoose';
import {Double, Int32, ObjectId, Timestamp} from "mongodb";

const brgySchema = new mongoose.Schema({
    municipalId: { type: ObjectId, required: true },
    barangayName: { type: String, required: true },
    generalRewards:{type: [
            {
                imgPath: { type: String, required: false, default: "" },
                title: { type: String, required: true, default: "" },
                description:  { type: String, required: false, default: "" },
                lp: { type: Int32,  required: true, default: 0 },
            }
        ], required: false, default: []},
}, { timestamps: true });

const Barangay = mongoose.model('Barangay', brgySchema);

export default Barangay;