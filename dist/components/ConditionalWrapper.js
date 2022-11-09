"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Code taken from: https://blog.hackages.io/conditionally-wrap-an-element-in-react-a8b9a47fab2
const ConditionalWrapper = _ref => {
  let {
    condition,
    wrapper,
    children,
    args
  } = _ref;
  const passesCondition = typeof condition === "function" ? condition() : condition;
  return passesCondition ? wrapper(children, args) : children;
};
var _default = ConditionalWrapper;
exports.default = _default;