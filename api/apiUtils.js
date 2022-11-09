import { useServerBlockConfig } from "nextwp";

export async function fetchGraphAPI(query = '', { variables } = {}) {
    const config = await useServerBlockConfig()
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

export async function useFetchRestAPI(endpoint, embed = true) {
    if(!endpoint) throw new Error('You must pass in an endpoint to useFetchRestAPI')
    const config = await useServerBlockConfig()
    if(!config.wpUrl) throw new Error('wpUrl is missing from NextWP global config -- this is required to use useFetchRestAPI.')
    if(!config.wpJwt) throw new Error('wpJwt is missing from NextWP global config -- this is required to use useFetchRestAPI.')

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

    const json = await res.json();
    if (json.errors) {
        console.error(json.errors);
        throw new Error('Failed to fetch data from REST API: ', json.errors);
    }
    if (res.status !== 200) {
        console.error(res.status, res.statusText);
    }
    return json;
}