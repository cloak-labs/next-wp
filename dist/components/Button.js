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
var classNames_1 = require("../utils/classNames");
var ConditionalWrapper_1 = require("./ConditionalWrapper");
var link_1 = require("next/link");
var baseStyles = {
    solid: 'text-sm outline-2 outline-offset-2 transition-colors',
    outline: 'border text-sm outline-2 outline-offset-2 transition-colors',
    link: 'text-sm',
};
var variantStyles = {
    solid: {
        green: 'text-white bg-green-100 hover:bg-green-200 hover:text-blue-800',
        navy: 'text-white bg-blue-900 hover:bg-blue-700',
        blue: 'text-white bg-blue-800 hover:bg-blue-400',
    },
    outline: {
        green: 'border-green-100 text-blue-800 hover:border-green-300 hover:bg-green-100 hover:text-white',
        navy: 'border-blue-900 text-blue-800 hover:border-blue-700 hover:bg-blue-900 hover:text-white',
        blue: 'border-blue-800 text-blue-800 hover:border-blue-400 hover:bg-blue-800 hover:text-white',
    },
    link: {
        green: 'text-green-100 hover:text-green-300 active:text-green-100/80',
    },
};
function Button(_a) {
    var _b = _a.color, color = _b === void 0 ? 'navy' : _b, _c = _a.variant, variant = _c === void 0 ? 'solid' : _c, _d = _a.size, size = _d === void 0 ? 'reg' : _d, href = _a.href, icon = _a.icon, _e = _a.trailingIcon, trailingIcon = _e === void 0 ? true : _e, _f = _a.isLoading, isLoading = _f === void 0 ? false : _f, className = _a.className, children = _a.children;
    return ((0, jsx_runtime_1.jsx)(ConditionalWrapper_1.default, __assign({ condition: href, wrapper: function (children) { return (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: href }, { children: (0, jsx_runtime_1.jsx)("a", __assign({ className: className }, { children: children })) })); } }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ type: "button", className: (0, classNames_1.default)("inline-flex items-center justify-center border border-transparent font-semibold rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2", size === 'small' && 'text-xs px-4 py-1.5', size === 'reg' && 'text-sm px-6 py-2.5', size === 'large' && 'text-base px-8 py-3', baseStyles[variant], variantStyles[variant][color], !href && className) }, { children: (0, jsx_runtime_1.jsx)("span", __assign({ className: "w-full" }, { children: children })) })) })));
}
exports.default = Button;
