"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.AuthContext = void 0;
var react_1 = __importDefault(require("react"));
exports.AuthContext = react_1["default"].createContext({
    token: '',
    userId: '',
    login: function (token, userId) { },
    logout: function () { }
});
