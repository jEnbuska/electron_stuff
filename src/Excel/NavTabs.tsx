import * as React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {StoreState} from "../store";
import {connect} from "react-redux";
import {addClass} from "../utils";

const mapStateToProps = ({router}: StoreState) => router.location;
type Props = { tabs: string[] } & ReturnType<typeof mapStateToProps>;


const TabContainer= styled.div`
    padding: 5px;
    .tab{
        padding: 10px;
        color: light-blue;
    }
    .tab.active{
        font-weight: bold;
    }
`;

function NavTabs({tabs, pathname}: Props){
        return (
            <TabContainer>
                {tabs.map((key) => {
                    const to = `/sheets/${key}`;
                    return (<Link
                        key={key}
                        to={to}
                        className={addClass('tab', pathname === to && 'active' )}>{key}</Link>)
                })}
            </TabContainer>
        );
}

export default connect(mapStateToProps)(NavTabs);

