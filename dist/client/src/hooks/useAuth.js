"use strict";
exports.__esModule = true;
exports.useAuth = void 0;
var react_1 = require("react");
var storageName = 'userData';
var useAuth = function () {
    var _a = react_1.useState(''), token = _a[0], setToken = _a[1];
    var _b = react_1.useState(''), userId = _b[0], setUserId = _b[1];
    var _c = react_1.useState(false), ready = _c[0], setReady = _c[1];
    var login = react_1.useCallback(function (jwtToken, id) {
        setToken(jwtToken);
        setUserId(id);
        localStorage.setItem(storageName, JSON.stringify({ userId: id, token: jwtToken }));
    }, []);
    var logout = react_1.useCallback(function () {
        setToken('');
        setUserId('');
        localStorage.removeItem(storageName);
    }, []);
    react_1.useEffect(function () {
        var locData = localStorage.getItem(storageName);
        if (locData) {
            var data = JSON.parse(locData);
            login(data.token, data.userId);
        }
        setReady(true);
    }, [login]);
    return {
        login: login, logout: logout, token: token, userId: userId, ready: ready
    };
};
exports.useAuth = useAuth;
