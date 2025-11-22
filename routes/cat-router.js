import express from "express";
import multer from "multer";
import { postCat, getCats, getCat } from "../controllers/cat-controller.js";
import { createThumbnail } from "../src/middlewares.js";

const router = express.Router();

// Configure multer for file uploads
const upload = multer({ dest: "uploads/" });

// GET all cats
router.get("/", getCats);

// GET specific cat by ID
router.get("/:id", getCat);

// POST new cat with file upload
// Middleware chain: upload.single('file') → createThumbnail → postCat
router.post("/", upload.single("file"), createThumbnail, postCat);

export default router;
