"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = List;
require("core-js/modules/web.dom-collections.iterator.js");
var _useBlockStyleBuilder = require("../hooks/useBlockStyleBuilder");
var _htmlReactParser = _interopRequireDefault(require("html-react-parser"));
var _classNames = _interopRequireDefault(require("../utils/classNames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function List(_ref) {
  let {
    block,
    className
  } = _ref;
  const {
    classes,
    styles
  } = (0, _useBlockStyleBuilder.useBlockStyleBuilder)(block.data);
  const {
    ordered,
    values
  } = block.data.attrs;
  const ListType = ordered ? 'ol' : 'ul';
  return /*#__PURE__*/React.createElement(ListType, {
    className: (0, _classNames.default)("space-y-3 pb-6", classes, className),
    style: styles
  }, (0, _htmlReactParser.default)(values));
}