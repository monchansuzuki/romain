import React from 'react';
import {ModelContainer} from '../Style/ModelStyle'
import Select from '@material-ui/core/Select';
import {connect} from 'react-redux'
import {handleSelectionModel} from "../Action/NavAction";
import Gallery from './Galery'

const Model = (props) => {

    return (
        <ModelContainer>
            <Select native={true} onChange={props.HandleSelection} className="select">
                <option value='sel'>Plz select a category</option>
                <option value='Catalogue'>Catalogue</option>
                <option value='Promotion'>Promotion</option>
                <option value='Magazine'>Magazine</option>
            </Select>

            <Gallery/>
        </ModelContainer>
    );
};

const mapStateToProps = (state)=>{
    return{
        SelectionReducer : state.ModelSelectionReducer
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        HandleSelection : (value)=>{dispatch(handleSelectionModel(value.target.value))}

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Model);