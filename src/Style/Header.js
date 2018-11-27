import styled , {keyframes} from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderStyle = styled.div`
   background: #ffffff;
   display: flex;
   justify-content: space-around;
   align-items: center;
   height: 12vh;
   width: 100vw;
   z-index: 2;
   @media only screen and (min-width: 1280px){
   flex-direction: column;
   height: 12vh;
   }
`

export const Logo = styled(Link)`
   color: black;
   font-size: 3em;
   text-decoration: none;
   font-family: 'Alex Brush', cursive;

`

export const Ligne = styled.div`
   width: 10vw;
   height: 0.3vh;
   background: black;
   margin-top: 1.5vh;
   
`
export const LigneShort = styled.div`
   width: ${props=>props.isToggle?'10vw':'5vw'};
   height: 0.3vh;
   background: black;
   margin-top: 1.5vh;
   transition: all 300ms;
   
`

export const Burger = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media only screen and (min-width: 1280px ){
      display: none;
    }
    
`



