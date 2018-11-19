let stateString: any = localStorage.getItem('state');
let state: any;

try{
    state = JSON.parse(stateString)
}catch(e){
    state = {}
}

export default state;

