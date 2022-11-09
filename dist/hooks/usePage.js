"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePage = usePage;
require("core-js/modules/es.promise.js");
var _usePost = require("./usePost");
async function usePage(_ref) {
  let {
    slug,
    id
  } = _ref;
  const page = (0, _usePost.usePost)({
    postType: 'pages',
    slug,
    id
  });
  return page;
}