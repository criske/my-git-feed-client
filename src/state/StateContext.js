import { createContext, useReducer } from 'react';
import { ActionType, INITIAL_STATE } from './State';

export const StateContext = createContext(INITIAL_STATE);

export const StateProvider = ({ children }) => {

    const stateReducer = (state, action) => {
        switch (action.type) {
            case ActionType.API_READY: {
                return { ...state, ready: true }
            }
            case ActionType.LOADING: {
                return { ...state, fetch: { ...state.fetch, loading: action.payload } }
            }
            case ActionType.FETCH: {
                return { ...state, fetch: { ...state.fetch, call: action.payload } }
            }
            case ActionType.USER: {
                return {
                    ...state,
                    provider: {
                        name: action.payload.provider,
                        user: action.payload
                    }
                }
            }
            case ActionType.SELECTED: {
                return { ...state, page: { ...state.page, name: action.payload } }
            }
            case ActionType.ASSIGNMENTS: {
                const copy = { ...state };
                copy.pages.selected = "assignments";
                copy.pages.assignments = action.payload;
                return copy;
            }
            case ActionType.COMMITS: {
                const copy = { ...state };
                copy.pages.selected = "commits";
                copy.pages.commits = action.payload;
                return copy;
            }
            case ActionType.REPOS: {
                const copy = { ...state };
                copy.pages.selected = "repos";
                copy.pages.repos = action.payload;
                return copy;
            }
            default: return state;
        }
    }

    const [state, dispatch] = useReducer(stateReducer, INITIAL_STATE);

    const actions = {
        loading: (isLoading) => {
            dispatch({ type: ActionType.LOADING, payload: isLoading })
        },
        fetch: function (remoteCall, remoteArgs, dispatchCall, dispatchArgs) {
            dispatch({
                type: ActionType.FETCH,
                payload: {
                    name: `${remoteCall}#${Math.random() * 10000000}`,
                    args: remoteArgs || [],
                    onSuccess: {
                        name: dispatchCall || null,
                        args: dispatchArgs || [],
                    }
                }
            })
        },
        user: (user) => { dispatch({ type: ActionType.USER, payload: user }) },
        content: (page, content) => dispatch({ type: ActionType.PAGE_CONTENT, payload: { page, content } }),
        select: (page) => dispatch({ type: ActionType.SELECTED, payload: { page } }),
        assignments: (page) => dispatch({ type: ActionType.ASSIGNMENTS, payload: { page } }),
        commits: (page) => dispatch({ type: ActionType.COMMITS, payload: { page } }),
        repos: (page) => dispatch({ type: ActionType.REPOS, payload: { page } }),
        ready: () => dispatch({ type: ActionType.API_READY }),

    }

    return (<StateContext.Provider value={{ state, actions }}>{children}</StateContext.Provider>);
};