import React from 'react';
import {MusicContainer , Box , Para} from '../Style/Music'
import {connect} from 'react-redux'
import {Logo} from "../Style/AboutStyle";
import Jap from "../img/japan.png";
import Eng from "../img/uk.png";


const Music = (props) => {
    return (
        <MusicContainer>

            {props.Langue.isEng?(
                <Logo onClick={props.Toogle}><img src={Jap}/> 日本語</Logo>
            ):(
                <Logo onClick={props.Toogle}><img src={Eng}/>English</Logo>
            )}

            <Box>
                <h2>About my music</h2>
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
            <iframe width="80%" height="300" scrolling="yes" frameBorder="no" allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/62573551&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </MusicContainer>
    );
};

const mapStateToProps = (state)=>{
    return{
        Langue : state.MusicReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        Toogle : ()=>{dispatch(
            { type: 'CHANGE_LANGUAGE'}
        )}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Music);