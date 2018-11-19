"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let stateString = localStorage.getItem('state');
let state;
try {
    state = JSON.parse(stateString);
}
catch (e) {
    state = {};
}
exports.default = state;
//# sourceMappingURL=initialState.js.map