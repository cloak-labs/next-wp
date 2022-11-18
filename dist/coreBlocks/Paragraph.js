"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Paragraph;
var _useBlockStyleBuilder = require("../hooks/useBlockStyleBuilder");
var _htmlReactParser = _interopRequireDefault(require("html-react-parser"));
var _classNames = _interopRequireDefault(require("../utils/classNames"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Paragraph(_ref) {
  var _block$data, _block$data$attrs;
  let {
    block,
    className
  } = _ref;
  const {
    classes,
    styles
  } = (0, _useBlockStyleBuilder.useBlockStyleBuilder)(block.data);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
    className: (0, _classNames.default)("h-min-content", classes, block !== null && block !== void 0 && (_block$data = block.data) !== null && _block$data !== void 0 && (_block$data$attrs = _block$data.attrs) !== null && _block$data$attrs !== void 0 && _block$data$attrs.backgroundColor ? "p-6" : 'pb-6', className),
    style: styles,
    children: (0, _htmlReactParser.default)(block.data.attrs.content)
  });
}