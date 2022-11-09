"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Embed;
var _reactPlayer = _interopRequireDefault(require("react-player"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Embed(_ref) {
  let {
    block,
    className
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement(_reactPlayer.default, {
    url: block.data.attrs.url,
    width: "100%"
  }));
}