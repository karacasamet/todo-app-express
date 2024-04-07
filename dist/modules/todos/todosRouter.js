"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var express_1 = __importDefault(require("express"));
var express_validator_1 = require("express-validator");
var utils_1 = require("../../shared/utils");
var todosService_1 = require("./todosService");
var todosRouter = express_1.default.Router();
// Add your API routes here
todosRouter.get("/", todosService_1.getTodos);
todosRouter.get("/:id", todosService_1.getOneTodo);
todosRouter.delete("/:id", todosService_1.deleteTodo);
todosRouter.post("/", (0, express_validator_1.body)("title").exists().isString(), (0, express_validator_1.body)("done").isBoolean().optional(), (0, express_validator_1.body)("priority").isIn(Object.values(client_1.TODO_PRIORITY)), utils_1.handleInputValidationErrors, todosService_1.createTodo);
todosRouter.put("/:id", (0, express_validator_1.body)("title").exists().isString(), (0, express_validator_1.body)("done").isBoolean().optional(), (0, express_validator_1.body)("priority").isIn(Object.values(client_1.TODO_PRIORITY)), todosService_1.updateTodo);
exports.default = todosRouter;
//# sourceMappingURL=todosRouter.js.map