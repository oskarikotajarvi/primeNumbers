import { State } from './state';
import { EActionType } from './types';

export type Action = {
    type: EActionType;
    payload: boolean;
};

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case EActionType.CHANGE_THEME:
            return { ...state, useDarkTheme: action.payload };
        default:
            return state;
    }
};

export const changeTheme = (useDarkTheme: boolean): Action => {
    return {
        type: EActionType.CHANGE_THEME,
        payload: useDarkTheme,
    };
};
