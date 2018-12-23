const initState = {
    isEng : true,
    englishText: [
        'With over 24 years of playing experience (academy school, conservatory,band, and concert hall) he’s always kept the relation with the music .\n' +
        '\n' +
        '                He was graduated from the Conservatory Darius Milhaud in Paris, and jazz music school academy EDIM.\n' +
        '                ',
        'He started to learn music when he was 5 years old and never stopped. He has been playing the trumpet guitar piano and keyboard for years.\n' +
        '\n' +
        '                He is currently working in collaboration with many singers and musicians, recording in studios, performing on stage, and composing soundtrack (TV,Cinema, PV, CM) with Cubase (orchestral composition).\n' +
        '                ',
        'Always listening movie and game soundtracks, he was inspired by some of the greatest names from the movie soundtrack maker: Hans Zimmer, Harry Gregson Williams, John Powell, Alan Silvestri, James Newton Howard ,Trevor Rabin etc.\n' +
        '                '
    ],
    japaneseText: [
        'Romain Dannaは24年以上の演奏経験(アカデミースクール、音楽院、バンド、コンサートホール)を持ち、音楽に精通してきました。\n' +
        ' 彼はパリのダリウス・ミヨー音楽院とジャズ音楽専門学校EDIMを卒業しました。',
        '5歳で音楽を学び始め、トランペットやギター、ピアノ、キーボードを何年にもわたり演奏しています。\n' +
        ' 現在は多くの歌手やミュージシャンとのコラボレーション、スタジオレコーディング、公演、Cubaseを使ったオーケストラサウンドトラック(テレビ、映画、PV、CM用)の制作に取り組んでいます。',
        '映画やゲームのサウンドトラックを聞く中で、彼は以下の映画サウンドトラック制作者に影響を受けました: Hans Zimmer, Harry Gregson Williams, John Powell, Alan Silvestri, James Newton Howard ,Trevor Rabin など。'
    ],
    homeEnglishText : 'Welcome, here you will see my work as a professional model , actor and even music composer. Feel free to contact me.',
    homeJapText : 'ここではモデル、俳優、作曲家としての作品を見ることができます。\n' +
        '気軽にお問い合わせください。'
}

export const MusicReducer = (state = initState , action)=>{
    let NewState = state;
    switch (action.type) {
        case 'CHANGE_LANGUAGE':{
            state.isEng?(
                NewState = {...state,isEng : false}
            ):(
                NewState = {...state , isEng : true}
            )
        }
    }
    return NewState
}
