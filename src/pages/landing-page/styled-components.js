import styled from "styled-components";
import { theme } from "../../common/constants/theme";

export const InputArea = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 50%;
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
  padding: 14px 30px;
  font-size: 30px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 15px;
  text-align: center;
  box-sizing: border-box;
  height: 70px; 
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
  width: 67%;
  margin: 0 auto;
`;

export const UploadButton = styled.a`
  padding: 14px 30px;
  margin-left: 15px;
  border-radius: 5px;
  font-size: 30px;
  background-color: ${theme.background};
  color: white;
  cursor: pointer;
`;

export const ClearButton = styled.a`
  margin-left: 15px;
  border-radius: 5px;
  font-size: 30px;
  cursor: ${({ disabled }) => disabled ? "not-allowed": "pointer"};
`;

export const Empty = styled.p`
  text-align: center;
  font-size: 30px;
  width: 100%;
`;

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: pointer;
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