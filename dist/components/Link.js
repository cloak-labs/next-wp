"use strict";

require("core-js/modules/es.object.assign.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.string.starts-with.js");
var _link = _interopRequireDefault(require("next/link"));
const _excluded = ["href"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const CustomLink = _ref => {
  let {
      href
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');
  if (isInternalLink) {
    return /*#__PURE__*/React.createElement(_link.default, {
      href: href
    }, /*#__PURE__*/React.createElement("a", rest));
  }
  if (isAnchorLink) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href
    }, rest));
  }
  if (!href.startsWith('http')) href = "https://".concat(href);
  return /*#__PURE__*/React.createElement("a", _extends({
    target: "_blank",
    rel: "noopener noreferrer",
    href: href
  }, rest));
};
var _default = CustomLink;
exports.default = _default;