import React, { createContext, useReducer } from 'react';
import { FetchTypes } from '../service/MyGitFeedService';
import { Action, ActionType, INITIAL_STATE, State, Pages } from './State';

type StateReducer = (state: State, action: Action) => State;

interface Actions {
    loading: (isLoading: boolean) => void;
    fetch: (fetchType: FetchTypes, actionType: ActionType, args?: [any]) => void;
    select: (page: Pages) => void;
    dispatch: (action: ActionType, payload: any) => void
}

export interface StateContext {
    state: State;
    actions: Actions;
}

export const StateContext = createContext<StateContext>({
    state: INITIAL_STATE,
    actions: {
        loading: () => { },
        fetch: () => { },
        select: () => { },
        dispatch: () => { }
    }
});

export const StateProvider: React.FC = ({ children }) => {

    const stateReducer: StateReducer = (state, action) => {
        switch (action.type) {
            case ActionType.READY: {
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
        fetch: (fetchType, actionType, fetchArgs) => {
            dispatch({
                type: ActionType.FETCH,
                payload: {
                    name: `${fetchType}#${Math.random() * 10000000}`,
                    args: fetchArgs || [],
                    stateActionType: actionType
                }
            })
        },
        dispatch: (action, payload) => {
            dispatch({ type: action, payload });
        }
    }
    return (<StateContext.Provider value={{ state, actions }}> { children} </StateContext.Provider>);
};