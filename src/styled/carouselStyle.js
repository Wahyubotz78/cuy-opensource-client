import styled, { keyframes } from "styled-components";

export const zoom = keyframes`
  from {
    transform:scale(0);
  }
  to {
    transform:scale(1);
  }
`;

export const Title = styled.h1`
  font-family: var(--pixel-font);
  text-align: center;
  text-transform: uppercase;
  color: white;
  letter-spacing: 5px;
  font-weight: 400;
`;

export const ImgSlide = styled.img``;

export const Modal = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
`;

export const Caption = styled.div`
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
`;

// .modal-content, .caption {
// -webkit-animation-name: ${zoom};
// -webkit-animation-duration: 0.6s;
// animation-name: ${zoom};
// animation-duration: 0.6s;
// }

export const ModalContent = styled.img`
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const CloseButton = styled.span`
  position: absolute;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;

  &:hover,
  &:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
`;
