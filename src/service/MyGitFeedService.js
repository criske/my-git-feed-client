//TODO: reactive the real base API
const BASE_API = 'https://my-git-feed.herokuapp.com';
//const BASE_API = 'http://localhost:8080';


const jsonFetch = (path) => {
    const controller = new AbortController();
    const signal = controller.signal;
    const request = fetch(`${BASE_API}${path}`, {
        signal,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(r => r.json());
    const abort = () => {
        try {
            controller.abort();
        } catch (e) {
            console.error(e);
        }
    }
    return { request, abort };
}

export default {
    ping: () => jsonFetch('/check/ping'),
    user: (provider) => jsonFetch(`/api/${provider}/me`)
}