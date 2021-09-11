"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Layout_1 = __importDefault(require("./components/Layout"));
var Loader_1 = __importDefault(require("./components/Loader"));
var AuthContext_1 = require("./Context/AuthContext");
var useAuth_1 = require("./hooks/useAuth");
var routes_1 = require("./routes");
var App = function () {
    var _a = useAuth_1.useAuth(), token = _a.token, login = _a.login, logout = _a.logout, userId = _a.userId, ready = _a.ready;
    var isAuthenticated = !!token;
    var routes = routes_1.useRoutes(isAuthenticated);
    if (!ready)
        return <Loader_1["default"] />;
    return (<AuthContext_1.AuthContext.Provider value={{ token: token, userId: userId, isAuthenticated: isAuthenticated, login: login, logout: logout }}>
      <react_router_dom_1.BrowserRouter>
      {isAuthenticated && <Layout_1["default"] />}
        <div className="container">
          {routes}
        </div>
      </react_router_dom_1.BrowserRouter>
    </AuthContext_1.AuthContext.Provider>);
};
exports["default"] = App;
