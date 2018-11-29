import styled from 'styled-components'
import bg from '../img/bg-music.jpg'

export const MusicContainer = styled.section`
        padding-top: 1vh;
        background-image: url(${bg});
        background-position: center;
        background-size: cover;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 5vh;
        
        
        
    `

export const Box = styled.div`
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    width: 90vw;
    border-radius: 4px;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 10%;
    margin-bottom: 17%;
    @media only screen and (min-width: 1280px){
    height: 45vh;
    width: 55vw;
    margin: 5% 0;
    }
    
    `
export const Para = styled.p`
    color: white;
    padding-top: 1%;
        text-align: start;
    `