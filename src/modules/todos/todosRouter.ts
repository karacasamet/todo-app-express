import { TODO_PRIORITY } from "@prisma/client";
import express from "express";
import { body } from "express-validator";
import { handleInputValidationErrors } from "../../shared/utils";
import {
  createTodo,
  deleteTodo,
  getOneTodo,
  getTodos,
  updateTodo,
} from "./todosService";

const todosRouter = express.Router();

// Add your API routes here
todosRouter.get("/", getTodos);
todosRouter.get("/:id", getOneTodo);
todosRouter.delete("/:id", deleteTodo);

todosRouter.post(
  "/",
  body("title").exists().isString(),
  body("done").isBoolean().optional(),
  body("priority").isIn(Object.values(TODO_PRIORITY)),
  handleInputValidationErrors,
  createTodo
);

todosRouter.put(
  "/:id",
  body("title").exists().isString(),
  body("done").isBoolean().optional(),
  body("priority").isIn(Object.values(TODO_PRIORITY)),
  updateTodo
);


export default todosRouter;
