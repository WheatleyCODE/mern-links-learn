"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var AuthContext_1 = require("../Context/AuthContext");
var Layout = function (_a) {
    var children = _a.children;
    var _b = react_1.useContext(AuthContext_1.AuthContext), logout = _b.logout, isAuthenticated = _b.isAuthenticated;
    var history = react_router_dom_1.useHistory();
    var logoutHandler = function (e) {
        e.preventDefault();
        logout();
        history.push('/');
    };
    return (<>
    <header>
      <nav>
        <div style={{ margin: '0px 20px' }} className="nav-wrapper">
          <react_router_dom_1.Link to="/" className="brand-logo">Сокращение ссылок</react_router_dom_1.Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><react_router_dom_1.NavLink to="/create">Cоздать</react_router_dom_1.NavLink></li>
            <li><react_router_dom_1.NavLink to="/links">Ссылки</react_router_dom_1.NavLink></li>
            {isAuthenticated && <li><react_router_dom_1.Link onClick={logoutHandler} to="/">Выйти</react_router_dom_1.Link></li>}
            
          </ul>
        </div>
      </nav>
    </header>
    <main>
      {children}
    </main>
    </>);
};
exports["default"] = Layout;
