"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.string.starts-with.js");
var _link = _interopRequireDefault(require("next/link"));
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = ["href"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_link.default, {
      href: href,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", _objectSpread({}, rest))
    });
  }
  if (isAnchorLink) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("a", _objectSpread({
      href: href
    }, rest));
  }
  if (!href.startsWith('http')) href = "https://".concat(href);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("a", _objectSpread({
    target: "_blank",
    rel: "noopener noreferrer",
    href: href
  }, rest));
};
var _default = CustomLink;
exports.default = _default;