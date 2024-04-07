import { RequestHandler } from "express";
import { validationResult } from "express-validator";

const handleInputValidationErrors: RequestHandler = (req, res, next) => {
  debugger
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export default handleInputValidationErrors;
