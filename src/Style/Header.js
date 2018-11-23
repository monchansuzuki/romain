import styled , {keyframes} from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderStyle = styled.div`
   background: black;
   display: flex;
   justify-content: space-around;
   align-items: center;
   height: 10vh;
   width: 100vw;
   position: fixed;
       z-index: 2;
   @media only screen and (min-width: 1280px){
   flex-direction: column;
   height: 12vh;
   }
`

export const Logo = styled(Link)`
   color: white;
   font-size: 2.5em;
   text-decoration: none;
`

export const Ligne = styled.div`
   width: 10vw;
   height: 0.3vh;
   background: white;
   margin-top: 1.5vh;
   
`
export const LigneShort = styled.div`
   width: ${props=>props.isToggle?'10vw':'5vw'};
   height: 0.3vh;
   background: white;
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



