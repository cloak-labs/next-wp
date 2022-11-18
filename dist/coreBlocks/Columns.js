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
var ConditionalWrapper_1 = require("../components/ConditionalWrapper");
var Container_1 = require("../components/Container");
var useBlockStyleBuilder_1 = require("../hooks/useBlockStyleBuilder");
var react_1 = require("react");
var classNames_1 = require("../utils/classNames");
var Column_1 = require("./Column");
function Columns(_a) {
    var block = _a.block;
    var _b = (0, useBlockStyleBuilder_1.useBlockStyleBuilder)(block.data), classes = _b.classes, styles = _b.styles;
    var columns = block.data.innerBlocks;
    var columnWidths = columns.map(function (col) { return parseFloat(col.attrs.width); });
    // Ensure column widths add up to 100% (Gutenberg doesn't force the columns to add up to 100%; they can add up to more or less but we don't want that)
    // eg. 2 columns with 60% and 45% widths (total of 105%) will be adjusted below to become 57.5% and 42.5% (total of 100%)
    var totalWidth = 0;
    columnWidths.forEach(function (width) { return totalWidth += width; });
    var isOver = totalWidth > 100;
    var isUnder = totalWidth < 100;
    if (isOver || isUnder) {
        var extra = Math.abs(100 - totalWidth);
        var adjustment_1 = extra / columns.length;
        columnWidths = columnWidths.map(function (width) { return isOver ? width - adjustment_1 : width + adjustment_1; });
    }
    return ((0, jsx_runtime_1.jsx)(ConditionalWrapper_1.default, __assign({ condition: block.isNested == false, wrapper: function (children) { return (0, jsx_runtime_1.jsx)(Container_1.default, __assign({ className: (0, classNames_1.default)("py-12", classes), style: styles, innerClassName: "grid grid-cols-1 grid-cols-12 gap-10 lg:gap-20" }, { children: children })); } }, { children: columns === null || columns === void 0 ? void 0 : columns.map(function (column, i) { return ((0, jsx_runtime_1.jsx)(react_1.Fragment, { children: (0, jsx_runtime_1.jsx)(Column_1.default, { column: column, index: i, width: columnWidths[i] }) }, i)); }) })));
}
exports.default = Columns;
