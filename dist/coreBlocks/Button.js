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
var useGlobalConfig_1 = require("../hooks/useGlobalConfig");
var Button_1 = require("../components/Button");
var useBlockStyleBuilder_1 = require("../hooks/useBlockStyleBuilder");
function ButtonBlock(_a) {
    var block = _a.block;
    var config = (0, useGlobalConfig_1.useGlobalConfig)();
    var _b = (0, useBlockStyleBuilder_1.useBlockStyleBuilder)(block.data), classes = _b.classes, styles = _b.styles;
    var _c = block.data.attrs, backgroundColor = _c.backgroundColor, className = _c.className, text = _c.text, url = _c.url;
    var color = 'white';
    if (backgroundColor == 'gray-900')
        color = 'black';
    else if (backgroundColor.includes('gray'))
        color = 'gray';
    var variant = 'solid';
    if (className.includes('is-style-outline'))
        variant = 'outline';
    if (url.includes(config.wpUrl))
        url = url.replace(config.wpUrl, '/');
    return (0, jsx_runtime_1.jsx)(Button_1.default, __assign({ href: url, color: color, variant: variant, wpClasses: classes, style: styles }, { children: text }));
}
exports.default = ButtonBlock;
