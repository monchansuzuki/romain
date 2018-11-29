import React from 'react';
import {Banner , WelcomText, Langue} from '../Style/Home'
import Footer from './Social'
import {connect} from 'react-redux'
import Jap from "../img/japan.png";
import Eng from "../img/uk.png";

const Home = (props) => {
    return (
        <div>

            {props.Langue.isEng?(
                <Langue onClick={props.Toogle}><img src={Jap}/> 日本語</Langue>
            ):(
                <Langue onClick={props.Toogle}><img src={Eng}/>English</Langue>
            )}
        <Banner>
            <WelcomText>{props.Langue.isEng?(props.Langue.homeEnglishText):(props.Langue.homeJapText)}</WelcomText>
        </Banner>
            <Footer/>
        </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(Home);