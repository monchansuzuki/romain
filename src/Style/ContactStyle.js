import styled from 'styled-components'
import BG from '../img/contact-bg.png'
import FilledInput from '@material-ui/core/FilledInput';
import Button from '@material-ui/core/Button';


export const Input = styled(FilledInput)`
width: 100%;
`

export const Btn = styled(Button)`

`

export const ContactContainer = styled.section`
    background-image: url(${BG});
    height: 90vh;
    background-size: cover;
    background-position-y: center;
    background-position: center;   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (min-width: 1280px){
    background-size: contain;
    background-repeat: no-repeat;
    background-color: black;
    }

`

export const Box = styled.div`
    width: 90vw;
    height: 80vh;
    background-color: rgba(255,255,255,0.7);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    `

export const Tittle = styled.h2`
    color: black;
    margin-top: 4%;
    margin-bottom: 4%;
    `
export const Composite = styled.img`
    width: ${props=>props.isOpen?('100vw'):('15vw')};
    position: ${props=>props.isOpen?('absolute'):('static')};
    left: 0;
    right: 0;
    transition: all 400ms; 
    z-index: 1;
    cursor: pointer;
    
    :hover{
    transform: scale(1.1);
    }
        @media only screen and (min-width: 1280px){
        width: ${props=>props.isOpen?('70vw'):('15vw')};
        left: 15vw;

}
    `

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    justify-content: space-around;
    width: 90%;
    `

export const PlaceHolder = styled.p`
  font-weight: bold;
   `

export const SocialContainer = styled.div`
    display: flex;
    justify-content: space-between;
    `