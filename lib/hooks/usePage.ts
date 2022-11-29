import { usePost } from "./usePost";

export async function usePage({slug, id, mainQuery = false}) {
    const page = usePost({postType: 'pages', slug, id, mainQuery})
    return page
}