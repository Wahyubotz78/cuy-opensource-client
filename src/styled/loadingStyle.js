import styled, { keyframes } from "styled-components";

export const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

export const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Dot = styled.div`
  background-color: ${({ theme }) => theme.primaryDark};
  border-radius: 50%;
  width: 100%;
  height: 10px;
  
  animation: ${BounceAnimation} 1s linear infinite;
  animation-delay: ${props => props.delay};
`;