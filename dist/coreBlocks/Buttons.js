"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Buttons;
var _Button = _interopRequireDefault(require("./Button"));
var _useBlockStyleBuilder = require("../hooks/useBlockStyleBuilder");
var _react = require("react");
var _classNames = _interopRequireDefault(require("../utils/classNames"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Buttons(_ref) {
  let {
    block,
    className
  } = _ref;
  const {
    classes,
    styles
  } = (0, _useBlockStyleBuilder.useBlockStyleBuilder)(block.data);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _classNames.default)("flex items-start gap-3", classes, className),
    style: styles,
    children: block.data.innerBlocks.map((buttonBlock, i) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        block: {
          data: buttonBlock,
          parent: block.data,
          isNested: true
        }
      })
    }, i))
  });
}