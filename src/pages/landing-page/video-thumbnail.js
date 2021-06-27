import React from "react";
import Play from "../../common/assets/icons/play.svg";
import {
  ThumbnailContainer,
  Thumb,
  Tray
} from "./styled-components"


export const VideoThumbnail = ({ title, deleteAction, onClick }) => {

  return (
    <ThumbnailContainer>
      <Thumb onClick={onClick}>
        <p>{title}</p>
        <img src={Play} width={30} style={{filter: "invert(38%) sepia(45%) saturate(6575%) hue-rotate(226deg) brightness(97%) contrast(98%)"}}alt="play" />
      </Thumb>
      <Tray>
      </Tray>
    </ThumbnailContainer>
  );
}
