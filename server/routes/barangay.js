import express from "express";

import auth from "../middleware/auth.js";
import {createBarangay, addRewards} from "../controllers/barangay.js";


const router = express.Router();

router.post("/create", auth , createBarangay);
router.post("/add-rewards", auth , addRewards);


export default router;