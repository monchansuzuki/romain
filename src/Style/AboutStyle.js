import styled from 'styled-components'
import Bg from '../img/about-me-bg.png'

export const AboutContainer = styled.section`
    background-image: url(${Bg});
    padding-bottom: 5%;
            padding-top: 1vh;

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
    width: 95vw;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media only screen and (min-width: 1280px){
    width: 58vw;
    padding: 1%;
    }
`

export const Logo= styled.div`
    display: flex;
    align-items: center;
    color: white;
    right: 5vw;
    cursor: pointer;
    width: 80vw;
    justify-content: flex-end;
    margin-bottom: 2vh;
    
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
    text-align: left;
        margin: 2%;
    `