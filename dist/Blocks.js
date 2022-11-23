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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Block_1 = require("./Block");
var ConditionalWrapper_1 = require("./components/ConditionalWrapper");
var blockConfig_1 = require("./context/blockConfig");
function Blocks(_a) {
    var data = _a.data, blockConfig = _a.blockConfig, container = _a.container, props = __rest(_a, ["data", "blockConfig", "container"]);
    return ((0, jsx_runtime_1.jsx)(ConditionalWrapper_1.default, __assign({ condition: blockConfig, wrapper: function (children) { return ((0, jsx_runtime_1.jsx)(blockConfig_1.default, __assign({ value: blockConfig }, { children: children }))); } }, { children: data === null || data === void 0 ? void 0 : data.map(function (block, i) { return (0, jsx_runtime_1.jsx)(Block_1.default, __assign({ block: block, container: container }, props), i); }) })));
}
exports.default = Blocks;
