import { useFetchRestAPI } from "./useFetchRestAPI";

export async function usePosts(postType = 'posts') {
    // WordPress limits us to retrieve at most 100 pages/posts at a time, so the following loop logic retrieves all posts/pages using multiple requests if needed.
    const postsPerCall = 100
    let numCalls = 0
    let allPosts = []
    while(allPosts.length == (postsPerCall * numCalls)){ // this loop will finish once a fetch returns less posts than the postsPerCall value
        let posts = await useFetchRestAPI(`/${postType}?per_page=${postsPerCall}`);
        if(posts && posts.length) allPosts.push(...posts)
        else break
        numCalls++
    }

    return allPosts;
}