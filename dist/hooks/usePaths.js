"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePaths = usePaths;
require("core-js/modules/es.promise.js");
var _apiUtils = require("../api/apiUtils");
var _usePosts = require("./usePosts");
async function usePaths() {
  let postType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pages';
  let prependSlug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // const { postType = 'pages', prependSlug = false } = props || {}
  let home;
  if (postType == 'pages') home = await (0, _apiUtils.useFetchRestAPI)('/frontpage');
  const posts = await (0, _usePosts.usePosts)(postType);
  const prepend = prependSlug ? typeof prependSlug == "boolean" ? "/".concat(postType) : "/".concat(prependSlug) // you can either set prependSlug to true/false or a custom string -- if true, we'll use the postType string as the prepend string
  : '';
  return (posts === null || posts === void 0 ? void 0 : posts.map(post => {
    var _home;
    const slug = postType == 'pages' && post.slug == ((_home = home) === null || _home === void 0 ? void 0 : _home.slug) ? '' : post.slug;
    return "".concat(prepend, "/").concat(slug);
  })) || [];
}