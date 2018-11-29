import React , {Component}from 'react';
import {Banner , VideoVimeo ,Arrow , Indice ,Section , Title , Line} from '../Style/ActorStyle'
import windowSize from 'react-window-size';
import ArrowImg from '../img/expand-button.svg'
import Youtube from 'react-youtube'





class Actor extends Component{

    getWindowWidth = ()=>{
       return this.props.windowWidth
    }
    getWindowHeight = ()=>{
        return this.props.windowHeight /1.6
    }

    getWidthResponsive = ()=>{
        if (this.getWindowWidth() > 1240) {
            return this.getWindowWidth()-500
        }else {
            return this.getWindowWidth() - 40
        }
    }

    render(){
        const opts = {
            width:this.getWindowWidth()- 50,
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
    return (
        <Banner>
            <VideoVimeo video={292412888}
                        autoplay={true}
                        width={this.getWindowWidth()-40}
                        height={this.getWindowHeight()}
            />

            <Indice>see more</Indice>
            <a href="#med"><Arrow src={ArrowImg} /></a>
            <Section >
                <Title>マンナンライフ　蒟蒻畑ララクラッシュ
                </Title>
                <Youtube
                    videoId="Y-CYKudDZC4"
                    opts={opts}
                    onReady={this._onReady}
                />
            </Section>

        </Banner>
    );}

};


export default windowSize(Actor);