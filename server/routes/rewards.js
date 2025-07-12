import express from "express";

import auth from "../middleware/auth.js";
import {addRewards} from "../controllers/rewards.js";


const router = express.Router();

router.post("/create", auth , addRewards);


export default router;