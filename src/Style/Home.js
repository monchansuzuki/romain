import styled from 'styled-components'
import ImageTab from '../img/banner-tab.png'
import ImageDesk from '../img/banner-desk.png'

export const Banner = styled.section`
    background-image: url(${ImageTab});
    position: relative;
    width: 100vw;
    height: 70vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
    @media only screen and (min-width: 1280px){
    background-image: url(${ImageDesk});
        background-size: contain;
        

    }
    `

export const WelcomText = styled.p`
      position: absolute;
      bottom: 0;
      line-height: 1.6;
      opacity: 0.7;
      width: 100%;
      background-color: rgba(255,255,255,0.7);
      color: black;
      font-family: 'Slabo 27px', serif;
      font-size: 1.3em;
      box-shadow: 6px 9px 18px #373a3d;
     
      @media only screen and (min-width: 1280px){
      left: 63%;
      padding: 1%;
      right: 0;
      width: 25%;
      bottom: 40%;
      border-radius: 5px;
      }
 
    `

export const Langue = styled.span`
    color: black;
    display: flex;
    align-content: center;
    height: 5vh;
    width: 90vw;
    justify-content: flex-end;
    cursor: pointer;
    :hover{
    color: gold;
    }
        @media only screen and (min-width: 1280px){
        margin-top: 5vh;
}
    `