import React, { useRef, useState }  from 'react';
import ReactPlayer from 'react-player';
import {
    VideoArea, 
    PlayerWrapper, 
} from './styled-components'
import {PlayerControls} from './player-controls'
import screenfull from 'screenfull';

let count = 0;

const format = (miliSeconds) => {
    if(isNaN(miliSeconds)){
        return "00:00"
    }
    const date = new Date(miliSeconds * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds().toString().padStart(2, "0");
    
    if(hours){
        return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds}`
    }
    
    return `${minutes}:${seconds}`
}

export const VideoPlayer = (props) => {
    const {
        fileSource,
        fileName
    } = props

    const videoPlayerRef = useRef(null)
    const videoContainerRef = useRef(null)
    const controlsRef = useRef(null)

    const [state, setState] = useState({
        isPlaying: false,
        isMute: false,
        volume: 0.5,
        playbackRate: 1.0,
        played: 0,
        seeking: false,
    })
    
    const {
        isPlaying,
        isMute,
        volume,
        playbackRate,
        played,
        seeking,
    } = state;
    

    const handlePlayPause = () => {
       setState({
           ...state,
           isPlaying: !state.isPlaying,
       }) 
    }
    
    const handleRewind = () => {
        videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() - 10)
    }

    const handleFastForward = () => {
        videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() + 10)
    }
    
    const handleMute = () => {
        setState({
            ...state,
            isMute: !state.isMute,
        })
    }
    
    const handleVolumeChange = (e, newValue) => {
       setState({
           ...state,
           volume: parseFloat(newValue/100),
           isMute: newValue === 0 ? true : false,
       }) 
    }
    
    const handleVolumeSeekUp = (e, newValue) => {
       setState({
           ...state,
           volume: parseFloat(newValue/100),
           isMute: newValue === 0 ? true : false,
       }) 
        
    }
    
    const handlePlaybackRateChange = (playbackRate) => {
        setState({
            ...state,
            playbackRate,
        })
    }
    
    const handleToggleFullScreen = () => {
        screenfull.toggle(videoContainerRef.current)
        
    }
    
    const handleProgress = (changeState) => {
        if(count > 3) {
            controlsRef.current.style.visibility = "hidden"
            count = 0;
        }
        if(controlsRef.current.style.visibility === "visible"){
            count++;
        }

        if(!seeking){
            setState({
                ...state,
                ...changeState
            })
        }
    }

    const handleSeekChange = (e, newValue) => {
        setState({
            ...state,
            played: parseFloat(newValue/100)
        })
    }

    const handleSeekMouseUp = (e, newValue) => {
        setState({
            ...state,
            seeking: false
        })
        videoPlayerRef.current.seekTo(parseFloat(newValue/100))
    }

    const handleSeekMouseDown = () => {
        setState({
            ...state,
            seeking: true
        })

    }
    
    const handleMouseMove = () => {
        controlsRef.current.style.visibility = "visible"
        count = 0
    }

    const currentTime = videoPlayerRef.current ? videoPlayerRef.current.getCurrentTime() : "00:00"
    const duration = videoPlayerRef.current ? videoPlayerRef.current.getDuration() : "00:00"
    
    const elapsedTime = format(currentTime)
    const totalDuration = format(duration)

    return (        
    <VideoArea 
        onMouseMove={handleMouseMove}
        ref={videoContainerRef}>
        <PlayerWrapper>
            <ReactPlayer url={fileSource}
            ref={videoPlayerRef}
            width="100%"
            height="100%"
            muted={isMute}
            playing={isPlaying}
            volume={volume}
            playbackRate={playbackRate}
            onProgress={handleProgress}
            />
        <PlayerControls
            ref={controlsRef}
            fileName={fileName}
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
            onRewind={handleRewind}
            onFastForward={handleFastForward}
            isMute={isMute}
            onMute={handleMute}
            onVolumeChange={handleVolumeChange}
            onVolumeSeekUp={handleVolumeSeekUp}
            volume={volume}
            playbackRate={playbackRate}
            onPlaybackRateChange={handlePlaybackRateChange}
            onToggleFullScreen={handleToggleFullScreen}
            played={played}
            onSeek={handleSeekChange}
            onSeekMouseUp={handleSeekMouseUp}
            onSeekMouseDown={handleSeekMouseDown}
            elapsedTime={elapsedTime}
            totalDuration={totalDuration}
        />
        </PlayerWrapper>
        
    </VideoArea>
    )
}