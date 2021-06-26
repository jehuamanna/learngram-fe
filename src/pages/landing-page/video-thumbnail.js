import React from "react";
import Play from "../../common/assets/icons/play.svg";
import {
  Container,
  Thumb,
  Tray
} from "./styled-components"


export const VideoThumbnail = ({ title, deleteAction, onClick }) => {

  return (
    <Container>
      <Thumb onClick={onClick}>
        <p>{title}</p>
        <img src={Play} width={30} alt="play" />
      </Thumb>
      <Tray>
        <a href="#" onClick={deleteAction}>Delete</a>
      </Tray>
    </Container>
  );
}
