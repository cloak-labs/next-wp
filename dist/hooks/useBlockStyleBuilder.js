"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBlockStyleBuilder = void 0;
var classNames_1 = require("../utils/classNames");
function useBlockStyleBuilder(block) {
    var _a, _b, _c, _d;
    var _e = block.attrs, _f = _e.backgroundColor, backgroundColor = _f === void 0 ? '' : _f, _g = _e.textColor, textColor = _g === void 0 ? '' : _g, _h = _e.className, className = _h === void 0 ? '' : _h, _j = _e.fontSize, fontSize = _j === void 0 ? '' : _j, _k = _e.align, align = _k === void 0 ? '' : _k, _l = _e.textAlign, textAlign = _l === void 0 ? '' : _l, _m = _e.style, style = _m === void 0 ? {} : _m, _o = _e.verticalAlignment, verticalAlignment = _o === void 0 ? '' : _o, _p = _e.layout, layout = _p === void 0 ? null : _p;
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
    if ((_a = style === null || style === void 0 ? void 0 : style.spacing) === null || _a === void 0 ? void 0 : _a.padding) {
        var _q = (_b = style === null || style === void 0 ? void 0 : style.spacing) === null || _b === void 0 ? void 0 : _b.padding, _r = _q.top, top_1 = _r === void 0 ? "0px" : _r, _s = _q.right, right = _s === void 0 ? "0px" : _s, _t = _q.bottom, bottom = _t === void 0 ? "0px" : _t, _u = _q.left, left = _u === void 0 ? "0px" : _u;
        var total_1 = 0;
        var arr = [top_1, right, bottom, left];
        arr === null || arr === void 0 ? void 0 : arr.forEach(function (val) { return (total_1 += parseFloat(val)); });
        if (total_1 > 0) {
            styles["padding"] = "".concat(top_1, " ").concat(right, " ").concat(bottom, " ").concat(left);
        }
    }
    if ((_c = style === null || style === void 0 ? void 0 : style.spacing) === null || _c === void 0 ? void 0 : _c.margin) {
        var _v = (_d = style === null || style === void 0 ? void 0 : style.spacing) === null || _d === void 0 ? void 0 : _d.margin, _w = _v.top, top_2 = _w === void 0 ? "0px" : _w, _x = _v.right, right = _x === void 0 ? "0px" : _x, _y = _v.bottom, bottom = _y === void 0 ? "0px" : _y, _z = _v.left, left = _z === void 0 ? "0px" : _z;
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
