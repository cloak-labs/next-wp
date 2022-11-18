import { useFetchRestAPI } from "../api/apiUtils";

export async function usePreview(previewParams) {
    const { id, parent, parentSlug } = previewParams.post
    const data = await useFetchRestAPI(`/pages/${parent}/revisions/${id}`);
    return {
        data,
        params: {
            id,
            parent,
            parentSlug
        }
    }
}