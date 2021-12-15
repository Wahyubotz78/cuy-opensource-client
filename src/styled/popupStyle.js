import styled from "styled-components";
import Modal  from "styled-react-modal";

export const StyledModal = Modal.styled`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f0Df;
  opacity: 2;
  transition : all 0.3s ease-in-out;
  overflow: hidden;
    padding: 0 0 32px;
    margin: 48px auto 0;
    width: 400px;
    font-family: Quicksand, arial, sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 5px;`
  ;

export const ModalWrapper = styled.div`
  overflow: hidden;
  font-family: Quicksand, arial, sans-serif;
`;