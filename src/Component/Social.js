import React from 'react';
import FB from '../img/fb-logo.png'
import Insta from '../img/insta-logo.png'
import SC from '../img/soundcloud-logo.png'
import styled from 'styled-components'

const Nav = styled.footer`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: black;
    position: relative;
    top: 10vh;
    z-index: -1;

@media only screen and (min-width: 1280px){
    display: flex;
    align-items: center;
    justify-content: space-around;
    bottom: 0;
    width: 100%;
    padding-top: 1vh;
    padding-bottom: 1vh;   
    } 
`

const Social = () => {
    return (
        <Nav>
            <a><img src={FB}/></a>
            <a><img src={Insta}/></a>
            <a><img src={SC}/></a>
        </Nav>
    );
};

export default Social;