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
var classNames_1 = require("./utils/classNames");
var deepMerge_1 = require("./utils/deepMerge");
var useBlockConfig_1 = require("./hooks/useBlockConfig");
function Block(_a) {
    var _b, _c, _d, _e, _f, _g;
    var block = _a.block, 
    // blockConfig, at some point in future, allow this prop to override the blockConfig on a per-block basis by conditionally wrapping the rendered block with another <BlockConfigProvider />
    _h = _a.isNested, 
    // blockConfig, at some point in future, allow this prop to override the blockConfig on a per-block basis by conditionally wrapping the rendered block with another <BlockConfigProvider />
    isNested = _h === void 0 ? false : _h, parentBlock = _a.parentBlock, _j = _a.containerClasses, containerClasses = _j === void 0 ? '' : _j, container = _a.container, // dev has the ability to override the default container function below: we pass all props to it so devs can do all kinds of custom/conditional rendering
    containerCondition = _a.containerCondition, // dev has the ability to override the default condition that determines whether to wrap a block with a container
    props = __rest(_a, ["block", "isNested", "parentBlock", "containerClasses", "container", "containerCondition"]);
    var blockConfig = (0, useBlockConfig_1.useBlockConfig)();
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
                // container: ({block}) => (<Container className={classNames("max-w-2xl", block.config.containerClasses)}>{block.rendered}</Container>),
                containerClasses: 'py-2',
            },
            'core/embed': {
                component: coreBlocks_1.Embed,
                container: true,
                containerClasses: 'py-2',
            },
            'core/html': {
                component: coreBlocks_1.Html,
                container: true,
                containerClasses: 'py-2',
            },
            'core/columns': {
                component: coreBlocks_1.Columns,
                container: false,
            },
            'core/column': {
                component: coreBlocks_1.Column,
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
                containerClasses: 'py-2'
            },
            'core/button': {
                component: coreBlocks_1.Button,
                container: true,
            },
        }
    };
    // A collection of Booleans that tell us whether a user-provided 'container' prop is a function at all the possible levels (helps us determine which container to use later)
    var blockConfigComponentLevel = typeof ((_b = blockConfig[block.blockName]) === null || _b === void 0 ? void 0 : _b.container) == "function", componentContainerPropLevel = typeof container == "function", 
    // globalCustomBlocksLevel = typeof globalConfig?.blockConfig[block.blockName]?.container == "function",
    blockConfigGlobalLevel = typeof (blockConfig === null || blockConfig === void 0 ? void 0 : blockConfig.container) == "function", defaultComponentLevel = typeof ((_c = defaults.blocks[block.blockName]) === null || _c === void 0 ? void 0 : _c.container) == "function";
    var finalConfig = (0, deepMerge_1.deepMerge)(__assign({}, defaults.blocks), __assign({}, blockConfig))[block.blockName]; // immediately after deep merging, we pick out the specific block we're currently rendering from the final config
    if (!finalConfig) {
        console.error("Failed to render Block (".concat(block.blockName, ") due to missing config object for this particular block. You probably didn't provide a 'blockConfig' prop to your <Blocks /> component, or failed to include a sub-object for '").concat(block.blockName, "'."));
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
    }
    var Component = finalConfig.component, _k = finalConfig.props, configProps = _k === void 0 ? {} : _k;
    container =
        blockConfigComponentLevel ? (_d = blockConfig[block.blockName]) === null || _d === void 0 ? void 0 : _d.container : (componentContainerPropLevel ? container : (
        // globalCustomBlocksLevel ? blockConfig?.blockConfig[block.blockName]?.container : (
        blockConfigGlobalLevel ? blockConfig === null || blockConfig === void 0 ? void 0 : blockConfig.container : (defaultComponentLevel ? (_e = defaults.blocks[block.blockName]) === null || _e === void 0 ? void 0 : _e.container : defaults.container)
        // )
        )); // lots of ways for devs to provide a custom container, each way takes a higher/lower precedent over the next way
    containerCondition = (_g = (_f = containerCondition !== null && containerCondition !== void 0 ? containerCondition : finalConfig.containerCondition) !== null && _f !== void 0 ? _f : blockConfig.containerCondition) !== null && _g !== void 0 ? _g : defaults.containerCondition;
    var finalProps = (0, deepMerge_1.deepMerge)(// merge custom props provided to Block component with custom props provided by default/block config
    configProps, props);
    if (!Component) {
        console.error("Failed to render Block (".concat(block.blockName, ") due to a missing component. You probably didn't provide this block with a 'component' prop in your 'blockConfig'."));
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
    }
    var blockObj = {
        isNested: isNested,
        data: block,
        parent: parentBlock,
        config: finalConfig
    };
    return ((0, jsx_runtime_1.jsx)(ConditionalWrapper_1.default, __assign({ condition: function () { return containerCondition({ block: blockObj, finalProps: finalProps }); }, wrapper: function (children) { return container({ block: __assign(__assign({}, blockObj), { rendered: children }), finalProps: finalProps }); } }, { children: (0, jsx_runtime_1.jsx)(Component, __assign({ block: blockObj }, finalProps)) })));
}
exports.default = Block;
