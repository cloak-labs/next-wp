"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Columns;
require("core-js/modules/es.parse-float.js");
var _ConditionalWrapper = _interopRequireDefault(require("../components/ConditionalWrapper"));
var _Container = _interopRequireDefault(require("../components/Container"));
var _useBlockStyleBuilder = require("../hooks/useBlockStyleBuilder");
var _react = require("react");
var _classNames = _interopRequireDefault(require("../utils/classNames"));
var _Column = _interopRequireDefault(require("./Column"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Columns(_ref) {
  let {
    block
  } = _ref;
  const {
    classes,
    styles
  } = (0, _useBlockStyleBuilder.useBlockStyleBuilder)(block.data);
  const columns = block.data.innerBlocks;
  let columnWidths = columns.map(col => parseFloat(col.attrs.width));

  // Ensure column widths add up to 100% (Gutenberg doesn't force the columns to add up to 100%; they can add up to more or less but we don't want that)
  // eg. 2 columns with 60% and 45% widths (total of 105%) will be adjusted below to become 57.5% and 42.5% (total of 100%)
  let totalWidth = 0;
  columnWidths.forEach(width => totalWidth += width);
  const isOver = totalWidth > 100;
  const isUnder = totalWidth < 100;
  if (isOver || isUnder) {
    const extra = Math.abs(100 - totalWidth);
    const adjustment = extra / columns.length;
    columnWidths = columnWidths.map(width => isOver ? width - adjustment : width + adjustment);
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ConditionalWrapper.default, {
    condition: block.isNested == false,
    wrapper: children => /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      className: (0, _classNames.default)("py-12", classes),
      style: styles,
      innerClassName: "grid grid-cols-1 grid-cols-12 gap-10 lg:gap-20",
      children: children
    }),
    children: columns === null || columns === void 0 ? void 0 : columns.map((column, i) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Column.default, {
        column: column,
        index: i,
        width: columnWidths[i]
      })
    }, i))
  });
}