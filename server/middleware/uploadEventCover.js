import multer from 'multer';
import {getCoverImgUploadFolder} from "../utils/helper.js";
import path from "path";


const uploadDir = getCoverImgUploadFolder("../uploads/eventCover");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueName = Date.now() + '-' + file.originalname;
        cb(null, uniqueName);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|webp/;
    const isValid = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    cb(null, isValid);
}

export const uploadEventCover = multer({storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 }});