"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePosts = usePosts;
require("core-js/modules/es.promise.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _apiUtils = require("../api/apiUtils");
async function usePosts() {
  let postType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'posts';
  // WordPress limits us to retrieve at most 100 pages/posts at a time, so the following loop logic retrieves all posts/pages using multiple requests if needed.
  const postsPerCall = 100;
  let numCalls = 0;
  let allPosts = [];
  while (allPosts.length == postsPerCall * numCalls) {
    // this loop will finish once a fetch returns less posts than the postsPerCall value
    let posts = await (0, _apiUtils.useFetchRestAPI)("/".concat(postType, "?per_page=").concat(postsPerCall));
    if (posts && posts.length) allPosts.push(...posts);else break;
    numCalls++;
  }
  return allPosts;
}