import express from "express";

import auth from "../middleware/auth.js";
import {createBarangay, getBarangays, getSpecificBarangay} from "../controllers/barangay.js";


const router = express.Router();

router.post("/create", auth , createBarangay);
router.get("/", auth, getBarangays);
router.get("/:id", auth, getSpecificBarangay);

export default router;