"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchGraphAPI = fetchGraphAPI;
exports.useFetchRestAPI = useFetchRestAPI;
require("core-js/modules/es.promise.js");
require("core-js/modules/es.json.stringify.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
var _useBlockConfig = require("../hooks/useBlockConfig");
async function fetchGraphAPI() {
  let query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  let {
    variables
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const config = await (0, _useBlockConfig.useServerBlockConfig)();
  if (!config.wpGraphQlBaseURL) throw new Error('wpGraphQlBaseURL is missing from NextWP global config -- this is required to use fetchGraphAPI.');
  // if(!config.wpAuthRefreshToken) throw 'wpAuthRefreshToken is missing from NextWP global config -- this is required to use fetchGraphAPI.'

  const headers = {
    'Content-Type': 'application/json'
  };
  if (config.wpAuthRefreshToken) {
    headers['Authorization'] = "Bearer ".concat(config.wpAuthRefreshToken);
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(config.wpGraphQlBaseURL, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables
    })
  });
  const json = await res.json();
  // logger(json);
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch data from GraphQL API: ', json.errors);
  }
  return json.data;
}
async function useFetchRestAPI(endpoint) {
  let embed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (!endpoint) throw new Error('You must pass in an endpoint to useFetchRestAPI');
  const config = await (0, _useBlockConfig.useServerBlockConfig)();
  if (!config.wpUrl) throw new Error('wpUrl is missing from NextWP global config -- this is required to use useFetchRestAPI.');
  if (!config.wpJwt) throw new Error('wpJwt is missing from NextWP global config -- this is required to use useFetchRestAPI.');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: "Bearer ".concat(config.wpJwt)
  };
  let embedParam = '';
  if (embed) {
    if (endpoint.includes('?')) embedParam = '&_embed=';else embedParam = '?_embed=';
  }
  let url = config.wpUrl;
  if (url.slice(-1) != "/") url += '/'; // add trailing slash if missing

  console.log('fetch endpoint: ', "".concat(url, "wp-json/wp/v2").concat(endpoint).concat(embedParam));
  const res = await fetch("".concat(url, "wp-json/wp/v2").concat(endpoint).concat(embedParam), {
    headers,
    method: 'GET'
  });
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch data from REST API: ', json.errors);
  }
  if (res.status !== 200) {
    console.error(res.status, res.statusText);
  }
  return json;
}