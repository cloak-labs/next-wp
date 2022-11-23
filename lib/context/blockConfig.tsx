import { createContext } from "react";

export const BlockConfigContext = createContext();

const BlockConfigProvider = ({value, children}) => <BlockConfigContext.Provider value={value}>{children}</BlockConfigContext.Provider>

export default BlockConfigProvider


// Not sure this NextWP is needed.. might help ensure it's structured a certain way, or maybe Typescript will solve that.. for now we just allow the config to be any JS object
// export class NextWP {
//     constructor(config = {}) {
//         this.blockConfig = config.blockConfig
//         this.wpUrl = config.wpUrl
//         this.wpSecret = config.wpSecret
//         this.wpJwt = config.wpJwt
//         this.wpGraphQlBaseURL = config.wpGraphQlBaseURL
//         this.wpAuthRefreshToken = config.wpAuthRefreshToken
//         this.postBaseSlugs = config.postBaseSlugs
//     }
// } 