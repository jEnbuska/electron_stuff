import * as React from 'react';
import {SheetsActionCreators, SheetsState,} from '../store';
import styled, {css} from 'styled-components'


type Props = SheetsState & { row: string, col: string } & SheetsActionCreators ;

const ExcelInput = styled.input<{focused?: boolean}>`
    :focus{
        outline: none;
    }
    border: 1px solid black;
    ${props => props.focused && css`
        border-color: light-blue;        
  `}
`;

export default class Col extends React.Component<Props>{

    ref = React.createRef<HTMLInputElement>();

    render(){
        const {col, row, activeSheet, data} = this.props;
        const value = data[activeSheet].rows[row][col];
        return (
            <ExcelInput value={value} onClick={this.onFocus} onChange={this.onChange} innerRef={this.ref} />
        )
    }

    onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const {value} = e.currentTarget;
        const {row, col, updateCell} = this.props;
        updateCell({row, col, value})
    };

    onFocus = () => {
        const {row, col, focusCell} = this.props;
        focusCell({row, col})
    };

    componentDidUpdate({activeSheet, data}: Props){
        const {cursor} = data[activeSheet];
        if (this.ref.current !== document.activeElement) {
            const {col, row} = this.props;
            const wasFocused = cursor.col === col && cursor.row === row;
            const isFocused = cursor.col === this.props.col && row === this.props.row;
            if (!wasFocused && isFocused) {
                this.ref.current!.focus();
            }
        }
    }
}
