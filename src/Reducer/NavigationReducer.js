const initState = {
    burgerIsToggle : false
}

export const NavReducer = (state = initState , action)=>{
    //init new state
    let newState = state;

    switch (action.type) {
        case 'BURGER_IS_TOGGLE':
            if (state.burgerIsToggle) {
                newState = {...state , burgerIsToggle : false}
            }else {
                newState = {...state , burgerIsToggle : true}
            }
    }

    return newState;
}