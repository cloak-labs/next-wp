"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBlockConfig = void 0;
// import blockConfig from '../../../../next-wp.config.js';
// import blockConfig from 'C:/Users/Kaelan Smith/Documents/Stikky Media/Lionheart Coaching/website-2/tailwindui-pocket/next-wp.config.js'
var blockConfig = require('C:/Users/Kaelan Smith/Documents/Stikky Media/Lionheart Coaching/website-2/tailwindui-pocket/next-wp.config.js');
// const path = require('path')
// const blockConfig = require(path.join(process.cwd(), 'tailwind.config.js'))
function useBlockConfig() {
    // const path = require('path') !
    // const blockConfig = require(path.join(process.cwd(), 'next-wp.config.js'))
    console.log('blockConfig! :', blockConfig);
    if (!blockConfig)
        throw Error("You're missing a blockConfig object in your root-level next-wp.config.js file.");
    return blockConfig;
}
exports.useBlockConfig = useBlockConfig;
