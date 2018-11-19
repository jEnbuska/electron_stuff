import {ReducerAction} from './index'
import {onChangeSheet, onFocusCell, onUpdateCell} from './actionHandlers';
import {LOCATION_CHANGE} from "./router";

export type UpdateCell = {
    type: 'GRID::UPDATE_CELL',
    payload: Cursor & {value: string}
}
const UPDATE_CELL: UpdateCell['type'] = 'GRID::UPDATE_CELL';

export type FocusCell = {
    type: 'GRID::FOCUS_CELL',
    payload: Cursor
}

const FOCUS_CELL: FocusCell['type'] = 'GRID::FOCUS_CELL';

export type Sheet = {
    rows: {
        [key: string]: {
            [key: string]: string
        }
    };
    cols: {
        [key: string]: {
            [key: string]: string
        }
    };
    cursor: Cursor;
}

export type Cursor = {row: string, col: string}

export type State = {
    activeSheet: string;
    sheets: string[];
    data: {
        [key: string]: Sheet
    };
}
const initialState: State = {
    activeSheet: '',
    sheets: ['employees', 'cars'],
    data: {
        employees: {
            cursor: {col: '', row: ''},
            rows: {1: {a: 'Kalle', b: '50'}, 2: {a: 'Jukka', b: '6'}},
            cols: {a: {1: 'Kalle', 2: 'Jukka'}, b: {1: '50', 2: '6'}}
        },
        cars: {
            cursor: {col: '', row: ''},
            rows: {1: {a: 'Mersu', b: '600'}, 2: {a: 'Honda', b: 'Civic'}},
            cols: {a: {1: 'Mersu', 2: 'Honda'}, b: {1: '600', 2: 'Civic'}}
        }
    }
}

export function reducer(state: State = initialState, action: ReducerAction): State{
    console.log(action)
    switch(action.type){
        case UPDATE_CELL: return onUpdateCell(state, action.payload);
        case FOCUS_CELL: return onFocusCell(state, action.payload);
        case LOCATION_CHANGE: return onChangeSheet(state, action.payload)
        default: return state;
    }
}

const updateCell = (payload: UpdateCell['payload']): ReducerAction => ({type: UPDATE_CELL, payload});
const focusCell = (payload: FocusCell['payload']): ReducerAction => ({type: FOCUS_CELL, payload});

export const actionCreators = {updateCell, focusCell};
export type ActionCreators = typeof actionCreators;
export type Actions = UpdateCell | FocusCell;
