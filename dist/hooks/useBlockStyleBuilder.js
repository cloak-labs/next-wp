"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useBlockStyleBuilder = useBlockStyleBuilder;
var _classNames = _interopRequireDefault(require("../utils/classNames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function useBlockStyleBuilder(block) {
  var _style$spacing, _style$spacing3;
  const {
    backgroundColor,
    textColor,
    className,
    fontSize,
    align,
    textAlign,
    style,
    verticalAlignment,
    layout
  } = block.attrs;
  const layoutKeyword = (layout === null || layout === void 0 ? void 0 : layout.orientation) == "horizontal" ? "justify" : "items";
  const classes = (0, _classNames.default)(backgroundColor && "bg-".concat(backgroundColor), textColor && "text-".concat(textColor), fontSize && "text-".concat(fontSize), (align || textAlign) && "text-".concat(textAlign || align), verticalAlignment ? verticalAlignment == 'center' ? 'justify-center' : verticalAlignment == 'bottom' ? 'justify-end' : 'justify-start' : '', layout && layout.orientation ? layout.orientation == "horizontal" ? "flex-row" : "flex-col" : "", layout ? layout.justifyContent == "center" ? "".concat(layoutKeyword, "-center") : layout.justifyContent == "right" ? "".concat(layoutKeyword, "-end") : layout.justifyContent == "space-between" ? "".concat(layoutKeyword, "-between") : '' : "", className);
  let styles = {};
  if (style !== null && style !== void 0 && (_style$spacing = style.spacing) !== null && _style$spacing !== void 0 && _style$spacing.padding) {
    var _style$spacing2;
    const {
      top = '0px',
      right = '0px',
      bottom = '0px',
      left = '0px'
    } = style === null || style === void 0 ? void 0 : (_style$spacing2 = style.spacing) === null || _style$spacing2 === void 0 ? void 0 : _style$spacing2.padding;
    styles['padding'] = "".concat(top, " ").concat(right, " ").concat(bottom, " ").concat(left);
  }
  if (style !== null && style !== void 0 && (_style$spacing3 = style.spacing) !== null && _style$spacing3 !== void 0 && _style$spacing3.margin) {
    var _style$spacing4;
    const {
      top = '0px',
      right = '0px',
      bottom = '0px',
      left = '0px'
    } = style === null || style === void 0 ? void 0 : (_style$spacing4 = style.spacing) === null || _style$spacing4 === void 0 ? void 0 : _style$spacing4.margin;
    styles['margin'] = "".concat(top, " ").concat(right, " ").concat(bottom, " ").concat(left);
  }
  return {
    classes,
    styles
  };
}