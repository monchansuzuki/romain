import React from 'react';
import {MusicContainer , Box , Para} from '../Style/Music'
const Music = () => {
    return (
        <MusicContainer>

            <Box>
                <h2>About my music</h2>
                <Para>With over 24 years of playing experience (academy school, conservatory,band, and concert hall) he’s always kept the relation with the music .

                He was graduated from the Conservatory Darius Milhaud in Paris, and jazz music school academy EDIM.
                </Para>
                <Para>He started to learn music when he was 5 years old and never stopped. He has been playing the trumpet guitar piano and keyboard for years.

                He is currently working in collaboration with many singers and musicians, recording in studios, performing on stage, and composing soundtrack (TV,Cinema, PV, CM) with Cubase (orchestral composition).
                </Para>
                <Para>Always listening movie and game soundtracks, he was inspired by some of the greatest names from the movie soundtrack maker: Hans Zimmer, Harry Gregson Williams, John Powell, Alan Silvestri, James Newton Howard ,Trevor Rabin etc.
                </Para>
            </Box>
            <iframe width="80%" height="300" scrolling="yes" frameBorder="no" allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/62573551&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </MusicContainer>
    );
};

export default Music;