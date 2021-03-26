import { BASE_API } from "../state/State";

const jsonFetch = (path) => {
    const controller = new AbortController();
    const signal = controller.signal;
    const request = fetch(`${BASE_API}${path}`, {
        signal,
        headers: {
            'Access-Control-Allow-Origin': '*'
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