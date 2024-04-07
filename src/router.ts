import express from "express";
import todosRouter from "./modules/todos/todosRouter";

const router = express.Router();

router.use("/todos", todosRouter);

export default router;
