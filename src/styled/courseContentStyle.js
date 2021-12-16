import styled from "styled-components";

export const StyledContainer = styled.div`
  border: ${(props) => `1px solid ${props.theme.primaryLight}`};
  padding: 25px 12px 18px;
  background: ${(props) => `linear-gradient(
    45deg, ${props.theme.primaryLight}, ${props.theme.primaryLight}
  )`};
`

export const Title = styled.h2`
  color: #000;
  text-align: center;
  font-weight: 500;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
`

export const Images = styled.img`
  width: 50%;
  height: 50%;
`

export const SubTitle = styled.p`
  color: #000;
  font-weight: 500;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`

export const Description = styled.div`
  color: #333;
  font-weight: 400;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`

export const Detail = styled.p`
  color: #333;
  font-weight: 400;
  @media (max-width: 500px) {
    font-size: 12px;
  }
`

export const Actions = styled.div`
  color: #000;
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
`

export const ActionChild = styled.button`
    display: block;
    width: 30%;
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
    transition: all 0.20s cubic-bezier(0.02, 0.01, 0.47, 1);

    &:hover {
        box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
        transform: translate(0, -1px);
    }
    @media (max-width: 500px) {
      width: 100%;  
  }
`

export const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: ${(props) => `1px solid ${props.theme.primaryLight}`};
`