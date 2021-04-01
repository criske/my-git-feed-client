import React, { createContext, useReducer } from 'react';
import { FetchTypes } from '../service/MyGitFeedService';
import { Action, ActionType, INITIAL_STATE, State, Pages } from './State';

type StateReducer = (state: State, action: Action) => State;

interface Actions {
    loading: (isLoading: boolean) => void;
    fetch: (fetchType: FetchTypes, args: [any], actionType: ActionType) => void;
    select: (page: Pages) => void;
    user: (content: any) => void;
    assignments: (content: any) => void;
    commits: (content: any) => void;
    repos: (content: any) => void;
    ready: () => void;
}

export const StateContext = createContext<{ state: State; actions: Actions }>({
    state: INITIAL_STATE,
    actions: {
        loading: () => { },
        fetch: () => { },
        select: () => { },
        assignments: () => { },
        commits: () => { },
        repos: () => { },
        ready: () => { },
        user: () => { }
    }
});

export const StateProvider: React.FC = ({ children }) => {

    const stateReducer: StateReducer = (state, action) => {
        switch (action.type) {
            case ActionType.API_READY: {
                const updated: State = { ...state, ready: true };
                return updated
            }
            case ActionType.LOADING: {
                const updated: State = { ...state, fetch: { ...state.fetch, loading: action.payload } };
                return updated;
            }
            case ActionType.FETCH: {
                const updated: State = { ...state, fetch: { ...state.fetch, call: action.payload } };
                return updated
            }
            case ActionType.USER: {
                const updated: State = {
                    ...state,
                    provider: {
                        name: action.payload?.provider,
                        user: action.payload
                    }
                }
                return updated;
            }
            case ActionType.SELECTED: {
                const updated: State = { ...state, pages: { ...state.pages, selected: action.payload } }
                return updated;
            }
            case ActionType.ASSIGNMENTS: {
                const updated: State = { ...state, pages: { ...state.pages, assignments: action.payload } };
                return updated;
            }
            case ActionType.COMMITS: {
                const updated: State = { ...state, pages: { ...state.pages, commits: action.payload } };
                return updated;
            }
            case ActionType.REPOS: {
                const updated: State = { ...state, pages: { ...state.pages, repos: action.payload } };
                return updated;
            }
            default: return state;
        }
    }

    const [state, dispatch] = useReducer<StateReducer>(stateReducer, INITIAL_STATE);

    const actions: Actions = {
        loading: (isLoading) => {
            dispatch({ type: ActionType.LOADING, payload: isLoading })
        },
        select: (page) => dispatch({ type: ActionType.SELECTED, payload: page }),
        fetch: function (fetchType, fetchArgs, actionType) {
            dispatch({
                type: ActionType.FETCH,
                payload: {
                    name: `${fetchType}#${Math.random() * 10000000}`,
                    args: fetchArgs || [],
                    stateActionType: actionType
                }
            })
        },
        assignments: (content) => dispatch({ type: ActionType.ASSIGNMENTS, payload: content }),
        commits: (content) => dispatch({ type: ActionType.COMMITS, payload: content }),
        repos: (content) => dispatch({ type: ActionType.REPOS, payload: content }),
        ready: () => dispatch({ type: ActionType.API_READY }),
        user: (content) => dispatch({ type: ActionType.USER, payload: content })
    }
    return (<StateContext.Provider value={{ state, actions }}> { children} </StateContext.Provider>);
};