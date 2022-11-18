import { BlockContext } from '../context/blockContext'
import { useContext } from 'react';

export default function useBlockConfig() {
    const blockConfig = useContext(BlockContext)
    return blockConfig
}

export async function useServerBlockConfig() {
    const baseUrl = process.env.NODE_ENV === "development" ? process.env.NEXTWP_DEV_URL : process.env.NEXTWP_PROD_URL; // Dev must have these environment variables set in order for NextWP to work
    if(!baseUrl) throw new Error(`${process.env.NODE_ENV === "development" ? 'NEXTWP_DEV_URL' : 'NEXTWP_PROD_URL'} environment variable not set -- this is required for NextWP to work.`)
    const res = await fetch(`${baseUrl}/api/nextwp`)
    return res.json()
}