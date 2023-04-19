const initialState = {
    card: []
}


const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case  'ADD_CARD':


        return{ 
            ...state, 
            card: [...state.card, action.payload]
        }

        default:
            return state;

    }
}

export default reducer;