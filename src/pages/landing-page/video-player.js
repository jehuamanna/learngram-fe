import React, { useState }  from 'react';
import ReactPlayer from 'react-player';
import {
    VideoArea, 
    PlayerWrapper, 
} from './styled-components'
import {PlayerControls} from './player-controls'


export const VideoPlayer = (props) => {
    const [state, setState] = useState({
        isPlaying: true,
    })
    
    const {
        isPlaying
    } = state;
    

    const handlePlayPause = () => {
       setState({
           ...state,
           isPlaying: !state.isPlaying,
       }) 
    }
    return (        
    <VideoArea>
        <PlayerWrapper>
            <ReactPlayer url={props.fileSource}
            width="100%"
            height="100%"
            muted={false}
            playing={isPlaying}
            />
        <PlayerControls
            onPlayPause={handlePlayPause}
        />
        </PlayerWrapper>
        
    </VideoArea>
    )
}