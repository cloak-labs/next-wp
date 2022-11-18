"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;
var _classNames = _interopRequireDefault(require("utils/classNames"));
var _ConditionalWrapper = _interopRequireDefault(require("./ConditionalWrapper"));
var _link = _interopRequireDefault(require("next/link"));
var _HeroIcon = _interopRequireDefault(require("./HeroIcon"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import Spinner from './Spinner';

const baseStyles = {
  solid: 'text-sm outline-2 outline-offset-2 transition-colors',
  outline: 'border text-sm outline-2 outline-offset-2 transition-colors',
  link: 'text-sm'
};
const variantStyles = {
  solid: {
    green: 'text-white bg-green-100 hover:bg-green-200 hover:text-blue-800',
    navy: 'text-white bg-blue-900 hover:bg-blue-700',
    blue: 'text-white bg-blue-800 hover:bg-blue-400'
  },
  outline: {
    green: 'border-green-100 text-blue-800 hover:border-green-300 hover:bg-green-100 hover:text-white',
    navy: 'border-blue-900 text-blue-800 hover:border-blue-700 hover:bg-blue-900 hover:text-white',
    blue: 'border-blue-800 text-blue-800 hover:border-blue-400 hover:bg-blue-800 hover:text-white'
  },
  link: {
    green: 'text-green-100 hover:text-green-300 active:text-green-100/80'
  }
};
function Button(_ref) {
  let {
    color = 'navy',
    variant = 'solid',
    size = 'reg',
    href,
    icon,
    trailingIcon = true,
    isLoading = false,
    className,
    children
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ConditionalWrapper.default, {
    condition: href,
    wrapper: children => /*#__PURE__*/(0, _jsxRuntime.jsx)(_link.default, {
      href: href,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        className: className,
        children: children
      })
    }),
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
      type: "button",
      className: (0, _classNames.default)("inline-flex items-center justify-center border border-transparent font-semibold rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2", size === 'small' && 'text-xs px-4 py-1.5', size === 'reg' && 'text-sm px-6 py-2.5', size === 'large' && 'text-base px-8 py-3', baseStyles[variant], variantStyles[variant][color], !href && className
      // color === 'blue' && 'bg-blue-800 hover:bg-blue-400',
      // color === 'navy' && 'bg-blue-900 hover:bg-blue-700',
      // color === 'green' && 'bg-green-100 hover:bg-green-200 hover:text-blue-800',
      ),
      children: [trailingIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "w-full",
        children: children
      }), icon && !isLoading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_HeroIcon.default, {
        icon: icon,
        className: (0, _classNames.default)("w-5 h-5 mt-px", trailingIcon ? "ml-2" : "mr-2"),
        "aria-hidden": "true"
      }), !trailingIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "w-full",
        children: children
      })]
    })
  });
}