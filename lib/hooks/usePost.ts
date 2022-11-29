import { useFetchRestAPI } from "../api/apiUtils";

export async function usePost({ postType = 'posts', slug, id }) {
  let endpoint
  if (id) endpoint = `/${postType}/${id}`
  else endpoint = (slug && slug != '/') ? `/${postType}?slug=${slug}` : `/frontpage`

  let data = await useFetchRestAPI(endpoint);
  if (Array.isArray(data)) data = data[0]
  return { data }
}