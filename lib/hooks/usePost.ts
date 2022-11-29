import { useFetchRestAPI } from "../api/apiUtils";

export async function usePost({
  postType = "posts",
  slug,
  id,
  mainQuery = false,
}) {
  let endpoint;
  if (id) endpoint = `/${postType}/${id}${mainQuery && "?mainQuery=true"}`;
  else
    endpoint =
      slug && slug != "/"
        ? `/${postType}?slug=${slug}${mainQuery && "&mainQuery=true"}`
        : `/frontpage${mainQuery && "?mainQuery=true"}`;
  console.log(endpoint);
  let data = await useFetchRestAPI(endpoint);
  if (Array.isArray(data)) data = data[0];
  return { data };
}
