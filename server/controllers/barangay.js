import Barangay from "../models/barangayModel.js";

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

export const addRewards = async (req, res) => {
    try {
        const currentUser = req.user;
        console.log(currentUser)
        const {imgPath, title, description, lp} = req.body;
        if(currentUser.role !== "barangay") return res.status(401).json({ error: 'Unauthorized' });

        const reward = await Barangay.findOneAndUpdate({_id: req.user.barangayId}, {$push: {generalRewards: {
            imgPath, title, description, lp
                }}});

        res.status(201).json({
            reward,
            success: "true",
            message: "Reward created successfully"
        });

    }catch(error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}