import React from 'react';
import {HeaderStyle , Logo , Burger , Ligne , LigneShort} from "../Style/Header";
import {connect} from 'react-redux'
import {handleBurger} from '../Action/NavAction'
import Menu from './Menu'


const Header = (props) => {
    return (
        <HeaderStyle>
            <Logo to="/">Romain Danna</Logo>
            <Burger onClick={props.BurgerIsClick}>
                <Ligne/>
                <LigneShort isToggle={props.NavReducer.burgerIsToggle}/>
                <Ligne/>
            </Burger>
            <Menu/>
        </HeaderStyle>
    );
};

const mapStateToProps =(state)=>{
    return{
        NavReducer: state.NavReducer
    }
}
const mapDispatchToProps = dispatch=>{
    return{

        BurgerIsClick : () => { dispatch(handleBurger()) }
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Header);