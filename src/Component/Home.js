import React from 'react';
import {Banner , WelcomText} from '../Style/Home'
import Footer from './Social'

const Home = () => {
    return (
        <div>
        <Banner>
            <WelcomText>
                Welcome, here you will see my work as a profesionel model , actor and even music composer. Feel free to contact me.
            </WelcomText>

        </Banner>
            <Footer/>
        </div>
    );
};

export default Home;