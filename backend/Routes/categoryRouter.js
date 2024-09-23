import express from "express";
import ensureAuthenticated from "../Middlewares/Auth";
import { categoryController } from "../Controllers/categoryController";

const router = express.Router();

//routes
router.post("create-category", ensureAuthenticated, categoryController);

export default router;
