"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NextWP = exports.BlockContext = void 0;
var _react = require("react");
const BlockContext = /*#__PURE__*/(0, _react.createContext)();
exports.BlockContext = BlockContext;
const BlockProvider = _ref => {
  let {
    value,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(BlockContext.Provider, {
    value: value
  }, children);
};
var _default = BlockProvider;
exports.default = _default;
class NextWP {
  constructor() {
    let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.customBlocks = config.customBlocks;
    this.wpUrl = config.wpUrl;
    this.wpSecret = config.wpSecret;
    this.wpJwt = config.wpJwt;
    this.wpGraphQlBaseURL = config.wpGraphQlBaseURL;
    this.wpAuthRefreshToken = config.wpAuthRefreshToken;
  }
}
exports.NextWP = NextWP;