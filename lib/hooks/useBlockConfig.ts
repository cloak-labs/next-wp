// import { blockConfig } from '../../../next-wp.config';
const path = require('path')
const blockConfig = require(path.join(process.cwd(), 'postcss.config.js'))

export function useBlockConfig() {
    
    console.log('blockConfig :', blockConfig)
    if(!blockConfig) throw Error("You're missing a blockConfig object in your root-level next-wp.config.js file.")
    return blockConfig
}