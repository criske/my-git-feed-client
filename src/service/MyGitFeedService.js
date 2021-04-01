//TODO: reactive the real base API
const BASE_API = 'https://my-git-feed.herokuapp.com';
//const BASE_API = 'http://localhost:8080';


const fakeServer = {
    '/check/ping': () => ({}),

    '/api/github/me': () => ({
        name: "criske",
        avatar: "https://avatars.githubusercontent.com/u/10284893?v=4",
        url: "https://github.com/criske",
        type: "User"
    }),
    '/api/gitlab/me': () => { throw new Error("Gitlab profile not found") },
    '/api/bitbucket/me': () => { throw new Error("Bitbucket profile not found") },

    '/api/github/assignments': () => ({ assignments: "These are Github assignments" }),
    '/api/gitlab/assignments': () => { throw new Error("Gitlab provider not found") },
    '/api/bitbucket/assignments': () => { throw new Error("Bitbucket provider not found") },


    '/api/github/commits': () => ({ assignments: "These are Github commits" }),
    '/api/gitlab/commits': () => { throw new Error("Gitlab provider not found") },
    '/api/bitbucket/commits': () => { throw new Error("Bitbucket provider not found") },

    '/api/github/repos': () => ({ assignments: "These are Github repos" }),
    '/api/gitlab/repos': () => { throw new Error("Gitlab provider not found") },
    '/api/bitbucket/repos': () => { throw new Error("Bitbucket provider not found") },
}


const jsonFetch = (path) => {
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
    let id;
    //const cancel = () => { clearTimeout(id) }
    // const request = new Promise((resolve, reject) => {
    //     id = setTimeout(() => {
    //         try {
    //             resolve(fakeServer[path.toLowerCase()]());
    //         } catch (error) {
    //             reject(error.message);
    //         }
    //     }, 5000);
    // });
    return { request, cancel };
}

export default {
    ping: () => jsonFetch('/check/ping'),
    user: (provider) => jsonFetch(`/api/${provider}/me`),
    assignments: (provider) => jsonFetch(`/api/${provider}/assignments`),
    commits: (provider) => jsonFetch(`/api/${provider}/commits`),
    repos: (provider) => jsonFetch(`/api/${provider}/repos`)
}