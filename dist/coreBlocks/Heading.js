"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Heading;
var _useBlockStyleBuilder = require("../hooks/useBlockStyleBuilder");
var _htmlReactParser = _interopRequireDefault(require("html-react-parser"));
var _classNames = _interopRequireDefault(require("../utils/classNames"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Heading(_ref) {
  let {
    block,
    className,
    tags
  } = _ref;
  const {
    classes,
    styles
  } = (0, _useBlockStyleBuilder.useBlockStyleBuilder)(block.data);
  const {
    level,
    content
  } = block.data.attrs;
  const Tag = _objectSpread({
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'h5',
    6: 'h6'
  }, tags)[level];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Tag, {
    className: (0, _classNames.default)(classes, className),
    style: styles,
    children: (0, _htmlReactParser.default)(content)
  });
}