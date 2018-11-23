import styled from 'styled-components'
import ImageTab from '../img/banner-tab.png'
import ImageDesk from '../img/bg-desk.png'

export const Banner = styled.section`
    background-image: url(${ImageTab});
    position: relative;
    width: 100vw;
    height: 80vh;
    background-position: center;
    background-size: cover;
    top: 10vh;
    z-index: -1;
    @media only screen and (min-width: 1280px){
    background-image: url(${ImageDesk});
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
      font-size: 1.3em;
      @media only screen and (min-width: 1280px){
      left: 63%;
      padding: 1%;
      right: 0;
      width: 30%;
      bottom: 40%;
      border-radius: 5px;
      }
 
    `