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
var useBlockStyleBuilder_1 = require("../hooks/useBlockStyleBuilder");
var html_react_parser_1 = require("html-react-parser");
var classNames_1 = require("../utils/classNames");
function List(_a) {
    var block = _a.block, className = _a.className;
    var _b = (0, useBlockStyleBuilder_1.useBlockStyleBuilder)(block.data), classes = _b.classes, styles = _b.styles;
    var _c = block.data.attrs, ordered = _c.ordered, values = _c.values;
    var ListType = ordered ? 'ol' : 'ul';
    return ((0, jsx_runtime_1.jsx)(ListType, __assign({ className: (0, classNames_1.default)("space-y-3 pb-6", classes, className), style: styles }, { children: (0, html_react_parser_1.default)(values) })));
}
exports.default = List;
