import express from "express";
import {
    createUser,
    getUser, getUserProfile,
    google_authenticate,
    google_callback,
    logout,
    signIn,
    validateUserInfo
} from "../controllers/auth.js";
import auth from "../middleware/auth.js";


const router = express.Router();

router.get("/google", google_authenticate );
router.get("/google/callback", google_callback );
router.get("/me", getUser);
router.post("/logout", logout);
router.post("/signin", signIn);
router.post("/signup", validateUserInfo, createUser);
router.get('/user/profile', auth, getUserProfile);


export default router;