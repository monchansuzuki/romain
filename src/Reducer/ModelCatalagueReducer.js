const initState = {
    Catalogue : [],
    Magazine : [],
    Promotion : [],
    Fetching : false,
    Fetch : true
}

export const ModelImageReducer = (state = initState , action)=>{
    let NewState = state;
    //Catalogue array
    let Catalalogue = [];
    let Promotion = [];
    let Magazine = [];

    switch (action.type) {
        case 'FETCH_IMAGE_CATALOGUE': {
            NewState = {...state, Fetching: true};
            break;
        }
        case 'RECEIVED_CATALOGUE':{
            Catalalogue = action.payload.map(image =>{
                return image;
            })
            NewState = {...state , Catalogue : Catalalogue};
            break;
        }
        case 'FETCH_IMAGE_PROMOTION':{
            NewState = {...state , Fetching : true};
            break;
        }
        case 'RECEIVED_PROMOTION':{
            Promotion = action.payload.map(image=>{
                return image
            });
            NewState = { ... state , Promotion : Promotion};
            break ;
        }
        case 'RECEIVED_MAGAZINE' :{
            Magazine = action.payload.map(image => image);
            NewState = {...state , Magazine : Magazine};
        }
    }


    return NewState
}