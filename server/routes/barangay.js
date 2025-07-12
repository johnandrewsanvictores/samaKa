import express from "express";

import auth from "../middleware/auth.js";
import {createBarangay} from "../controllers/barangay.js";


const router = express.Router();

router.post("/create", auth , createBarangay);

export default router;