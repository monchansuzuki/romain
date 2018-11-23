const initState = {
    select : ''
}

export const ModelSelectionReducer = (state = initState , action)=>{
    let newState = state
    switch (action.type) {
        case 'SELECT_ON_CHANGE':
            newState = {...state , select : action.payload}
    }

    return newState

}