import React, { createContext, useReducer } from 'react';
import { FetchTypes } from '../service/MyGitFeedService';
import { Action, ActionType, INITIAL_STATE, State, Pages } from './State';

type StateReducer = (state: State, action: Action) => State;

interface Actions {
    loading: (isLoading: boolean) => void;
    fetch: (fetchType: FetchTypes, actionType: ActionType, args?: any[]) => void;
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

function updatePaging(
    payloadPaging: { first: number | null, prev: number | null, next: number | null, last: number | null },
    statePaging: { current: number, max: number }
): { current: number, max: number } {
    const max: number = payloadPaging.last !== null ? payloadPaging.last : statePaging.max;
    const current: number = payloadPaging.prev !== null ? payloadPaging.prev + 1 : 1;
    return { current, max };
}

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
                const paging = updatePaging(action.payload.paging, state.pages.assignments.paging);
                const updated: State = {
                    ...state, pages:{
                        ...state.pages, assignments: {
                            paging,
                            entries: action.payload.entries || []
                        }
                    }
                };
                return updated;
            }
            case ActionType.COMMITS: {
                const paging = updatePaging(action.payload.paging, state.pages.commits.paging);
                const updated: State = {
                    ...state, pages: {
                        ...state.pages, commits: {
                            paging,
                            entries: action.payload.entries || []
                        }
                    }
                };
                return updated;
            }
            case ActionType.REPOS: {
                const paging = updatePaging(action.payload.paging, state.pages.repos.paging);
                const updated: State = {
                    ...state, pages:{
                        ...state.pages, repos: {
                            paging,
                            entries: action.payload.entries || []
                        }
                    }
                };
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