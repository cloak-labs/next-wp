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
exports.AdminBar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Button_1 = require("../components/Button");
function AdminBar(_a) {
    var previewParams = _a.previewParams;
    var href = '/api/exit-preview';
    if (previewParams)
        href = "/api/exit-preview?slug=".concat(previewParams.postSlug);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "w-full flex items-center justify-center bg-gray-900 text-gray-200 px-8 py-1.5" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'flex' }, { children: [(0, jsx_runtime_1.jsx)("p", __assign({ className: "font-medium mb-0 text-base leading-7 flew-grow mr-4" }, { children: "You are previewing unpublished changes." })), (0, jsx_runtime_1.jsx)(Button_1.default, __assign({ color: 'gray', linkProps: { prefetch: false }, className: "py-1", href: href, size: "small" }, { children: "Exit Preview" }))] })) })));
}
exports.AdminBar = AdminBar;
