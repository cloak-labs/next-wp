"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBlockStyleBuilder = void 0;
var classNames_1 = require("../utils/classNames");
function useBlockStyleBuilder(block) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var backgroundColor = (_a = block.attrs.backgroundColor) !== null && _a !== void 0 ? _a : "";
    var textColor = (_b = block.attrs.textColor) !== null && _b !== void 0 ? _b : "";
    var className = (_c = block.attrs.className) !== null && _c !== void 0 ? _c : "";
    var fontSize = (_d = block.attrs.fontSize) !== null && _d !== void 0 ? _d : "";
    var align = (_e = block.attrs.align) !== null && _e !== void 0 ? _e : "";
    var textAlign = (_f = block.attrs.textAlign) !== null && _f !== void 0 ? _f : "";
    var style = (_g = block.attrs.style) !== null && _g !== void 0 ? _g : {};
    var verticalAlignment = (_h = block.attrs.verticalAlignment) !== null && _h !== void 0 ? _h : "";
    var layout = (_j = block.attrs.layout) !== null && _j !== void 0 ? _j : null;
    var layoutKeyword = (layout === null || layout === void 0 ? void 0 : layout.orientation) == "horizontal" || (layout === null || layout === void 0 ? void 0 : layout.type) == "flex" ? "justify" : "items";
    var classes = (0, classNames_1.classNames)(backgroundColor && "bg-".concat(backgroundColor), textColor && "text-".concat(textColor), fontSize && "text-".concat(fontSize), (align || textAlign) && "text-".concat(textAlign || align), verticalAlignment ? (verticalAlignment == "center" ? "justify-center" : verticalAlignment == "bottom" ? "justify-end" : "justify-start") : "", layout && layout.orientation ? (layout.orientation == "horizontal" ? "flex-row" : "flex-col") : "", layout
        ? layout.justifyContent == "center"
            ? "".concat(layoutKeyword, "-center")
            : layout.justifyContent == "right"
                ? "".concat(layoutKeyword, "-end")
                : layout.justifyContent == "space-between"
                    ? "".concat(layoutKeyword, "-between")
                    : ""
        : "", className);
    var styles = {};
    if ((_k = style === null || style === void 0 ? void 0 : style.spacing) === null || _k === void 0 ? void 0 : _k.padding) {
        var _p = (_l = style === null || style === void 0 ? void 0 : style.spacing) === null || _l === void 0 ? void 0 : _l.padding, _q = _p.top, top_1 = _q === void 0 ? "0px" : _q, _r = _p.right, right = _r === void 0 ? "0px" : _r, _s = _p.bottom, bottom = _s === void 0 ? "0px" : _s, _t = _p.left, left = _t === void 0 ? "0px" : _t;
        var total_1 = 0;
        var arr = [top_1, right, bottom, left];
        arr === null || arr === void 0 ? void 0 : arr.forEach(function (val) { return (total_1 += parseFloat(val)); });
        if (total_1 > 0) {
            styles["padding"] = "".concat(top_1, " ").concat(right, " ").concat(bottom, " ").concat(left);
        }
    }
    if ((_m = style === null || style === void 0 ? void 0 : style.spacing) === null || _m === void 0 ? void 0 : _m.margin) {
        var _u = (_o = style === null || style === void 0 ? void 0 : style.spacing) === null || _o === void 0 ? void 0 : _o.margin, _v = _u.top, top_2 = _v === void 0 ? "0px" : _v, _w = _u.right, right = _w === void 0 ? "0px" : _w, _x = _u.bottom, bottom = _x === void 0 ? "0px" : _x, _y = _u.left, left = _y === void 0 ? "0px" : _y;
        var total_2 = 0;
        var arr = [top_2, right, bottom, left];
        arr === null || arr === void 0 ? void 0 : arr.forEach(function (val) { return (total_2 += parseFloat(val)); });
        if (total_2 > 0) {
            styles["margin"] = "".concat(top_2, " ").concat(right, " ").concat(bottom, " ").concat(left);
        }
    }
    return {
        classes: classes,
        styles: styles,
    };
}
exports.useBlockStyleBuilder = useBlockStyleBuilder;
