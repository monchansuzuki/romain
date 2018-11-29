import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const MenuContainer = styled.nav`
    position: absolute;
    top: 10vh;
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100vw;
    height: ${props => props.isOpen ? '90vh' : '0'};
    background: #ffffff;
    opacity: ${props => props.isOpen ? '1' : '0'};
    transition: all 300ms;
    z-index: 4;
    @media only screen and (min-width: 1280px ){
      visibility: visible;
      opacity: 1;
      height: 5vh;
      flex-direction: row;
      top: 0;
      position: relative;
      padding: 0% 0 5vh 0;
    }
    
 
    `

export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-family: 'Alex Brush', cursive;
    font-size: 1.8em;
    cursor: pointer;
    :hover{
    color: gold;
    }
    :active{
    color: gold;
    }
`