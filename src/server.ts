import compression from "compression";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import { protect } from "./modules/auth/auth";
import { createNewUser, signIn } from "./modules/auth/user";
import router from "./router";

const app = express();

// log HTTP requests
app.use(morgan("dev"));

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// parse json request body
app.use(express.json());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options("*", cors());

// Define your routes here
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, world!" });
});

app.use("/api/v1", protect, router);

app.post("/user", createNewUser);
app.post("/signIn", signIn);

export default app;
