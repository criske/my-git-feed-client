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
            case ActionType.CANCEL: {
                return { ...state, loading: null }
            }
            case ActionType.ERROR: {
                return { ...state, loading: null, error: action.payload }
            }
            case ActionType.USER: {
                return { ...state, loading: null, error: null, provider: { ...state.provider, user: action.payload } }
            }
            case ActionType.PROVIDER: {
                return { ...state, provider: { ...state.provider, name: action.payload, user: { ...state.provider.user, avatar: null, name: "" } } }
            }
            case ActionType.SELECTED: {
                return { ...state, page: { ...state.page, name: action.payload } }
            }
            case ActionType.PAGE_CONTENT: {
                const copy = { ...state, loading: null, error: null };
                copy.pages[action.payload.page] = action.payload.content;
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
            // this.loading(fetchService.cancel);
            // fetchService.request
            //     .then((r) => {
            //         this.cancel();
            //         onSuccess(r);
            //     })
            //     .catch(this.error);
            dispatch({
                type: ActionType.FETCH,
                payload: {
                    name: remoteCall,
                    args: remoteArgs || [],
                    onSuccess: {
                        dispatcherCall: dispatchCall || null,
                        args: dispatchArgs || [],
                    }
                }
            })
        },
        provider: (name) => dispatch({ type: ActionType.PROVIDER, payload: name }),
        user: (user) => dispatch({ type: ActionType.USER, payload: user }),
        content: (page, content) => dispatch({ type: ActionType.PAGE_CONTENT, payload: { page, content } }),
        select: (page) => dispatch({ type: ActionType.SELECTED, payload: { page } }),
        ready: () => dispatch({ type: ActionType.API_READY }),
       
    }

    return (<StateContext.Provider value={{ state, actions }}>{children}</StateContext.Provider>);
};