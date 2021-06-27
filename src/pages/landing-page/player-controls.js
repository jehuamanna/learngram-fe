import React,{ useEffect, useState} from 'react';
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
    faExpand,
} from '@fortawesome/free-solid-svg-icons'
import { CustomPrettoSlider, VolumeSlider, CustomPopOver } from './pretto-slider';

export const PlayerControls = (props) => {
    const {
        onPlayPause
    } = props
    const [handlePopOverFn, setHandlePopOverFn] = useState(null)
    const handleClick = (e) => {
        console.log(handlePopOverFn)
        handlePopOverFn(e.currentTarget)
    }
        
    return (
        <ControlsWrapper>
            <TopControls>
                <VideoTitle>
                    ColdPlay
                </VideoTitle>
                <BookmarkButton>
                    <FontAwesomeIcon icon={faBookmark}/>
                    <h3>Bookmark</h3>
                </BookmarkButton>
            </TopControls>
            <MidControls>
                <FontAwesomeIconStyled icon={faFastBackward}/>
                <FontAwesomeIconStyled 
                    icon={faPlay}
                    onClick={onPlayPause}
                    />
                <FontAwesomeIconStyled icon={faFastForward}/>
            </MidControls>
            <BottomControls>
                <CustomPrettoSlider />
                <ControlsBar>
                    <LeftBottomIcons>
                        <BottomFontAwesomeStyledIcons icon={faPlay} />
                        <BottomFontAwesomeStyledIcons icon={faVolumeUp} />
                        <VolumeSlider />
                        <TimeLapsed>05:07</TimeLapsed> 
                    </LeftBottomIcons> 
                    <RightBottomIcons>
                        <PlaybackSpeed onClick={handleClick}>1X</PlaybackSpeed>
                        <CustomPopOver setHandlePopOverFn={setHandlePopOverFn} />
                        <BottomFontAwesomeStyledIcons icon={faExpand} />
                    </RightBottomIcons>
                </ControlsBar>
            </BottomControls>
        </ControlsWrapper>
    )
}