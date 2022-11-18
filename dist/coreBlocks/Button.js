"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ButtonBlock;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
var _useBlockConfig = _interopRequireDefault(require("../hooks/useBlockConfig"));
var _Button = _interopRequireDefault(require("../components/Button"));
var _useBlockStyleBuilder = require("../hooks/useBlockStyleBuilder");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ButtonBlock(_ref) {
  let {
    block
  } = _ref;
  const config = (0, _useBlockConfig.default)();
  const {
    classes,
    styles
  } = (0, _useBlockStyleBuilder.useBlockStyleBuilder)(block.data);
  let {
    backgroundColor,
    className,
    text,
    url
  } = block.data.attrs;
  let color = 'blue';
  if (backgroundColor.includes('green')) color = 'green';else if (backgroundColor == 'blue-900') color = 'navy';
  let variant = 'outline';
  if (className.includes('is-style-fill')) variant = 'solid';
  if (url.includes(config.wpUrl)) url = url.replace(config.wpUrl, '/');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
    href: url,
    color: color,
    variant: variant,
    children: text
  });
}