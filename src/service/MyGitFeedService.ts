import { Provider } from "../state/State";

export interface FetchResult {
    request: Promise<Object>;
    cancel: CancelHandler;
}

export type CancelHandler = () => void;

export type FetchRequest = (path: String) => FetchResult
export type ProviderFetchRequest = (provider: Provider, page?: number) => FetchResult

export type FetchTypes = 'ping' | 'user' | 'assignments' | 'commits' | 'repos'

export type FetchService = { [key: string]: ProviderFetchRequest | (() => FetchResult) }


//TODO: reactive the real base API
const BASE_API = 'https://my-git-feed.herokuapp.com';
//const BASE_API = 'http://localhost:8080';

const fakeServer: { [key: string]: () => Object } = {
    '/check/ping': () => ({}),

    '/api/github/me': () => ({
        name: "criske",
        avatar: "https://avatars.githubusercontent.com/u/10284893?v=4",
        url: "https://github.com/criske",
        type: "User",
        provider: "Github"
    }),
    '/api/gitlab/me': () => { throw new Error("Gitlab profile not found") },
    '/api/bitbucket/me': () => { throw new Error("Bitbucket profile not found") },

    '/api/github/assignments': () => ({ assignments: "These are Github assignments" }),
    '/api/gitlab/assignments': () => { throw new Error("Gitlab provider not found") },
    '/api/bitbucket/assignments': () => { throw new Error("Bitbucket provider not found") },


    '/api/github/commits': () => ({ commits: "These are Github commits" }),
    '/api/gitlab/commits': () => { throw new Error("Gitlab provider not found") },
    '/api/bitbucket/commits': () => { throw new Error("Bitbucket provider not found") },

    '/api/github/repos': () => ({ repos: "These are Github repos" }),
    '/api/gitlab/repos': () => { throw new Error("Gitlab provider not found") },
    '/api/bitbucket/repos': () => { throw new Error("Bitbucket provider not found") },
}


const jsonFetch: (path: String) => FetchResult = (path) => {
    const controller = new AbortController();
    const signal = controller.signal;
    const request = fetch(`${BASE_API}${path}`, {
        signal,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(r => {
        if (!r.ok) {
            return r.json().then((e) => {
                return Promise.reject({ message: e.error });
            });
        } else {
            return r.json()
        }

    })
        .catch((e) => {
            return Promise.reject(e.message)
        });
    const cancel = () => {
        try {
            controller.abort();
        } catch (e) {
            console.error(e);
        }
    }
    // let id: any;
    // const cancel = () => { clearTimeout(id) }
    // const request = new Promise<object>((resolve, reject) => {
    //     id = setTimeout(() => {
    //         try {
    //             const response: object = fakeServer[path.toLowerCase()]();
    //             resolve(response);
    //         } catch (error) {
    //             reject(error.message);
    //         }
    //     }, 1000);
    // });
    return { request, cancel };
}


const service: FetchService = {
    ping: () => jsonFetch('/check/ping'),
    user: (provider: Provider) => jsonFetch(`/api/${provider}/me`),
    assignments: (provider: Provider, page?: number, state?: string) => jsonFetch(`/api/${provider}/assignments?page=${page || 1}&state=${state || 'all'}`),
    commits: (provider: Provider, page?: number) => jsonFetch(`/api/${provider}/commits?page=${page || 1}`),
    repos: (provider: Provider, page?: number) => jsonFetch(`/api/${provider}/repos?page=${page || 1}`)
}
export default service