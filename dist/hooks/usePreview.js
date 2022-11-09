"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePreview = usePreview;
require("core-js/modules/es.promise.js");
var _apiUtils = require("../api/apiUtils");
async function usePreview(previewParams) {
  const {
    id,
    parent,
    parentSlug
  } = previewParams.post;
  const data = await (0, _apiUtils.useFetchRestAPI)("/pages/".concat(parent, "/revisions/").concat(id));
  return {
    data,
    params: {
      id,
      parent,
      parentSlug
    }
  };
}