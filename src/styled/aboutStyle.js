import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  background-color: #222;
  opacity: 0.9;
  height: auto;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const BoxImage = styled.div`
  margin: 15px;
  padding: 25px;
  text-align: center;
  border: 1px solid #f7f7f7;
  :hover {
    border: 1px solid orange;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Image = styled.img`
  background-image: url(${({ background }) => background});
  max-width: 100%;
  max-width: 100%;
  :hover {
    transform: rotateZ(2deg);
    transition: 0.5s;
  }
`;

export const ImageTitle = styled.p`
  color: #fff;
  margin-top: 20px;
`;
