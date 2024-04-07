"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var compression_1 = __importDefault(require("compression"));
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var auth_1 = require("./modules/auth/auth");
var user_1 = require("./modules/auth/user");
var router_1 = __importDefault(require("./router"));
var app = (0, express_1.default)();
// log HTTP requests
app.use((0, morgan_1.default)("dev"));
// parse urlencoded request body
app.use(express_1.default.urlencoded({ extended: true }));
// parse json request body
app.use(express_1.default.json());
// gzip compression
app.use((0, compression_1.default)());
// enable cors
app.use((0, cors_1.default)());
app.options("*", (0, cors_1.default)());
// Define your routes here
app.get("/", function (req, res) {
    res.status(200).json({ message: "Hello, world!" });
});
app.use("/api/v1", auth_1.protect, router_1.default);
app.post("/user", user_1.createNewUser);
app.post("/signIn", user_1.signIn);
exports.default = app;
//# sourceMappingURL=server.js.map