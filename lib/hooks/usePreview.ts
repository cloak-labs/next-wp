import { useFetchRestAPI } from "./useFetchRestAPI";

export async function usePreview(previewParams) {
  const { revisionId, postId, postTypeRestEndpoint, ...rest } = previewParams.post
  const data = await useFetchRestAPI(`/${postTypeRestEndpoint}/${postId}/revisions/${revisionId}`);
  return {
    data,
    params: {
      revisionId,
      postId,
      postTypeRestEndpoint,
      ...rest
    }
  }
}