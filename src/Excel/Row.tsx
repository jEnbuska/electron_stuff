import * as React from 'react';
import {SheetsActionCreators, SheetsState} from '../store';
import Col from "./Col";


type Props = SheetsState & { row: string } & SheetsActionCreators;


export default class Row extends React.PureComponent<Props>{

    render(){
        const {data, activeSheet, row, ...rest} = this.props;
        const targetRow = data[activeSheet].rows[row];
        return (
            <div>
                {Object.keys(targetRow).map(col => (
                    <Col key={col} col={col} row={row} activeSheet={activeSheet} data={data} {...rest}/>
                ))}
            </div>
        );
    }
}
