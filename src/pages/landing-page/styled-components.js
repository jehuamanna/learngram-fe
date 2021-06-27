import styled from "styled-components";
import { theme } from "../../common/constants/theme";
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const playerBackground = "#b1b0b0";
const playerColor = "purple";

export const InputArea = styled.div`
  margin: 50px 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: calc( 800px + (75vw - 800px) / 2 );
  border: 1px solid ${theme.background};
  border-radius: 10px;
  padding: 30px;
  font-size: 26px;
  font-weight: 600;
  color: #666;
  height: 70px;
  box-sizing: border-box;
  padding: 20px;
  outline: none;
`;

export const StyledLabel = styled.label`
  background-color: ${theme.background};
  color: white;
  padding: 22px 0px;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  height: 70px;
  width: 200px; 
`;

export const VideoArea = styled.div` 
  display: flex;
  max-width: 800px;
  justify-content: center;
  margin: 50px auto;
`;

export const VideoListArea = styled.div` 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
`;

export const UploadButton = styled.div`
  background-color: ${theme.background};
  color: white;
  padding: 22px 0px;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  height: 70px;
  width: 200px;
  display: flex;
  justify-content: space-evenly;
  
`;

export const ClearButton = styled.div`
  font-size: 30px;
  position: absolute;
  cursor: pointer;
  right: 20px;
  top: 18px;
`;

export const Empty = styled.p`
  text-align: center;
  font-size: 30px;
  width: 100%;
`;

export const Container = styled.div`
  width: 75vw;
  margin: 0px auto;
`;

export const Thumb = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  border-radius: 15px;
  margin-bottom: 10px;
  font-size: 25px;
  color: ${theme.background};
`;

export const Tray = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  color: red;
`;

export const Input = styled.div`
  position: relative;
  display: flex;
  outline: none;
  width: 75%;
  font-size: 26px;
  height: 70px;
  box-sizing: border-box;
`;

export const ThumbnailContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: pointer;
`;


export const VideoDisplayArea = styled.div`
  height: 650px;
  width: 100%;
`;


export const UploadingLoader = styled.div`
  display: flex;
`;

export const PlayerWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const  ControlsWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`;

export const TopControls = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const MidControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BottomControls = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 15px;
`;

export const VideoTitle = styled.div`
  color: ${playerBackground};
  font-weight: 700;
`;

export const BookmarkButton = styled.div`
  display: flex;
  width: 135px;
  height: 30px;
  color: ${playerColor};
  justify-content: space-evenly;
  align-items: center;
  background: ${playerBackground};
  border-radius: 3px;
`;

export const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  color: ${playerBackground};
  font-size: 30px;
  transform: scale(0.9);
  margin: 0px 10px;
  &:hover {
    color: ${playerColor};
    transform: scale(1);
  };
`;

export const ControlsBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LeftBottomIcons = styled.div`
  display: flex;
  align-items: center;
`;

export const RightBottomIcons = styled.div`
  display: flex;
  align-items: center;
`;

export const BottomFontAwesomeStyledIcons = styled(FontAwesomeIcon)`
  color: ${playerBackground};
  margin: 0px 10px;
  &:hover {
    color: ${playerColor};
  };
`;

export const TimeLapsed = styled.h4`
  color: ${playerBackground};
  font-weight: 300;
  font-size: 15px;
  margin: 0px 20px;
`;

export const PlaybackSpeed= styled.h4`
  color: ${playerBackground};
  font-weight: 700;
  font-size: 15px;
  margin: 0px 20px;
  cursor: pointer;
  &:hover {
    color: ${playerColor};
  };
`;