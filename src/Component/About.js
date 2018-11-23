import React from 'react';
import {AboutContainer , Box , Logo , Para} from '../Style/AboutStyle'
import {connect} from 'react-redux'
import Jap from '../img/japan.png'
import Eng from '../img/uk.png'

const About = (props) => {
    return (
        <AboutContainer>
            {props.Langue.isEng?(
                <Logo onClick={props.Toogle}><img src={Jap}/> 日本語</Logo>
            ):(
                <Logo onClick={props.Toogle}><img src={Eng}/>English</Logo>
            )}
            <Box>
                <h2>About me</h2>
                {props.Langue.isEng?(
                    props.Langue.englishText.map((text , indice)=>{
                        return <Para key={indice}>{text}</Para>
                    })
                ):(
                    props.Langue.japaneseText.map((text, indice)=>{
                        return <Para key={indice}>{text}</Para>
                    })
                )}
            </Box>
        </AboutContainer>
    );
};

const mapStateToProps = (state)=>{
    return{
        Langue : state.LanguageReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        Toogle : ()=>{dispatch(
            { type: 'CHANGE_LANGUAGE'}
        )}
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(About);