"use strict";

require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Block", {
  enumerable: true,
  get: function get() {
    return _Block.default;
  }
});
Object.defineProperty(exports, "BlockProvider", {
  enumerable: true,
  get: function get() {
    return _blockContext.default;
  }
});
Object.defineProperty(exports, "Blocks", {
  enumerable: true,
  get: function get() {
    return _Blocks.default;
  }
});
Object.defineProperty(exports, "NextWP", {
  enumerable: true,
  get: function get() {
    return _blockContext.NextWP;
  }
});
Object.defineProperty(exports, "fetchGraphAPI", {
  enumerable: true,
  get: function get() {
    return _apiUtils.fetchGraphAPI;
  }
});
Object.defineProperty(exports, "regenerateStaticPage", {
  enumerable: true,
  get: function get() {
    return _revalidate.default;
  }
});
Object.defineProperty(exports, "useBlockConfig", {
  enumerable: true,
  get: function get() {
    return _useBlockConfig.default;
  }
});
Object.defineProperty(exports, "useBlockStyleBuilder", {
  enumerable: true,
  get: function get() {
    return _useBlockStyleBuilder.useBlockStyleBuilder;
  }
});
Object.defineProperty(exports, "useFetchRestAPI", {
  enumerable: true,
  get: function get() {
    return _apiUtils.useFetchRestAPI;
  }
});
Object.defineProperty(exports, "usePage", {
  enumerable: true,
  get: function get() {
    return _usePage.usePage;
  }
});
Object.defineProperty(exports, "usePaths", {
  enumerable: true,
  get: function get() {
    return _usePaths.usePaths;
  }
});
Object.defineProperty(exports, "usePost", {
  enumerable: true,
  get: function get() {
    return _usePost.usePost;
  }
});
Object.defineProperty(exports, "usePosts", {
  enumerable: true,
  get: function get() {
    return _usePosts.usePosts;
  }
});
Object.defineProperty(exports, "usePreview", {
  enumerable: true,
  get: function get() {
    return _usePreview.usePreview;
  }
});
Object.defineProperty(exports, "useServerBlockConfig", {
  enumerable: true,
  get: function get() {
    return _useBlockConfig.useServerBlockConfig;
  }
});
var _blockContext = _interopRequireWildcard(require("./context/blockContext"));
var _Blocks = _interopRequireDefault(require("./Blocks"));
var _Block = _interopRequireDefault(require("./Block"));
var _useBlockConfig = _interopRequireWildcard(require("./hooks/useBlockConfig"));
var _useBlockStyleBuilder = require("./hooks/useBlockStyleBuilder");
var _usePage = require("./hooks/usePage");
var _usePreview = require("./hooks/usePreview");
var _usePost = require("./hooks/usePost");
var _usePosts = require("./hooks/usePosts");
var _usePaths = require("./hooks/usePaths");
var _revalidate = _interopRequireDefault(require("./api/revalidate"));
var _apiUtils = require("./api/apiUtils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }