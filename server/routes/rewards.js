import express from "express";

import auth from "../middleware/auth.js";
import {
    addRewards,
    deleteRewards, getClaimRewards,
    getRewards,
    getSpecificBarangayRewards, rewardClaim, rewardClaimChangeStatus,
    updateRewards
} from "../controllers/rewards.js";
import {uploadRewardCover} from "../middleware/uploadRewardCover.js";
import {uploadReceipt} from "../middleware/uploadReceipt.js";


const router = express.Router();

router.get("/", auth, getRewards);
router.post("/create", auth, uploadRewardCover.single('rewardCoverImg'), addRewards);
router.patch("/update", auth, uploadRewardCover.single('rewardCoverImg'), updateRewards);

router.post("/claim", auth, uploadReceipt.single('receiptImg'), rewardClaim);
router.patch("/claim/change-status", auth, rewardClaimChangeStatus);
router.get("/all-claim-rewards", auth, getClaimRewards);

router.delete("/delete/:id", auth, deleteRewards);
router.get("/:barangayId", auth, getSpecificBarangayRewards);
export default router;