const initialState = 0;

const changeNumber = (state = initialState, action) => {
    switch (action.tyoe){
        case "INCREAMENT": return state + 1;
        case "DECREMENT" : return state -1;
        default: return state
    }

}

export default changeNumber;