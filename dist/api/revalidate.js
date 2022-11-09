"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = regenerateStaticPage;
require("core-js/modules/es.promise.js");
var _useBlockConfig = _interopRequireDefault(require("nextwp/hooks/useBlockConfig"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function regenerateStaticPage(req, res) {
  const config = (0, _useBlockConfig.default)();
  const {
    slug,
    secret
  } = req.query;
  try {
    if (secret !== config.wpSecret) {
      throw 'Page Revalidation - Invalid preview secret';
    }
    await res.revalidate("/".concat(slug)).catch(err => {
      throw "Page Revalidation - Can't revalidate slug '/".concat(slug, "'");
    });
    return res.json({
      page: "/".concat(slug),
      revalidated: true
    });
  } catch (error) {
    console.error(new Error(error));
    return res.status(500).send({
      error: error,
      slug: "/".concat(slug)
    });
  }
}