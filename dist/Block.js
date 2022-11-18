"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Block;
var _coreBlocks = require("./coreBlocks");
var _Container = _interopRequireDefault(require("./components/Container"));
var _ConditionalWrapper = _interopRequireDefault(require("./components/ConditionalWrapper"));
var _useBlockConfig = _interopRequireDefault(require("./hooks/useBlockConfig"));
var _classNames = _interopRequireDefault(require("./utils/classNames"));
var _deepMerge = require("./utils/deepMerge");
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = ["block", "isNested", "parentBlock", "customBlocks", "containerClasses", "container", "containerCondition"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Block(_ref) {
  var _ref4, _container, _ref5, _containerCondition;
  let {
      block,
      isNested = false,
      parentBlock,
      customBlocks = [],
      containerClasses = '',
      container,
      // dev has the ability to override the default container function below: we pass all props to it so devs can do all kinds of custom/conditional rendering
      containerCondition
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const globalConfig = (0, _useBlockConfig.default)();

  /*  
      nextwp provides simple/sensible defaults for core block components, the block container, 
      and the condition for which the block container is used (devs can override all these 
      defaults via the Block component's props or the global config's props) 
  */
  const defaults = {
    container: _ref2 => {
      let {
        block
      } = _ref2;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
        className: (0, _classNames.default)("relative", block.config.containerClasses),
        children: block.rendered
      });
    },
    containerCondition: _ref3 => {
      let {
        block
      } = _ref3;
      return block.isNested == false && block.config.hasContainer;
    },
    blocks: {
      'core/paragraph': {
        component: _coreBlocks.Paragraph,
        hasContainer: true,
        containerClasses: 'py-2'
      },
      'core/heading': {
        component: _coreBlocks.Heading,
        hasContainer: true,
        containerClasses: 'py-2'
      },
      'core/image': {
        component: _coreBlocks.Image,
        hasContainer: true,
        containerClasses: 'py-2'
      },
      'core/embed': {
        component: _coreBlocks.Embed,
        hasContainer: true,
        containerClasses: 'py-2'
      },
      'core/columns': {
        component: _coreBlocks.Columns,
        hasContainer: false
      },
      'core/group': {
        component: _coreBlocks.Group,
        hasContainer: false
      },
      'core/list': {
        component: _coreBlocks.List,
        hasContainer: true
      },
      'core/buttons': {
        component: _coreBlocks.Buttons,
        hasContainer: true
      }
    }
  };
  container = (_ref4 = (_container = container) !== null && _container !== void 0 ? _container : globalConfig.container) !== null && _ref4 !== void 0 ? _ref4 : defaults.container;
  containerCondition = (_ref5 = (_containerCondition = containerCondition) !== null && _containerCondition !== void 0 ? _containerCondition : globalConfig.containerCondition) !== null && _ref5 !== void 0 ? _ref5 : defaults.containerCondition;
  const blockConfig = (0, _deepMerge.deepMerge)(defaults.blocks,
  // lowest priority
  globalConfig.customBlocks,
  // middle priority (global config)
  customBlocks // highest priority (Block "customBlocks" prop)
  )[block.blockName];
  if (!blockConfig) return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {});
  const {
    component: Component,
    props: configProps
  } = blockConfig;
  props = _objectSpread(_objectSpread({}, configProps), props);
  if (!Component) return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {});
  const blockObj = {
    isNested,
    data: block,
    parent: parentBlock,
    config: blockConfig
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ConditionalWrapper.default, {
    condition: () => containerCondition({
      block: blockObj,
      props
    }),
    wrapper: children => container({
      block: _objectSpread(_objectSpread({}, blockObj), {}, {
        rendered: children
      }),
      props
    }),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, _objectSpread({
      block: blockObj
    }, props))
  });
}