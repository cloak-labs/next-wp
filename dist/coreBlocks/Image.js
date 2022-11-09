"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Image;
var _image = _interopRequireDefault(require("next/image"));
var _htmlReactParser = _interopRequireDefault(require("html-react-parser"));
var _classNames = _interopRequireDefault(require("../utils/classNames"));
var _ConditionalWrapper = _interopRequireDefault(require("../components/ConditionalWrapper"));
var _Link = _interopRequireDefault(require("../components/Link"));
var _useBlockStyleBuilder = require("../hooks/useBlockStyleBuilder");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Image(_ref) {
  var _block$data, _block$parent, _block$parent$attrs;
  let {
    block,
    className
  } = _ref;
  const {
    classes,
    styles
  } = (0, _useBlockStyleBuilder.useBlockStyleBuilder)(block.data);
  const {
    url,
    alt,
    caption,
    href
  } = block === null || block === void 0 ? void 0 : (_block$data = block.data) === null || _block$data === void 0 ? void 0 : _block$data.attrs;
  const captionColor = (block === null || block === void 0 ? void 0 : (_block$parent = block.parent) === null || _block$parent === void 0 ? void 0 : (_block$parent$attrs = _block$parent.attrs) === null || _block$parent$attrs === void 0 ? void 0 : _block$parent$attrs.textColor) || 'gray-700';
  return /*#__PURE__*/React.createElement("div", {
    className: (0, _classNames.default)('relative', className),
    style: styles
  }, /*#__PURE__*/React.createElement(_ConditionalWrapper.default, {
    condition: href,
    wrapper: children => /*#__PURE__*/React.createElement(_Link.default, {
      href: href
    }, children)
  }, /*#__PURE__*/React.createElement(_image.default, {
    src: url,
    className: (0, _classNames.default)("rounded-lg", classes),
    objectFit: "cover",
    alt: alt,
    width: "100%",
    height: "100%",
    layout: "responsive"
  })), caption && /*#__PURE__*/React.createElement("p", {
    className: (0, _classNames.default)('text-sm text-center mt-2', "text-".concat(captionColor))
  }, (0, _htmlReactParser.default)(caption)));
}