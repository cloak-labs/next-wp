"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useBlockConfig;
exports.useServerBlockConfig = useServerBlockConfig;
require("core-js/modules/es.promise.js");
var _blockContext = require("../context/blockContext");
var _react = require("react");
function useBlockConfig() {
  const blockConfig = (0, _react.useContext)(_blockContext.BlockContext);
  return blockConfig;
}
async function useServerBlockConfig() {
  const baseUrl = process.env.NODE_ENV === "development" ? process.env.NEXTWP_DEV_URL : process.env.NEXTWP_PROD_URL; // Dev must have these environment variables set in order for NextWP to work
  if (!baseUrl) throw new Error("".concat(process.env.NODE_ENV === "development" ? 'NEXTWP_DEV_URL' : 'NEXTWP_PROD_URL', " environment variable not set -- this is required for NextWP to work."));
  const res = await fetch("".concat(baseUrl, "/api/nextwp"));
  return res.json();
}