//TODO: reactive the real base API
//const BASE_API = 'https://my-git-feed.herokuapp.com';
const BASE_API = 'http://localhost:8080';


const jsonFetch = (path) => {
    // const controller = new AbortController();
    // const signal = controller.signal;
    // const request = fetch(`${BASE_API}${path}`, {
    //     signal,
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }).then(r => {
    //    return r.json()
    // }).catch((e) => { 
    //   return Promise.reject(e.message)
    // });
    // const cancel = () => {
    //     try {
    //         controller.abort();
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }
    let id; 
    const cancel = () => { clearTimeout(id) }
    const request = new Promise((resolve, reject) =>{
        id = setTimeout(() => reject("Failed to fetch"), 7000);
    });
    return { request, cancel };
}

export default {
    ping: () => jsonFetch('/check/ping'),
    user: (provider) => jsonFetch(`/api/${provider}/me`)
}