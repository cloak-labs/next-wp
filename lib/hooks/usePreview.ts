import { useFetchRestAPI } from "./useFetchRestAPI";

export async function usePreview(previewParams, postType = 'pages') {
  const { id, parent, parentSlug } = previewParams.post
  const data = await useFetchRestAPI(`/${postType}/${parent}/revisions/${id}`);
  return {
    data,
    params: {
      id,
      parent,
      parentSlug
    }
  }
}