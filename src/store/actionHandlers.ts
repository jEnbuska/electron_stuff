import * as Sheets from './sheets';
import * as Router from './router'


// should be called only on user input when sheet, col, and row are defined

export function onUpdateCell(state: Sheets.State, payload: Sheets.UpdateCell['payload']): Sheets.State{
    const {activeSheet, data} = state;
    const {rows: {...rows}, cols: {...cols}}: Sheets.Sheet = data[activeSheet];
    const {value, col, row} = payload;
    rows[row] = {...rows[row], [col]: value}
    cols[col] = {...rows[col], [row]: value};
    return {
        ...state,
        data: {
            ...data,
            [activeSheet]: {
                ...data[activeSheet],
                rows,
                cols
            }
        }
    };
}

export function onFocusCell(state: Sheets.State, payload: Sheets.FocusCell['payload']): Sheets.State {
    const {activeSheet, data} = state;
    const {row, col} = payload;
    return {
        ...state,
        data: {
            ...data,
            [activeSheet]: {
                ...data[activeSheet],
                cursor: {col, row}
            }
        }
    }
}

export function onChangeSheet(state: Sheets.State, payload: any) {
    try{
        const [page, activeSheet] = payload.location.pathname.split('/').slice(1)
        if (page === 'sheets' && activeSheet) {
            return {...state, activeSheet};
        }
    }catch(e){}
    return state;
}
