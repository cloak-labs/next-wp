"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFetchRestAPI = void 0;
var useGlobalConfig_1 = require("../hooks/useGlobalConfig");
var useSlugModifier_1 = require("../hooks/useSlugModifier");
function useFetchRestAPI(endpoint, // api URL endpoint that comes after `wp-json/wp/v2` (include first slash)
embed, // the embed param tells WordPress to return expanded data for certain things such as a page/post's full taxonomy data
modifyBaseSlugs, // when true, our custom hook, useSlugModifier, is used to prepend the page/post slugs returned from WP according to the package user's config
convertToRelativeURLs // when true, we search/replace all WordPress admin URLs found in data returned from WP with an empty string, except /wp-content URLs. This ensures internal linking always works (including across environments)
) {
    var _a;
    if (embed === void 0) { embed = true; }
    if (modifyBaseSlugs === void 0) { modifyBaseSlugs = true; }
    if (convertToRelativeURLs === void 0) { convertToRelativeURLs = true; }
    return __awaiter(this, void 0, void 0, function () {
        var config, headers, embedParam, url, res, posts, postsString, hasTrailingSlash, url_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!endpoint)
                        throw new Error('You must pass in an endpoint to useFetchRestAPI');
                    return [4 /*yield*/, (0, useGlobalConfig_1.useGlobalConfig)()];
                case 1:
                    config = _b.sent();
                    if (!(config === null || config === void 0 ? void 0 : config.wpUrl))
                        throw new Error('wpUrl is missing from NextWP global config -- this is required to use useFetchRestAPI.');
                    // JWT is required for fetching post revisions (for preview feature), and for fetching draft posts (so logged in users can preview drafts)
                    if (!(config === null || config === void 0 ? void 0 : config.wpJwt))
                        throw new Error('wpJwt is missing from NextWP global config -- this is required to use useFetchRestAPI.');
                    headers = {
                        'Content-Type': 'application/json',
                        Authorization: "Bearer ".concat(config.wpJwt), // including our JWT in all requests just ensures we can fetch data from any protected routes (such as post revisions for our preview feature)
                    };
                    embedParam = '';
                    if (embed) {
                        if (endpoint.includes('?'))
                            embedParam = '&_embed=';
                        else
                            embedParam = '?_embed=';
                    }
                    url = config.wpUrl;
                    if (url.slice(-1) != "/")
                        url += '/'; // add trailing slash if missing
                    console.log("fetch from: ".concat(url, "wp-json/wp/v2").concat(endpoint).concat(embedParam));
                    return [4 /*yield*/, fetch("".concat(url, "wp-json/wp/v2").concat(endpoint).concat(embedParam), {
                            headers: headers,
                            method: 'GET',
                        })];
                case 2:
                    res = _b.sent();
                    return [4 /*yield*/, res.json()];
                case 3:
                    posts = _b.sent();
                    if (posts.errors) {
                        console.error(posts.errors);
                        throw new Error('Failed to fetch data from REST API: ', posts.errors);
                    }
                    if (res.status !== 200) {
                        console.error(res.status, res.statusText);
                    }
                    if (!modifyBaseSlugs) return [3 /*break*/, 5];
                    return [4 /*yield*/, (0, useSlugModifier_1.useSlugModifier)(posts)]; // adjust post slugs if necessary
                case 4:
                    posts = _b.sent(); // adjust post slugs if necessary
                    _b.label = 5;
                case 5:
                    if (posts && convertToRelativeURLs) { // remove all references to WP URL in data
                        postsString = JSON.stringify(posts);
                        hasTrailingSlash = config.wpUrl.slice(-1) == '/';
                        url_1 = hasTrailingSlash ? config.wpUrl.slice(0, -1) : config.wpUrl;
                        postsString = (_a = postsString === null || postsString === void 0 ? void 0 : postsString.replaceAll(url_1, '')) === null || _a === void 0 ? void 0 : _a.replaceAll('/wp-content', "".concat(url_1, "/wp-content")); // removes all references to WordPress URL but then adds them back for any URLs referencing content under /wp-content folder, where the WP URL reference is required
                        posts = JSON.parse(postsString);
                    }
                    return [2 /*return*/, posts];
            }
        });
    });
}
exports.useFetchRestAPI = useFetchRestAPI;
