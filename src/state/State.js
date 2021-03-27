export const ActionType = {
    LOADING: Symbol('loading'),
    ERROR: Symbol('error'),
    CANCEL: Symbol('cancel'),
    USER: Symbol('user'),
    PROVIDER: Symbol('provider'),
    SELECTED: Symbol('selected'),
    PAGE_CONTENT: Symbol('page_content'),
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
    loading: null,
    error: null,
    ready: false,
    provider: {
        name: "Github",
        user: {
            name: '',
            avatar: null,
            link: ''
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

