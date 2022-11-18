import { createContext } from "react";

export const BlockContext = createContext();

const BlockProvider = ({value, children}) => <BlockContext.Provider value={value}>{children}</BlockContext.Provider>
export default BlockProvider

export class NextWP {
    constructor(config = {}) {
        this.customBlocks = config.customBlocks
        this.wpUrl = config.wpUrl
        this.wpSecret = config.wpSecret
        this.wpJwt = config.wpJwt
        this.wpGraphQlBaseURL = config.wpGraphQlBaseURL
        this.wpAuthRefreshToken = config.wpAuthRefreshToken
    }
} 