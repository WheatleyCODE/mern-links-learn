"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.useRoutes = void 0;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var AuthPage_1 = __importDefault(require("../pages/AuthPage"));
var CreatePage_1 = __importDefault(require("../pages/CreatePage"));
var DetailPage_1 = __importDefault(require("../pages/DetailPage"));
var LinksPage_1 = __importDefault(require("../pages/LinksPage"));
// Функция вовзращающая определенные роуты
var useRoutes = function (isAuthenticated) {
    if (isAuthenticated) {
        return (<react_router_dom_1.Switch>
        <react_router_dom_1.Route component={LinksPage_1["default"]} path={'/links'} exact/>
        <react_router_dom_1.Route component={CreatePage_1["default"]} path={'/create'} exact/>
        <react_router_dom_1.Route component={DetailPage_1["default"]} path={'/detail/:id'}/>
        <react_router_dom_1.Redirect to={'/create'}/>
      </react_router_dom_1.Switch>);
    }
    else {
        return (<react_router_dom_1.Switch>
        <react_router_dom_1.Route component={AuthPage_1["default"]} path={'/'} exact/>
        <react_router_dom_1.Redirect to={'/'}/>
      </react_router_dom_1.Switch>);
    }
};
exports.useRoutes = useRoutes;
