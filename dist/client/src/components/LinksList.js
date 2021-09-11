"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var LinksList = function (_a) {
    var links = _a.links;
    if (!links.length)
        return <p>Links not contain</p>;
    return (<div className="container">
      <h1>Links</h1>
      <table>
        <thead>
          <tr>
              <th>To</th>
              <th>From</th>
              <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {links.map(function (link) { return (<tr key={link._id}>
              <td><a rel="noreferrer" target="_blank" href={link.to}>{link.to}</a></td>
              <td><a rel="noreferrer" target="_blank" href={link.from}>{link.from}</a></td>
              <td>{new Date(link.date).toLocaleDateString()}</td>
              <td><react_router_dom_1.Link to={"/detail/" + link._id}>Открыть</react_router_dom_1.Link></td>
            </tr>); })}
        </tbody>
      </table>
    </div>);
};
exports["default"] = LinksList;
