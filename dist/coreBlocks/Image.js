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
var image_1 = require("next/image");
var html_react_parser_1 = require("html-react-parser");
var classNames_1 = require("../utils/classNames");
var ConditionalWrapper_1 = require("../components/ConditionalWrapper");
var Link_1 = require("../components/Link");
var useBlockStyleBuilder_1 = require("../hooks/useBlockStyleBuilder");
function Image(_a) {
    var _b, _c, _d;
    var block = _a.block, className = _a.className;
    var _e = (0, useBlockStyleBuilder_1.useBlockStyleBuilder)(block.data), classes = _e.classes, styles = _e.styles;
    var _f = (_b = block === null || block === void 0 ? void 0 : block.data) === null || _b === void 0 ? void 0 : _b.attrs, url = _f.url, alt = _f.alt, caption = _f.caption, href = _f.href;
    var captionColor = ((_d = (_c = block === null || block === void 0 ? void 0 : block.parent) === null || _c === void 0 ? void 0 : _c.attrs) === null || _d === void 0 ? void 0 : _d.textColor) || 'gray-700';
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, classNames_1.default)('relative', className), style: styles }, { children: [(0, jsx_runtime_1.jsx)(ConditionalWrapper_1.default, __assign({ condition: href, wrapper: function (children) { return (0, jsx_runtime_1.jsx)(Link_1.default, __assign({ href: href }, { children: children })); } }, { children: (0, jsx_runtime_1.jsx)(image_1.default, { src: url, className: (0, classNames_1.default)("rounded-lg", classes), objectFit: 'cover', alt: alt, width: "100%", height: "100%", layout: "responsive" }) })), caption && (0, jsx_runtime_1.jsx)("p", __assign({ className: (0, classNames_1.default)('text-sm text-center mt-2', "text-".concat(captionColor)) }, { children: (0, html_react_parser_1.default)(caption) }))] })));
}
exports.default = Image;
