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
        return this.props.windowHeight
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
            width:this.getWindowWidth()*0.8,
            height : this.getWindowHeight()*0.6,
            playerVars: { // https://developers.google.com/youtube/player_parameters
            }
        };
    return (
        <Banner>
            <VideoVimeo video={292412888}
                        autoplay={false}
                        width={this.getWindowWidth()-40}
                        height={this.getWindowHeight()}
            />

            <Indice>see more</Indice>
            <a href="#med"><Arrow src={ArrowImg} /></a>
            <Section id="med">
                <Title>マンナンライフ　蒟蒻畑ララクラッシュ</Title>
                <Youtube
                    videoId="Y-CYKudDZC4"
                    opts={opts}
                />
                <Title>TV show - Ari yori no ari - Hashimoto Manami</Title>
                <Youtube
                    videoId="i8iyvvJAbt4"
                    opts={opts}
                />
                <Title>PV with Saraphina and Kaori - Skybeamstudios</Title>
                <Youtube
                    videoId="xNouvb_H3hc"
                    opts={opts}
                />
                <Title>TV show - 世界の日本人妻は見た with Ishikawa rika</Title>
                <Youtube
                    videoId="HxOIPS9xF-o"
                    opts={opts}
                />
                <Title>Takeshi kitano TV series "Unbelievable"</Title>
                <Youtube
                    videoId="DMDIcgbWH2Q"
                    opts={opts}
                />
                <Title>TVCM 月桂冠 糖質ゼロ</Title>
                <Youtube
                    videoId="9Y9U-o2nvuU"
                    opts={opts}
                />
                <Title>Caferoid CM</Title>
                <Youtube
                    videoId="FfgN54UQPhM"
                    opts={opts}
                />
                <Title>Midori anzen TVCM ミドリ安全最新TVCM 　”ネットの術”</Title>
                <Youtube
                    videoId="npkNlbKUvjI"
                    opts={opts}
                />
                <Title>Kioi Conference Concept movie</Title>
                <Youtube
                    videoId="4QVyCkfKhZ4"
                    opts={opts}
                />
                <Title>NTT TVCM kirari style 20</Title>
                <Youtube
                    videoId="bkz7rxlwghk"
                    opts={opts}
                />
                <Title>Burger King CM 【バーガーキング】</Title>
                <Youtube
                    videoId="JqwadTW35v8"
                    opts={opts}
                />
                <Title>Making-of TVCM 2 マンナンライフ　ララクラッシュ</Title>
                <Youtube
                    videoId="cQDnByUBQSo"
                    opts={opts}
                />
            </Section>

        </Banner>
    );}

};


export default windowSize(Actor);