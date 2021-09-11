"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("config"));
function default_1(req, res, next) {
    if (req.method === 'OPTIONS') {
        return next();
    }
    try {
        var token = req.headers.authorization.split(' ')[1];
        if (!token) {
            res.status(401).json({ message: 'Нет авторизации' });
            return;
        }
        var decoded = jsonwebtoken_1["default"].verify(token, config_1["default"].get('jwtSecret'));
        req.user = decoded;
        next();
    }
    catch (e) {
        res.status(401).json({ message: 'Нет авторизации' });
    }
}
exports["default"] = default_1;
