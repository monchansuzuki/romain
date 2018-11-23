const InitState = {
    video : []
}

export const VideoReducer = (state = InitState , action)=>{
     let NewState = state
    let Video = [];
     switch (action.type) {
         case 'RECEIVED_VIDEO_ACTOR':{
             Video = action.payload.map(video=>{
                 return video
             })
             NewState = {...state , video : Video}
         }
         default:{
             return NewState;
         }
     }

     return NewState

}