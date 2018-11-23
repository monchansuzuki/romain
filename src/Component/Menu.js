import React from 'react';
import {MenuContainer , NavLinkStyled} from '../Style/MenuStyle'
import {connect} from 'react-redux'
import {handleBurger} from '../Action/NavAction'

const Menu = (props) => {
    return (
        <MenuContainer isOpen={props.NavReducer.burgerIsToggle}>
            <NavLinkStyled to="model" onClick={props.LinkIsClick}>I am a model</NavLinkStyled>
            <NavLinkStyled to="actor" onClick={props.LinkIsClick}>I am an actor</NavLinkStyled>
            <NavLinkStyled to="music" onClick={props.LinkIsClick}>I compose music</NavLinkStyled>
            <NavLinkStyled to="about" onClick={props.LinkIsClick}>About me</NavLinkStyled>
            <NavLinkStyled to="contact" onClick={props.LinkIsClick}>Contact me</NavLinkStyled>

        </MenuContainer>
    );
};

const mapStateToProps = (state) =>{
    return{
        NavReducer : state.NavReducer
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        LinkIsClick : ()=>{dispatch(handleBurger())}
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Menu);