"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var coreBlocks_1 = require("./coreBlocks");
var Container_1 = require("./components/Container");
var ConditionalWrapper_1 = require("./components/ConditionalWrapper");
var useBlockConfig_1 = require("./hooks/useBlockConfig");
var classNames_1 = require("./utils/classNames");
var deepMerge_1 = require("./utils/deepMerge");
function Block(_a) {
    var _b, _c;
    var block = _a.block, _d = _a.isNested, isNested = _d === void 0 ? false : _d, parentBlock = _a.parentBlock, _e = _a.customBlocks, customBlocks = _e === void 0 ? [] : _e, _f = _a.containerClasses, containerClasses = _f === void 0 ? '' : _f, container = _a.container, // dev has the ability to override the default container function below: we pass all props to it so devs can do all kinds of custom/conditional rendering
    containerCondition = _a.containerCondition, // dev has the ability to override the default condition that determines whether to wrap a block with a container
    props = __rest(_a, ["block", "isNested", "parentBlock", "customBlocks", "containerClasses", "container", "containerCondition"]);
    var globalConfig = (0, useBlockConfig_1.default)();
    /*
        nextwp provides simple/sensible defaults for core block components, the block container,
        and the condition for which the block container is used (devs can override all these
        defaults via the Block component's props or the global config's props)
    */
    var defaults = {
        container: function (_a) {
            var block = _a.block;
            return (0, jsx_runtime_1.jsx)(Container_1.default, __assign({ className: (0, classNames_1.default)("relative", block.config.containerClasses) }, { children: block.rendered }));
        },
        containerCondition: function (_a) {
            var block = _a.block;
            return block.isNested == false && block.config.hasContainer;
        },
        blocks: {
            'core/paragraph': {
                component: coreBlocks_1.Paragraph,
                hasContainer: true,
                containerClasses: 'py-2',
            },
            'core/heading': {
                component: coreBlocks_1.Heading,
                hasContainer: true,
                containerClasses: 'py-2',
            },
            'core/image': {
                component: coreBlocks_1.Image,
                hasContainer: true,
                containerClasses: 'py-2',
            },
            'core/embed': {
                component: coreBlocks_1.Embed,
                hasContainer: true,
                containerClasses: 'py-2',
            },
            'core/columns': {
                component: coreBlocks_1.Columns,
                hasContainer: false,
            },
            'core/group': {
                component: coreBlocks_1.Group,
                hasContainer: false,
            },
            'core/list': {
                component: coreBlocks_1.List,
                hasContainer: true,
            },
            'core/buttons': {
                component: coreBlocks_1.Buttons,
                hasContainer: true,
            },
        }
    };
    container = (_b = container !== null && container !== void 0 ? container : globalConfig.container) !== null && _b !== void 0 ? _b : defaults.container;
    containerCondition = (_c = containerCondition !== null && containerCondition !== void 0 ? containerCondition : globalConfig.containerCondition) !== null && _c !== void 0 ? _c : defaults.containerCondition;
    var blockConfig = (0, deepMerge_1.deepMerge)(defaults.blocks, // lowest priority
    globalConfig.customBlocks, // middle priority (global config)
    customBlocks // highest priority (Block "customBlocks" prop)
    )[block.blockName];
    if (!blockConfig)
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
    var Component = blockConfig.component, configProps = blockConfig.props;
    props = __assign(__assign({}, configProps), props // props provided to Block component will override matching props in global config
    );
    if (!Component)
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
    var blockObj = {
        isNested: isNested,
        data: block,
        parent: parentBlock,
        config: blockConfig
    };
    return ((0, jsx_runtime_1.jsx)(ConditionalWrapper_1.default, __assign({ condition: function () { return containerCondition({ block: blockObj, props: props }); }, wrapper: function (children) { return container({ block: __assign(__assign({}, blockObj), { rendered: children }), props: props }); } }, { children: (0, jsx_runtime_1.jsx)(Component, __assign({ block: blockObj }, props)) })));
}
exports.default = Block;
