"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const ExcelInput = styled_components_1.default.input `
    :focus{
        outline: none;
    }
    border: 1px solid black;
    ${props => props.focused && styled_components_1.css `
        border-color: light-blue;        
  `}
`;
class Col extends React.Component {
    constructor() {
        super(...arguments);
        this.ref = React.createRef();
        this.onChange = (e) => {
            const { value } = e.currentTarget;
            const { row, col, updateCell } = this.props;
            updateCell({ row, col, value });
        };
        this.onFocus = () => {
            const { row, col, focusCell } = this.props;
            focusCell({ row, col });
        };
    }
    render() {
        const { col, row, activeSheet, data } = this.props;
        const value = data[activeSheet].rows[row][col];
        return (React.createElement(ExcelInput, { value: value, onClick: this.onFocus, onChange: this.onChange, innerRef: this.ref }));
    }
    componentDidUpdate({ activeSheet, data }) {
        const { cursor } = data[activeSheet];
        if (this.ref.current !== document.activeElement) {
            const { col, row } = this.props;
            const wasFocused = cursor.col === col && cursor.row === row;
            const isFocused = cursor.col === this.props.col && row === this.props.row;
            if (!wasFocused && isFocused) {
                this.ref.current.focus();
            }
        }
    }
}
exports.default = Col;
//# sourceMappingURL=Col.js.map