import express from "express";

import auth from "../middleware/auth.js";
import {addRewards} from "../controllers/rewards.js";
import {uploadRewardCover} from "../middleware/uploadRewardCover.js";


const router = express.Router();

router.post("/create", auth, uploadRewardCover.single('rewardCoverImg'), addRewards);



export default router;