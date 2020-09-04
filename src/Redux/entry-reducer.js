const initialState = {
    entry: {}
}

export const entryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ENTRY': {
            let entry  = action.entry
            return Object.assign({}, state, {
                entry
            }) 
        }
        default:
            return state
    }
}