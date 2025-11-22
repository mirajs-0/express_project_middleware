import express from "express";
import multer from "multer";
import { postCat, getCats, getCat } from "../controllers/cat-controller.js";

const router = express.Router();

// Configure multer for file uploads
const upload = multer({ dest: "uploads/" });

// GET all cats
router.get("/", getCats);

// GET specific cat by ID
router.get("/:id", getCat);

// POST new cat with file upload
// upload.single('file') means expect ONE file field named 'file'
router.post("/", upload.single("file"), postCat);

export default router;
