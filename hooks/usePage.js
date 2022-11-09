import { useFetchRestAPI } from "nextwp";
import { usePost } from "./usePost";

export async function usePage({slug, id}) {
    const page = usePost({postType: 'pages', slug, id})
    return page
    // let endpoint
    // if(id) endpoint = `/pages/${id}`
    // else endpoint = (slug && slug != '/') ? `/pages?slug=${slug}` : '/frontpage'
    
    // let data = await useFetchRestAPI(endpoint);
    // if(Array.isArray(data)) data = data[0]
    // return { data }
}