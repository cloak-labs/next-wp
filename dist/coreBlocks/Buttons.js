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
var jsx_runtime_1 = require("react/jsx-runtime");
var Button_1 = require("./Button");
var useBlockStyleBuilder_1 = require("../hooks/useBlockStyleBuilder");
var react_1 = require("react");
var classNames_1 = require("../utils/classNames");
function Buttons(_a) {
    var block = _a.block, className = _a.className;
    var _b = (0, useBlockStyleBuilder_1.useBlockStyleBuilder)(block.data), classes = _b.classes, styles = _b.styles;
    console.log('%%% button classes', classes);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, classNames_1.default)("flex items-start gap-3", classes, className), style: styles }, { children: block.data.innerBlocks.map(function (buttonBlock, i) { return ((0, jsx_runtime_1.jsx)(react_1.Fragment, { children: (0, jsx_runtime_1.jsx)(Button_1.default, { block: { data: buttonBlock, parent: block.data, isNested: true } }) }, i)); }) })));
}
exports.default = Buttons;
