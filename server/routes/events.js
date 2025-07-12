import express from "express";

import auth from "../middleware/auth.js";
import {uploadEventCover} from "../middleware/uploadEventCover.js";
import {
    acceptAttendance,
    addEvents,
    deleteEvents,
    getEvents, getParticipantCount, getParticipants,
    getSpecificEvents,
    joinEvent, rejectAttendance,
    updateEvents
} from "../controllers/events.js";


const router = express.Router();

router.get("/", auth, getEvents);
router.get("/:id", auth, getSpecificEvents);
router.post("/create", auth, uploadEventCover.single('eventImg'), addEvents);
router.patch("/update", auth, uploadEventCover.single('eventImg'), updateEvents);
router.delete("/delete/:id", auth, deleteEvents);

router.post("/join", auth, joinEvent);
router.post("/accept-join", auth, acceptAttendance);
router.post("/reject-join", auth, rejectAttendance);
router.get("/join-count/:id", auth, getParticipantCount);
router.get("/participants/:eventId", auth, getParticipants);



export default router;