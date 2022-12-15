import { useFetchRestAPI } from "./useFetchRestAPI";

export async function usePreview(previewParams) {
  const { revisionId = null, postId, postTypeRestEndpoint, ...rest } = previewParams.post

  let data
  if(revisionId){
    data = await useFetchRestAPI(`/${postTypeRestEndpoint}/${postId}/revisions/${revisionId}`);
  }else{
    data = await useFetchRestAPI(`/${postTypeRestEndpoint}/${postId}`);
  }

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