import styled from 'styled-components'
import Bg from '../img/about-me-bg.png'

export const AboutContainer = styled.section`
    background-image: url(${Bg});
    height: 90vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    @media only screen and (min-width: 1280px){
    }
    `

export const Box = styled.div`
    background-color: rgba(0,0,0,0.8);
    height: 80vh;
    width: 95vw;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media only screen and (min-width: 1280px){
    height: 51vh;
    width: 58vw;
    padding: 1%;
    }
`

export const Logo= styled.span`
    position: absolute;
    top: 10vh;
    display: flex;
    align-items: center;
    right: 5vw;
    cursor: pointer;
    @media only screen and (min-width: 1280px){
    top: 20vh;
    right: 25vw;
        }
        :hover{
        color: gold;
        }
    `

export const Para = styled.p`
    color: white;
    `