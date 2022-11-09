"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Buttons;
var _Button = _interopRequireDefault(require("./Button"));
var _useBlockStyleBuilder = require("../hooks/useBlockStyleBuilder");
var _react = require("react");
var _classNames = _interopRequireDefault(require("../utils/classNames"));
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
  return /*#__PURE__*/React.createElement("div", {
    className: (0, _classNames.default)("flex items-start gap-3", classes, className),
    style: styles
  }, block.data.innerBlocks.map((buttonBlock, i) => /*#__PURE__*/React.createElement(_react.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement(_Button.default, {
    block: {
      data: buttonBlock,
      parent: block.data,
      isNested: true
    }
  }))));
}