"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePost = usePost;
require("core-js/modules/es.promise.js");
var _apiUtils = require("../api/apiUtils");
async function usePost(_ref) {
  let {
    postType = 'posts',
    slug,
    id
  } = _ref;
  let endpoint;
  if (id) endpoint = "/".concat(postType, "/").concat(id);else endpoint = slug && slug != '/' ? "/".concat(postType, "?slug=").concat(slug) : '/frontpage';
  let data = await (0, _apiUtils.useFetchRestAPI)(endpoint);
  if (Array.isArray(data)) data = data[0];
  return {
    data
  };
}