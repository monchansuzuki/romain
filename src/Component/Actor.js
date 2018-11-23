import React , {Component}from 'react';
import {Banner , VideoVimeo ,Arrow , Indice ,Section , Title , Line} from '../Style/ActorStyle'
import windowSize from 'react-window-size';
import ArrowImg from '../img/expand-button.svg'





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
                <Title id="med">マンナンライフ</Title>
                <VideoVimeo video={302304645}
                            width={this.getWidthResponsive()}

                />
                <VideoVimeo video={302304604}
                            width={this.getWidthResponsive()}

                />
                <VideoVimeo video={302304582}
                            width={this.getWidthResponsive()}

                />
                <Line/>
                <Title>NTT ドコモ　CM</Title>
                <VideoVimeo video={302304411}
                            width={this.getWidthResponsive()}

                />
                <VideoVimeo video={302304336}
                            width={this.getWidthResponsive()}

                />

                <Line/>
                <Title>カフェロイド</Title>
                <VideoVimeo video={302304562}
                            width={this.getWidthResponsive()}

                />

                <Line/>
                <Title>Kioi Conference Concept movie</Title>
                <VideoVimeo video={302304514}
                            width={this.getWidthResponsive()}

                />

                <Line/>
                <Title>Midori anzen TVCM</Title>
                <VideoVimeo video={302304543}
                            width={this.getWidthResponsive()}

                />

                <Line/>
                <Title>Georgia</Title>
                <VideoVimeo video={302304470}
                            width={this.getWidthResponsive()}

                />
                <Line/>
                <Title>CASIO PRO</Title>
                <VideoVimeo video={302304445}
                            width={this.getWidthResponsive()}

                />
                <Line/>
                <Title>Canon EXPO </Title>
                <VideoVimeo video={302304491}
                            width={this.getWidthResponsive()}

                />
                <Line/>
                <Title>月桂冠 糖質セロ</Title>
                <VideoVimeo video={302304838}
                            width={this.getWidthResponsive()}

                />
                <Line/>
                <Title>ARMS TVCM</Title>
                <VideoVimeo video={302304218}
                            width={this.getWidthResponsive()}

                />
                <Line/>
                <Title>Picard Promo</Title>
                <VideoVimeo video={302304426}
                            width={this.getWidthResponsive()}

                />
                <Title>JAPANESE Promotion</Title>
                <VideoVimeo video={302304757}
                            width={this.getWidthResponsive()}

                />

            </Section>

        </Banner>
    );}
};


export default windowSize(Actor);