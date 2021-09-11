"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var auth_router_1 = __importDefault(require("./auth.router"));
var links_router_1 = __importDefault(require("./links.router"));
var redirect_router_1 = __importDefault(require("./redirect.router"));
exports["default"] = {
    auth: auth_router_1["default"],
    links: links_router_1["default"],
    redirect: redirect_router_1["default"]
};
