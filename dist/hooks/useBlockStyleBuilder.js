"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBlockStyleBuilder = void 0;
var classNames_1 = require("../utils/classNames");
function useBlockStyleBuilder(block) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    var backgroundColor = (_b = (_a = block.attrs) === null || _a === void 0 ? void 0 : _a.backgroundColor) !== null && _b !== void 0 ? _b : "";
    var textColor = (_d = (_c = block.attrs) === null || _c === void 0 ? void 0 : _c.textColor) !== null && _d !== void 0 ? _d : "";
    var className = (_f = (_e = block.attrs) === null || _e === void 0 ? void 0 : _e.className) !== null && _f !== void 0 ? _f : "";
    var fontSize = (_h = (_g = block.attrs) === null || _g === void 0 ? void 0 : _g.fontSize) !== null && _h !== void 0 ? _h : "";
    var align = (_k = (_j = block.attrs) === null || _j === void 0 ? void 0 : _j.align) !== null && _k !== void 0 ? _k : "";
    var textAlign = (_m = (_l = block.attrs) === null || _l === void 0 ? void 0 : _l.textAlign) !== null && _m !== void 0 ? _m : "";
    var style = (_p = (_o = block.attrs) === null || _o === void 0 ? void 0 : _o.style) !== null && _p !== void 0 ? _p : {};
    var verticalAlignment = (_r = (_q = block.attrs) === null || _q === void 0 ? void 0 : _q.verticalAlignment) !== null && _r !== void 0 ? _r : "";
    var layout = (_t = (_s = block.attrs) === null || _s === void 0 ? void 0 : _s.layout) !== null && _t !== void 0 ? _t : null;
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
    if ((_u = style === null || style === void 0 ? void 0 : style.spacing) === null || _u === void 0 ? void 0 : _u.padding) {
        var _y = (_v = style === null || style === void 0 ? void 0 : style.spacing) === null || _v === void 0 ? void 0 : _v.padding, _z = _y.top, top_1 = _z === void 0 ? "0px" : _z, _0 = _y.right, right = _0 === void 0 ? "0px" : _0, _1 = _y.bottom, bottom = _1 === void 0 ? "0px" : _1, _2 = _y.left, left = _2 === void 0 ? "0px" : _2;
        var total_1 = 0;
        var arr = [top_1, right, bottom, left];
        arr === null || arr === void 0 ? void 0 : arr.forEach(function (val) { return (total_1 += parseFloat(val)); });
        if (total_1 > 0) {
            styles["padding"] = "".concat(top_1, " ").concat(right, " ").concat(bottom, " ").concat(left);
        }
    }
    if ((_w = style === null || style === void 0 ? void 0 : style.spacing) === null || _w === void 0 ? void 0 : _w.margin) {
        var _3 = (_x = style === null || style === void 0 ? void 0 : style.spacing) === null || _x === void 0 ? void 0 : _x.margin, _4 = _3.top, top_2 = _4 === void 0 ? "0px" : _4, _5 = _3.right, right = _5 === void 0 ? "0px" : _5, _6 = _3.bottom, bottom = _6 === void 0 ? "0px" : _6, _7 = _3.left, left = _7 === void 0 ? "0px" : _7;
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
