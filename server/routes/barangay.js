import express from "express";

import auth from "../middleware/auth.js";
import {createBarangay, getBarangays, getSpecificBarangay, createBarangayAccount} from "../controllers/barangay.js";


const router = express.Router();

router.post("/create", auth , createBarangay);
router.post("/create-account", auth, createBarangayAccount);
router.get("/", auth, getBarangays);
router.get("/:id", auth, getSpecificBarangay);

export default router;