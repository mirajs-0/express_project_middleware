import express from "express";
import catRouter from "../routes/cat-router.js";

const app = express();

// Built-in middleware for parsing JSON
app.use(express.json());

// Routes
app.use("/api/cat", catRouter);

export default app;
