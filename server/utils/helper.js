import { promises as fsp } from 'fs';
import path from "path";
import fs from 'fs';
import {fileURLToPath} from "url";


export const getCoverImgUploadFolder = () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const uploadDir = path.resolve(__dirname, '../uploads/rewards');

    if(!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, {recursive: true});

    return uploadDir;
}

export const fileExists = async (directory, filename) => {
    const filePath = path.join(directory, filename);

    try {
        await fsp.access(filePath);
        return true; // File exists
    } catch {
        return false;
    }
};