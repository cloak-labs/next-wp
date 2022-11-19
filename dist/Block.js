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
var Html_1 = require("./coreBlocks/Html");
function Block(_a) {
    var _b, _c, _d, _e, _f, _g;
    var block = _a.block, _h = _a.isNested, isNested = _h === void 0 ? false : _h, parentBlock = _a.parentBlock, _j = _a.customBlocks, customBlocks = _j === void 0 ? [] : _j, _k = _a.containerClasses, containerClasses = _k === void 0 ? '' : _k, container = _a.container, // dev has the ability to override the default container function below: we pass all props to it so devs can do all kinds of custom/conditional rendering
    containerCondition = _a.containerCondition, // dev has the ability to override the default condition that determines whether to wrap a block with a container
    props = __rest(_a, ["block", "isNested", "parentBlock", "customBlocks", "containerClasses", "container", "containerCondition"]);
    var globalConfig = (0, useBlockConfig_1.useBlockConfig)();
    /*
        next-wp provides simple/sensible defaults for core block components, the block container,
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
            return block.isNested == false && block.config.container;
        },
        blocks: {
            'core/paragraph': {
                component: coreBlocks_1.Paragraph,
                container: true,
                containerClasses: 'py-2',
            },
            'core/heading': {
                component: coreBlocks_1.Heading,
                container: true,
                containerClasses: 'py-2',
            },
            'core/image': {
                component: coreBlocks_1.Image,
                container: true,
                containerClasses: 'py-2',
            },
            'core/embed': {
                component: coreBlocks_1.Embed,
                container: true,
                containerClasses: 'py-2',
            },
            'core/html': {
                component: Html_1.default,
                container: true,
                containerClasses: 'py-2',
            },
            'core/columns': {
                component: coreBlocks_1.Columns,
                container: false,
            },
            'core/group': {
                component: coreBlocks_1.Group,
                container: false,
            },
            'core/list': {
                component: coreBlocks_1.List,
                container: true,
            },
            'core/list-item': {
                component: coreBlocks_1.ListItem,
                container: false,
            },
            'core/buttons': {
                component: coreBlocks_1.Buttons,
                container: true,
            },
        }
    };
    // container = container ?? (typeof globalBlockSpecificContainer != "boolean" && ) ?? globalConfig.container ?? defaults.container
    // * Moved the following 2 lines below
    // container = container ?? globalConfig.container ?? defaults.container
    // containerCondition = containerCondition ?? globalConfig.containerCondition ?? defaults.containerCondition
    // A collection of Booleans that tell us whether a user-provided 'container' prop is a function at all the possible levels (helps us determine which container to use later)
    var componentCustomBlocksLevel = typeof ((_b = customBlocks[block.blockName]) === null || _b === void 0 ? void 0 : _b.container) == "function", componentLevel = typeof container == "function", globalCustomBlocksLevel = typeof ((_c = globalConfig === null || globalConfig === void 0 ? void 0 : globalConfig.customBlocks[block.blockName]) === null || _c === void 0 ? void 0 : _c.container) == "function", globalLevel = typeof (globalConfig === null || globalConfig === void 0 ? void 0 : globalConfig.container) == "function", defaultCustomBlocksLevel = typeof ((_d = defaults.blocks[block.blockName]) === null || _d === void 0 ? void 0 : _d.container) == "function";
    var blockConfig = (0, deepMerge_1.deepMerge)(// deeply merges the following configs to produce a final "master" config
    defaults.blocks, // lowest priority (defaults)
    globalConfig.customBlocks, // middle priority (global config)
    customBlocks // highest priority (<Block customBlocks={{...}} />)
    )[block.blockName]; // immediately after deep merging, we pick out the specific block we're currently rendering from the final config
    if (!blockConfig)
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
    var Component = blockConfig.component, configProps = blockConfig.props;
    container =
        componentCustomBlocksLevel ? customBlocks === null || customBlocks === void 0 ? void 0 : customBlocks[block.blockName].container : (componentLevel ? container : (globalCustomBlocksLevel ? (_e = globalConfig === null || globalConfig === void 0 ? void 0 : globalConfig.customBlocks[block.blockName]) === null || _e === void 0 ? void 0 : _e.container : (globalLevel ? globalConfig.container : (defaultCustomBlocksLevel ? (_f = defaults.blocks[block.blockName]) === null || _f === void 0 ? void 0 : _f.container : defaults.container)))); // lots of ways for devs to provide a custom container, each way takes a higher/lower precedent over the next way
    containerCondition = (_g = containerCondition !== null && containerCondition !== void 0 ? containerCondition : globalConfig.containerCondition) !== null && _g !== void 0 ? _g : defaults.containerCondition;
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
