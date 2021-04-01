export enum ActionType {
    LOADING = 'loading',
    FETCH = 'fetch',
    USER = 'user',
    SELECTED = 'selected',
    ASSIGNMENTS = 'assignments',
    COMMITS = 'commits',
    REPOS = 'repos',
    READY = 'ready',
    NONE = ""
}

export interface Action {
    type: ActionType;
    payload?: any ;
}


export interface FetchState {
    readonly loading: boolean;
    readonly call: FetchCallState;
}

export interface FetchCallState {
    readonly name?: string | null;
    args: ReadonlyArray<string>;
    readonly stateActionType: ActionType;
}

export interface ProviderState {
    readonly name: Provider;
    readonly user: {
        name: string;
        avatar: string | null;
        link: string,
        provider: Provider
    }
}

export interface PagesState {
    readonly selected: Pages;
    readonly home: Object;
    readonly assignments: Object;
    readonly commits: Object;
    readonly repos: Object
}

export interface State {
    readonly ready: boolean;
    readonly fetch: FetchState;
    readonly provider: ProviderState;
    readonly pages: PagesState;
}

export type Provider = 'Github' | 'Gitlab' | 'Bitbucket' | 'github' | 'gitlab' | 'bitbucket';

export enum Pages {
    home,
    assignments,
    commits,
    repos,
}

export const INITIAL_STATE: State = {
    fetch: {
        loading: false,
        call: {
            name: null,
            args: [],
            stateActionType: ActionType.NONE  
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
