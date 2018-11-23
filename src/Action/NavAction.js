export const handleBurger = () =>{
    return{
        type : 'BURGER_IS_TOGGLE'
    }
}
export const handleSelectionModel = (value) =>{
    return{
        type: 'SELECT_ON_CHANGE',
        payload : value
    }
}