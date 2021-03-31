export const ActionType = {
    LOADING: Symbol('loading'),
    FETCH: Symbol('fetch'),
    USER: Symbol('user'),
    SELECTED: Symbol('selected'),
    ASSIGNMENTS: Symbol('assignments'),
    COMMITS: Symbol('commits'),
    REPOS: Symbol('repos'),
    API_READY: Symbol('api_ready')
}

export const Providers = {
    github: 'github',
    gitlab: 'gitlab',
    bitbucket: 'bitbucket'
}

export const Pages = {
    home: 'home',
    assignments: 'assignments',
    commits : 'commits',
    repos: 'repos',
}

export const INITIAL_STATE = {
    fetch: {
        loading: false,
        call: {
            name: null,
            args: [],
            onSuccess: {
                name: null,
                args: []
            }
        }
    },
    ready: false,
    provider: {
        name: "Github",
        user: {
            name: '',
            avatar: null,
            link: '',
            provider: "Github"
        },
    },
    pages: {
        selected: Pages.home,
        home: {},
        assignments: {},
        commits: {},
        repos: {}
    }
}

