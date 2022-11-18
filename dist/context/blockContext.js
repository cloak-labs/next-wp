"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextWP = exports.BlockContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
exports.BlockContext = (0, react_1.createContext)();
var BlockProvider = function (_a) {
    var value = _a.value, children = _a.children;
    return (0, jsx_runtime_1.jsx)(exports.BlockContext.Provider, __assign({ value: value }, { children: children }));
};
exports.default = BlockProvider;
var NextWP = /** @class */ (function () {
    function NextWP(config) {
        if (config === void 0) { config = {}; }
        this.customBlocks = config.customBlocks;
        this.wpUrl = config.wpUrl;
        this.wpSecret = config.wpSecret;
        this.wpJwt = config.wpJwt;
        this.wpGraphQlBaseURL = config.wpGraphQlBaseURL;
        this.wpAuthRefreshToken = config.wpAuthRefreshToken;
    }
    return NextWP;
}());
exports.NextWP = NextWP;
