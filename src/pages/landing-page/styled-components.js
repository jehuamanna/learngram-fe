import styled from "styled-components";
import { theme } from "../../common/constants/theme";

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
  justify-content: center;
  margin: 50px 0;
`;

export const VideoListArea = styled.div` 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
`;

export const UploadButton = styled.a`
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

export const ClearButton = styled.div`
  font-size: 30px;
  position: absolute;
  cursor: pointer;
  right: 20px;
  top: 18px;
  left: calc( 800px + (75vw - 800px) / 2 - 80px );
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