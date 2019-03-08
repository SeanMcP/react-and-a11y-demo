import React, { createContext, useReducer } from 'react';

import ACTIONS from '../actions';

import recsData from '../data/recs.json';

const intialState = {
    recs: recsData
};

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_REC: {
            const { author, url, description, tags } = action;
            const newRec = {
                id: new Date().getTime(),
                author,
                url,
                description,
                tags
            };
            return {
                ...state,
                recs: [...state.recs, newRec]
            };
        }
        default:
            return { ...state };
    }
}

function useAppReducer() {
    return useReducer(reducer, intialState);
}

export const AppContext = createContext();

function AppStoreProvider({ children }) {
    const [state, dispatch] = useAppReducer();
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppStoreProvider;
