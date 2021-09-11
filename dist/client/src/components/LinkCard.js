"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var LinkCard = function (_a) {
    var link = _a.link;
    console.log(link);
    return (<div className="LinkCard">
      <h3>Ссылка</h3>
      <p>Ваша ссылка: <a rel="noreferrer" target="_blank" href={link.to}>{link.to}</a></p>
      <p>Откуда: <a target="_blank" href={link.from} rel="noreferrer">{link.from}</a></p>
      <p>Клики по ссылке: <strong>{link.clicks}</strong></p>
      <p>Дата создания: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
    </div>);
};
exports["default"] = LinkCard;
