"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_validator_1 = require("express-validator");
var handleInputValidationErrors = function (req, res, next) {
    debugger;
    var errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
exports.default = handleInputValidationErrors;
//# sourceMappingURL=handleInputErrors.js.map