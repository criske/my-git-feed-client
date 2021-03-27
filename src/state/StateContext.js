import { createContext, useReducer } from 'react';
import { Actions, INITIAL_STATE } from './State';

export const StateContext = createContext(INITIAL_STATE);

export const StateProvider = ({ children }) => {

    const stateReducer = (state, action) => {
        switch (action.type) {
            case Actions.API_READY: {
                return { ...state, ready: true }
            }
            case Actions.LOADING: {
                return { ...state, loading: action.payload }
            }
            case Actions.USER: {
                return { ...state, loading: null, provider: { ...state.provider, user: action.payload } }
            }
            case Actions.PROVIDER: {
                return { ...state, provider: { ...state.provider, name: action.payload, user: {...state.provider.user, avatar: null, name:""} } }
            }
            case Actions.SELECTED: {
                return { ...state, page: { ...state.page, name: action.payload } }
            }
            case Actions.PAGE_CONTENT: {
                const copy = { ...state, loading: null };
                copy.pages[action.payload.page] = action.payload.content;
                return copy;
            }
            default: return state;
        }
    }

    const [state, dispatch] = useReducer(stateReducer, INITIAL_STATE);

    const dispatchers = {
        loading: (cancelSignal) => dispatch({ type: Actions.LOADING, payload: cancelSignal }),
        cancel: function () { this.loading(null) },
        provider: (name) => dispatch({ type: Actions.PROVIDER, payload: name }),
        user: (user) => dispatch({ type: Actions.USER, payload: user }),
        content: (page, content) => dispatch({ type: Actions.PAGE_CONTENT, payload: { page, content } }),
        select: (page) => dispatch({ type: Actions.SELECTED, payload: { page } }),
        ready: () => dispatch({ type: Actions.API_READY })
    }

    return (<StateContext.Provider value={{state, dispatchers}}>{children}</StateContext.Provider>);
};