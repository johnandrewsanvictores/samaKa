import Barangay from "../models/barangayModel.js";
import Events from "../models/eventModel.js";
import User from "../models/userModel.js";
import { hashPassword } from "../utils/hash.js";

export const createBarangay = async (req, res) => {
    try {
        const {barangayName} = req.body;
        console.log(req.user);
        const municipalId = req.user._id;

        const barangays = await Barangay.findOne({
            $or: [
                {barangayName}
            ]
        })

        if (barangays) {
            if (barangays.barangayName === barangayName) {
                return res.status(409).json({ error: "Barangay name already exists" });
            }
        }

        const barangay = await Barangay.create({barangayName, municipalId});

        res.status(201).json({
            barangay: {
                barangayName: barangayName,
                municipalId: municipalId,
            },
            success: "true",
            message: "Barangay created successfully"
        });
    } catch(error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

export const getBarangays = async (req, res) => {
    const filters = req.query;
    try {
        const barangays = await Barangay.find(filters); 

        res.json({barangays});
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export const getSpecificBarangay = async (req, res) => {
    try {
        const { id } = req.params;
        const barangay = await Barangay.find({_id: id}); 
        res.json(barangay[0]);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export const createBarangayAccount = async (req, res) => {

    try {
        const currentUser = req.user;
        if (!currentUser || currentUser.role !== "municipality") {
            return res.status(401).json({ error: "Unauthorized" });
        }

        const { barangayName, firstName, lastName, username, email, password } = req.body;
        if (!barangayName || !firstName || !lastName || !username || !email || !password) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        
        const existingBrgy = await Barangay.findOne({ barangayName });
        if (existingBrgy) {
            return res.status(409).json({ error: "Barangay name already exists" });
        }

        
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(409).json({ error: "Email or Username already exists" });
        }

        
        const barangay = await Barangay.create({ barangayName, municipalId: currentUser._id });

        
        const hashedPassword = await hashPassword(password);
        const user = await User.create({
            firstName,
            lastName,
            email,
            username,
            password: hashedPassword,
            role: "barangay",
            barangayId: barangay._id,
        });

        res.status(201).json({
            barangay,
            user: {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                username: user.username,
                role: user.role,
                barangayId: user.barangayId,
            },
            success: true,
            message: "Barangay account created successfully",
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}