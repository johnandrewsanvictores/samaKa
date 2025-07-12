import express from "express";

import auth from "../middleware/auth.js";
import {addRewards, deleteRewards, updateRewards} from "../controllers/rewards.js";
import {uploadRewardCover} from "../middleware/uploadRewardCover.js";


const router = express.Router();

router.post("/create", auth, uploadRewardCover.single('rewardCoverImg'), addRewards);
router.patch("/update", auth, uploadRewardCover.single('rewardCoverImg'), updateRewards);
router.delete("/delete/:id", auth, deleteRewards);


export default router;