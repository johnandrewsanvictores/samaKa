import express from "express";

import auth from "../middleware/auth.js";
import {uploadEventCover} from "../middleware/uploadEventCover.js";
import {addEvents, deleteEvents, getEvents, getSpecificEvents, updateEvents} from "../controllers/events.js";


const router = express.Router();

router.get("/", auth, getEvents);
router.get("/:id", auth, getSpecificEvents);
router.post("/create", auth, uploadEventCover.single('eventImg'), addEvents);
router.patch("/update", auth, uploadEventCover.single('eventImg'), updateEvents);
router.delete("/delete/:id", auth, deleteEvents);


export default router;