import { useGlobalConfig } from "../hooks/useGlobalConfig";

export async function fetchGraphAPI(query = '', { variables } = {}) {
    const config = await useGlobalConfig()
    if(!config.wpGraphQlBaseURL) throw new Error('wpGraphQlBaseURL is missing from NextWP global config -- this is required to use fetchGraphAPI.')
    // if(!config.wpAuthRefreshToken) throw 'wpAuthRefreshToken is missing from NextWP global config -- this is required to use fetchGraphAPI.'

    const headers = { 'Content-Type': 'application/json' };

    if (config.wpAuthRefreshToken) {
        headers['Authorization'] = `Bearer ${config.wpAuthRefreshToken}`;
    }

    // WPGraphQL Plugin must be enabled
    const res = await fetch(config.wpGraphQlBaseURL, {
        headers,
        method: 'POST',
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    const json = await res.json();
    // logger(json);
    if (json.errors) {
        console.error(json.errors);
        throw new Error('Failed to fetch data from GraphQL API: ', json.errors);
    }
    return json.data;
}

export async function useFetchRestAPI(endpoint, embed = true, modifyBaseSlugs = true) {
    if(!endpoint) throw new Error('You must pass in an endpoint to useFetchRestAPI')
    const config = await useGlobalConfig()
    console.log("config in useFetchRestAPI: ", config)
    // const config = blockConfig
    if(!config?.wpUrl) throw new Error('wpUrl is missing from NextWP global config -- this is required to use useFetchRestAPI.')
    if(!config?.wpJwt) throw new Error('wpJwt is missing from NextWP global config -- this is required to use useFetchRestAPI.')

    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.wpJwt}`,
    };

    let embedParam = ''
    if(embed){
        if(endpoint.includes('?')) embedParam = '&_embed='
        else embedParam = '?_embed='
    }

    let url = config.wpUrl
    if(url.slice(-1) != "/") url += '/' // add trailing slash if missing

    console.log('fetch endpoint: ', `${url}wp-json/wp/v2${endpoint}${embedParam}`)
    const res = await fetch(
        `${url}wp-json/wp/v2${endpoint}${embedParam}`,
        {
            headers,
            method: 'GET',
        }
    );

    let json = await res.json();

    const { cptBaseSlugs } = config
    if(modifyBaseSlugs && cptBaseSlugs){
        // the dev has provided baseSlugs to prepend to certain post type's slugs, which we do below:
        if(!Array.isArray(json)) json = [json]
        json.map(post => {
            // modify post object's slug:
            if(post && post.type && cptBaseSlugs[post.type]){
                post.slug = `${cptBaseSlugs[post.type]}${post.slug}`
            }

            // modify any post slugs for any posts in ACF relationship fields
            if(post.has_blocks && post.blocksData && post.blocksData.length){
                post.blocksData.map(block => {
                    if(block.attrs.hasRelationshipFields){
                        // let blockFieldValues = Object.values(block.attrs.data)
                        let blockFields = Object.entries(block.attrs.data)
                        blockFields = blockFields.map(([key, val]) => {
                            if(val && val.value && (val.type == 'relationship' || val.type == 'page_link' || val.type == 'post_object')){
                                val.value = val.value.map(relatedPost => {
                                    if(relatedPost && relatedPost.post_type && cptBaseSlugs[relatedPost.post_type]){
                                        relatedPost.slug = `${cptBaseSlugs[relatedPost.post_type]}${relatedPost.post_name}`
                                    }
                                    return relatedPost
                                })
                            }
                            return [key, val]
                        })
                        block.attrs.data = Object.fromEntries(blockFields);
                    }
                    return block
                })
            }

            return post
        })
    }

    if (json.errors) {
        console.error(json.errors);
        throw new Error('Failed to fetch data from REST API: ', json.errors);
    }
    if (res.status !== 200) {
        console.error(res.status, res.statusText);
    }
    return json;
}