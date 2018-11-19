import * as React from 'react';
import {actionCreators, StoreState} from '../store';
import Row from "./Row";
import {pick} from "../utils";
import {connect} from "react-redux";

const mapDispatchToProps = pick(actionCreators, 'updateCell', 'focusCell');
const mapStateToProps = ({sheets}: StoreState) => sheets;
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;


class Sheet extends React.PureComponent<Props>{

    render(){
        const {activeSheet, data, ...rest} = this.props;
        const {rows} = data[activeSheet];
        return (
            <div className="sheet">
                {Object.keys(rows).map(row => (
                        <Row key={row} row={row} data={data} activeSheet={activeSheet} {...rest} />
                    )
                )}
            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sheet);
