"use strict";
exports.__esModule = true;
exports.useMessage = void 0;
var react_1 = require("react");
var useMessage = function () {
    return react_1.useCallback(function (text) {
        if (window.M && text) {
            window.M.toast({ html: text });
        }
    }, []);
};
exports.useMessage = useMessage;
