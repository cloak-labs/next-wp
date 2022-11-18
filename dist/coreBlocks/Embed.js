"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Embed;
var _reactPlayer = _interopRequireDefault(require("react-player"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Embed(_ref) {
  let {
    block,
    className
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: className,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactPlayer.default, {
      url: block.data.attrs.url,
      width: "100%"
    })
  });
}