const initState = {
    open : false
}

export const ContactReducer = (state = initState , action)=>{
    let NewState = state;
    switch (action.type) {
        case 'HANDLE_OPEN':{
            state.open?(
                NewState = {...state , open : false}
            ):(
                NewState = {...state , open : true}
            )
            break;
        }
        case 'HANDLE_CLOSE':{
            NewState = {...state , open : false}
            break
        }
    }

    return NewState
}