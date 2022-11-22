"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFetchRestAPI = exports.fetchGraphAPI = exports.regenerateStaticPage = exports.deepMerge = exports.usePaths = exports.usePosts = exports.usePost = exports.usePreview = exports.usePage = exports.useBlockStyleBuilder = exports.useBlockConfig = exports.useGlobalConfig = exports.Block = exports.Blocks = exports.BlockConfigProvider = void 0;
// Context
// export { NextWP } from './context/blockConfig';
var blockConfig_1 = require("./context/blockConfig");
Object.defineProperty(exports, "BlockConfigProvider", { enumerable: true, get: function () { return blockConfig_1.default; } });
// Components
var Blocks_1 = require("./Blocks");
Object.defineProperty(exports, "Blocks", { enumerable: true, get: function () { return Blocks_1.default; } });
var Block_1 = require("./Block");
Object.defineProperty(exports, "Block", { enumerable: true, get: function () { return Block_1.default; } });
// Hooks
var useGlobalConfig_1 = require("./hooks/useGlobalConfig");
Object.defineProperty(exports, "useGlobalConfig", { enumerable: true, get: function () { return useGlobalConfig_1.useGlobalConfig; } });
var useBlockConfig_1 = require("./hooks/useBlockConfig");
Object.defineProperty(exports, "useBlockConfig", { enumerable: true, get: function () { return useBlockConfig_1.useBlockConfig; } });
var useBlockStyleBuilder_1 = require("./hooks/useBlockStyleBuilder");
Object.defineProperty(exports, "useBlockStyleBuilder", { enumerable: true, get: function () { return useBlockStyleBuilder_1.useBlockStyleBuilder; } });
var usePage_1 = require("./hooks/usePage");
Object.defineProperty(exports, "usePage", { enumerable: true, get: function () { return usePage_1.usePage; } });
var usePreview_1 = require("./hooks/usePreview");
Object.defineProperty(exports, "usePreview", { enumerable: true, get: function () { return usePreview_1.usePreview; } });
var usePost_1 = require("./hooks/usePost");
Object.defineProperty(exports, "usePost", { enumerable: true, get: function () { return usePost_1.usePost; } });
var usePosts_1 = require("./hooks/usePosts");
Object.defineProperty(exports, "usePosts", { enumerable: true, get: function () { return usePosts_1.usePosts; } });
var usePaths_1 = require("./hooks/usePaths");
Object.defineProperty(exports, "usePaths", { enumerable: true, get: function () { return usePaths_1.usePaths; } });
// Utils
var deepMerge_1 = require("./utils/deepMerge");
Object.defineProperty(exports, "deepMerge", { enumerable: true, get: function () { return deepMerge_1.deepMerge; } });
// API
var revalidate_1 = require("./api/revalidate");
Object.defineProperty(exports, "regenerateStaticPage", { enumerable: true, get: function () { return revalidate_1.default; } });
var apiUtils_1 = require("./api/apiUtils");
Object.defineProperty(exports, "fetchGraphAPI", { enumerable: true, get: function () { return apiUtils_1.fetchGraphAPI; } });
Object.defineProperty(exports, "useFetchRestAPI", { enumerable: true, get: function () { return apiUtils_1.useFetchRestAPI; } });
