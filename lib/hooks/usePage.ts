import { usePost } from "./usePost";

export async function usePage({ slug, id }) {
  const page = usePost({ postType: "pages", slug, id });
  return page;
}
