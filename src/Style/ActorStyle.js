import styled , {keyframes} from 'styled-components'
import BannerBG from '../img/bg-actor.png'
import Vimeo from '@u-wave/react-vimeo'

const AnimationArrow=keyframes`
    from{
    transform: translateY(0)
    }
    to{
    transform: translateY(2vh);
    }
`

export const Banner = styled.section`
    background-image: url(${BannerBG});
    background-position: center;
    background-repeat: no-repeat;
    background-color: white;
    background-size: contain;
    height: 90vh;
    overflow: auto;
    padding-top: 12vh;
    `

export const VideoVimeo = styled(Vimeo)`
padding-top: 2%;
padding-bottom: 2%;
`

export const Arrow = styled.img`
    width: 4vw;
    animation: ${AnimationArrow} infinite 700ms alternate;
    transition: all 1s;
    :hover{
    animation: none;
    transform: scale(1.2);
    filter : saturate(9);
    }
    `

export const Indice = styled.p`
    color: white;
    `

export const Section = styled.div`
    height: 88vh;
    margin-top: 12vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2%;
    background: rgba(255, 255, 255, 0.2);
    overflow: scroll;
    @media only screen and (min-width: 1280px){
    
    
    }
    `

export const Title = styled.h2`
    color: white;
    background-color: black;
    width: 70%;
    border-radius: 5px;
    margin-top: 2%;
    margin-bottom: 2%;
    `

export const Line = styled.div`
    width: 90vw;
    margin-top: 2vh;
    padding-bottom: 2vh;
    height: 6vh;
    margin-bottom: 2vh;
    border-radius: 7px;
    background: black;
    `