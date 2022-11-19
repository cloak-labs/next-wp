"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBlockConfig = void 0;
// import { blockConfig } from '../../../next-wp.config';
var path = require('path');
var process = require('process');
var blockConfig = require(path.join(process.cwd(), 'postcss.config.js'));
function useBlockConfig() {
    console.log('blockConfig :', blockConfig);
    if (!blockConfig)
        throw Error("You're missing a blockConfig object in your root-level next-wp.config.js file.");
    return blockConfig;
}
exports.useBlockConfig = useBlockConfig;
