import * as React from 'react';
import {StoreState} from "../store";
import {connect} from 'react-redux'
import styled from 'styled-components'
import Sheet from "./Sheet";
import NavTabs from "./NavTabs";
import {Redirect, Route, Switch} from "react-router";

const mapStateToProps = ({sheets}: StoreState) => sheets;
type Props = (ReturnType<typeof mapStateToProps>)

const ExcelContainer= styled.div`height: 100%; padding:5px`;

class Excel extends React.PureComponent<Props> {

    render(){
        const {data} = this.props;
        const tabs = Object.keys(data);
        return (
            <ExcelContainer className="excel">
                <NavTabs tabs={Object.keys(data)}/>
                <Switch>
                    {tabs.map(tab => (
                        <Route key={tab} path={`/sheets/${tab}`} component={Sheet}/>
                    ))}
                    {tabs.length && <Redirect to={`/sheets/${tabs[0]}`} />}
                </Switch>
            </ExcelContainer>
        );
    }
}


export default connect(mapStateToProps)(Excel);
