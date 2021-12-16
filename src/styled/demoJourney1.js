import styled from "styled-components";

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 400px;
  margin-bottom: 50px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const CardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;
  ::-webkit-outer-spin-button ;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    border-bottom-color: orange;
    outline: 0;
  }
`;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #000000;
  background-color: ${({ theme }) => theme.primaryHover};
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  @media (max-width: 765px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  background: #444;
  margin: 10px;
  padding: 25px 12px 18px;
  border: 2px solid black;
`;

export const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-weight: 500;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Images = styled.img`
  width: 50%;
  height: 50%;
`;

export const SubTitle = styled.p`
  color: #fff;
  font-weight: 500;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Description = styled.div`
  color: #fff;
  font-weight: 400;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

export const Detail = styled.p`
  color: #fff;
  font-weight: 400;
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const Actions = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    & button {
      width: 100%;
      margin-bottom: 4px;
    }
  }
`;

export const ActionChild = styled.button`
  display: block;
  width: 50%;
  margin: 0 auto;
  margin-top: 10px;
  padding: 12px 0;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  background-color: ${({ theme }) => theme.primaryHover};
  border: 0;
  border-radius: 20px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -1px);
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: ${(props) => `1px solid ${props.theme.primaryLight}`};
`;
