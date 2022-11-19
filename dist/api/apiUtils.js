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
exports.useFetchRestAPI = exports.fetchGraphAPI = void 0;
var useBlockConfig_1 = require("../hooks/useBlockConfig");
function fetchGraphAPI(query, _a) {
    if (query === void 0) { query = ''; }
    var _b = _a === void 0 ? {} : _a, variables = _b.variables;
    return __awaiter(this, void 0, void 0, function () {
        var config, headers, res, json;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, (0, useBlockConfig_1.useBlockConfig)()];
                case 1:
                    config = _c.sent();
                    if (!config.wpGraphQlBaseURL)
                        throw new Error('wpGraphQlBaseURL is missing from NextWP global config -- this is required to use fetchGraphAPI.');
                    headers = { 'Content-Type': 'application/json' };
                    if (config.wpAuthRefreshToken) {
                        headers['Authorization'] = "Bearer ".concat(config.wpAuthRefreshToken);
                    }
                    return [4 /*yield*/, fetch(config.wpGraphQlBaseURL, {
                            headers: headers,
                            method: 'POST',
                            body: JSON.stringify({
                                query: query,
                                variables: variables,
                            }),
                        })];
                case 2:
                    res = _c.sent();
                    return [4 /*yield*/, res.json()];
                case 3:
                    json = _c.sent();
                    // logger(json);
                    if (json.errors) {
                        console.error(json.errors);
                        throw new Error('Failed to fetch data from GraphQL API: ', json.errors);
                    }
                    return [2 /*return*/, json.data];
            }
        });
    });
}
exports.fetchGraphAPI = fetchGraphAPI;
function useFetchRestAPI(endpoint, embed, modifyBaseSlugs) {
    if (embed === void 0) { embed = true; }
    if (modifyBaseSlugs === void 0) { modifyBaseSlugs = true; }
    return __awaiter(this, void 0, void 0, function () {
        var config, headers, embedParam, url, res, json, cptBaseSlugs;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!endpoint)
                        throw new Error('You must pass in an endpoint to useFetchRestAPI');
                    return [4 /*yield*/, (0, useBlockConfig_1.useBlockConfig)()
                        // const config = blockConfig
                    ];
                case 1:
                    config = _a.sent();
                    // const config = blockConfig
                    if (!(config === null || config === void 0 ? void 0 : config.wpUrl))
                        throw new Error('wpUrl is missing from NextWP global config -- this is required to use useFetchRestAPI.');
                    if (!(config === null || config === void 0 ? void 0 : config.wpJwt))
                        throw new Error('wpJwt is missing from NextWP global config -- this is required to use useFetchRestAPI.');
                    headers = {
                        'Content-Type': 'application/json',
                        Authorization: "Bearer ".concat(config.wpJwt),
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
                    console.log('fetch endpoint: ', "".concat(url, "wp-json/wp/v2").concat(endpoint).concat(embedParam));
                    return [4 /*yield*/, fetch("".concat(url, "wp-json/wp/v2").concat(endpoint).concat(embedParam), {
                            headers: headers,
                            method: 'GET',
                        })];
                case 2:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 3:
                    json = _a.sent();
                    cptBaseSlugs = config.cptBaseSlugs;
                    if (modifyBaseSlugs && cptBaseSlugs) {
                        // the dev has provided baseSlugs to prepend to certain post type's slugs, which we do below:
                        if (!Array.isArray(json))
                            json = [json];
                        json.map(function (post) {
                            // modify post object's slug:
                            if (post && post.type && cptBaseSlugs[post.type]) {
                                post.slug = "".concat(cptBaseSlugs[post.type]).concat(post.slug);
                            }
                            // modify any post slugs for any posts in ACF relationship fields
                            if (post.has_blocks && post.blocksData && post.blocksData.length) {
                                post.blocksData.map(function (block) {
                                    if (block.attrs.hasRelationshipFields) {
                                        // let blockFieldValues = Object.values(block.attrs.data)
                                        var blockFields = Object.entries(block.attrs.data);
                                        blockFields = blockFields.map(function (_a) {
                                            var key = _a[0], val = _a[1];
                                            if (val && val.value && (val.type == 'relationship' || val.type == 'page_link' || val.type == 'post_object')) {
                                                val.value = val.value.map(function (relatedPost) {
                                                    if (relatedPost && relatedPost.post_type && cptBaseSlugs[relatedPost.post_type]) {
                                                        relatedPost.slug = "".concat(cptBaseSlugs[relatedPost.post_type]).concat(relatedPost.post_name);
                                                    }
                                                    return relatedPost;
                                                });
                                            }
                                            return [key, val];
                                        });
                                        block.attrs.data = Object.fromEntries(blockFields);
                                    }
                                    return block;
                                });
                            }
                            return post;
                        });
                    }
                    if (json.errors) {
                        console.error(json.errors);
                        throw new Error('Failed to fetch data from REST API: ', json.errors);
                    }
                    if (res.status !== 200) {
                        console.error(res.status, res.statusText);
                    }
                    return [2 /*return*/, json];
            }
        });
    });
}
exports.useFetchRestAPI = useFetchRestAPI;
