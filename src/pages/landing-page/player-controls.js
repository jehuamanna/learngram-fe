import React,{ forwardRef, useEffect, useState} from 'react';
import {
    ControlsWrapper, 
    TopControls, 
    BottomControls, 
    MidControls,
    VideoTitle,
    BookmarkButton,
    FontAwesomeIconStyled,
    ControlsBar,
    LeftBottomIcons,
    BottomFontAwesomeStyledIcons,
    TimeLapsed,
    RightBottomIcons,
    PlaybackSpeed,
} from './styled-components'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBookmark,
    faFastForward,
    faFastBackward,
    faPlay,
    faPause,
    faVolumeUp,
    faVolumeOff,
    faVolumeMute,
    faExpand,
} from '@fortawesome/free-solid-svg-icons'
import { CustomPrettoSlider, VolumeSlider, CustomPopOver } from './pretto-slider';

export const PlayerControls = forwardRef((props, ref) => {
    const {
        onPlayPause,
        isPlaying,
        onRewind,
        onFastForward,
        isMute,
        onMute,
        onVolumeSeekUp,
        onVolumeChange,
        volume,
        playbackRate,
        onPlaybackRateChange,
        onToggleFullScreen,
        played,
        onSeek,
        onSeekMouseUp,
        onSeekMouseDown,
        elapsedTime,
        totalDuration,
        fileName,
    } = props
    const [handlePopOverFn, setHandlePopOverFn] = useState(null)
    const handleClick = (e) => {
        console.log(handlePopOverFn)
        handlePopOverFn(e.currentTarget)
    }
        
    return (
        <ControlsWrapper ref={ref}>
            <TopControls>
                <VideoTitle>
                    {fileName}
                </VideoTitle>
                <BookmarkButton>
                    <FontAwesomeIcon icon={faBookmark}/>
                    <h3>Bookmark</h3>
                </BookmarkButton>
            </TopControls>
            <MidControls>
                <FontAwesomeIconStyled 
                    icon={faFastBackward}
                    onClick={onRewind}
                />
                {isPlaying ? 
                <FontAwesomeIconStyled 
                    icon={faPause}
                    onClick={onPlayPause}
                />:
                <FontAwesomeIconStyled 
                    icon={faPlay}
                    onClick={onPlayPause}
                />}
                <FontAwesomeIconStyled 
                    icon={faFastForward}
                    onClick={onFastForward}
                />
            </MidControls>
            <BottomControls>
                <CustomPrettoSlider 
                    played={played}
                    onSeek={onSeek}
                    onSeekMouseDown={onSeekMouseDown}
                    onSeekMouseUp={onSeekMouseUp}
                    elapsedTime={elapsedTime}
                />
                <ControlsBar>
                    <LeftBottomIcons>
                        {isPlaying ? 
                        <BottomFontAwesomeStyledIcons 
                            icon={faPause} 
                            onClick={onPlayPause}
                        /> :
                        <BottomFontAwesomeStyledIcons 
                            icon={faPlay} 
                            onClick={onPlayPause}
                        />}
                        {isMute ? 
                        <BottomFontAwesomeStyledIcons 
                            icon={faVolumeMute}
                            onClick={onMute}
                        />:
                        <BottomFontAwesomeStyledIcons 
                            icon={faVolumeUp}
                            onClick={onMute}
                        />}
                        <VolumeSlider 
                            onVolumeChange={onVolumeChange}
                            onVolumeSeekUp={onVolumeSeekUp}
                            volume={volume}
                        />
                        <TimeLapsed>{elapsedTime}/{totalDuration}</TimeLapsed> 
                    </LeftBottomIcons> 
                    <RightBottomIcons>
                        <PlaybackSpeed 
                            onClick={handleClick}
                            >{playbackRate}X</PlaybackSpeed>
                        <CustomPopOver 
                            onPlaybackRateChange={onPlaybackRateChange}
                            playbackRate={playbackRate}
                            setHandlePopOverFn={setHandlePopOverFn} 
                            />
                        <BottomFontAwesomeStyledIcons 
                            icon={faExpand}
                            onClick={onToggleFullScreen}
                            />
                    </RightBottomIcons>
                </ControlsBar>
            </BottomControls>
        </ControlsWrapper>
    )
})