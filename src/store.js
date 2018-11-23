import {createStore , combineReducers , applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'
import {NavReducer} from "./Reducer/NavigationReducer";
import axios from 'axios'
import {ModelSelectionReducer} from './Reducer/ModelSelection'
import {ModelImageReducer} from './Reducer/ModelCatalagueReducer'
import {VideoReducer} from './Reducer/VideoActorReducer'
import {LanguageReducer} from './Reducer/AboutReducer'
import {ContactReducer} from './Reducer/ContactReducer'



const reducer = combineReducers(
    {
        NavReducer : NavReducer,
        ModelSelectionReducer : ModelSelectionReducer,
        ModelImageReducer : ModelImageReducer,
        VideoReducer : VideoReducer ,
        LanguageReducer : LanguageReducer,
        ContactReducer : ContactReducer
    }
)

export const store = createStore(reducer , applyMiddleware(logger , thunk));

store.dispatch(
    dispatch=>{
        /*ASYNC CATALOGUE*/
        dispatch({type:'FETCH_IMAGE_CATALOGUE'})
        axios.get('https://res.cloudinary.com/monchan/image/list/catalogue.json')
            .then(resp=>{
                dispatch({type:'RECEIVED_CATALOGUE', payload : resp.data.resources})
            }).catch((err)=>{
            dispatch({type: 'FECTCH_CATALOGUE_ERROR',payload: err})
        })

        /*ASYNC PROMOTION*/
        dispatch({type:'FETCH_IMAGE_PROMOTION'})
        axios.get('https://res.cloudinary.com/monchan/image/list/promo.json')
            .then(resp=>{
                dispatch({type:'RECEIVED_PROMOTION', payload : resp.data.resources})
            }).catch((err)=>{
            dispatch({type: 'FECTCH_PROMOTION_ERROR',payload: err})
        })
        /*ASYNC MAGAZINE*/
        dispatch({type:'FETCH_IMAGE_MAGAZINE'})
        axios.get('https://res.cloudinary.com/monchan/image/list/mag.json')
            .then(resp=>{
                dispatch({type:'RECEIVED_MAGAZINE', payload : resp.data.resources})
            }).catch(err=>{
            dispatch({type: 'FECTCH_MAGAZINE_ERROR',payload: err})
        })
        //ASYNC VIDEO

        dispatch({type : 'FETCH_VIDEO_ACTOR'})
        axios.get('https://res.cloudinary.com/monchan/video/list/video-actor.json')
            .then(resp=>{
                dispatch({type : 'RECEIVED_VIDEO_ACTOR' , payload : resp.data.resources})
            }).catch(err=>{
                dispatch({ type : 'FETCH_VIDEO_ACTOR_ERRO' , payload : err})
        })
    }
)