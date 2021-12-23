import styled from "styled-components";

export const CourseRootS = styled.div`
  display: flex;
  justify-content: space-evenly;
  letter-spacing: 1px;
  font-weight: 400;
  color: azure;
  margin: 20px;
  padding: 10px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    margin: 5px;
    padding: 2.5px;
  }
`;
export const CourseDetailS = styled.div`
  margin: 20px;
  padding: 10px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 5px;
    padding: 2.5px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
`;

export const CourseDescriptionS = styled.div`
  padding: 20px;
  border-radius: 0 0 10px 10px;
  background: rgba(100, 100, 100, 0.2);
  border-bottom: 2px solid orange;
  border-radius: 0px 0px 20px 20px;
  overflow: hidden;

  p, code, pre {
    font-family: "Arial";
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.05em;
    font-size: 1.2em;
  }

  figure {
    width: 100%;
  }

  figure > img {
    width: 100%;
    height: 100%;
  }

  .kg-button-card {
    background-color: orange;
    border-radius: 50px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    padding: 12px 25px;
    cursor: pointer;
    margin: 15px 0 15px auto;
    text-align: center;
    &:hover {
      box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
      transform: translate(0, -1px);
    }
  }

  a {
    color: #000;
    font-size: 16px;
    text-decoration: none;
    letter-spacing: 1px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 10px;
    width: 100%;
    .kg-button-card {
      margin: 10px auto;
      width: 100%;
    }
    p, code, pre {
      font-size: 18px;
    }
  }
`;

export const CourseHeadingS = styled.h1`
  letter-spacing: 5px;
  font-weight: 400;
  color: azure;
  text-align: center;
  padding: 10px;
`;

export const CourseTitleS = styled.h3`
  letter-spacing: 1px;
  font-weight: 400;
  color: azure;
  background: rgba(22, 22, 22, 0.9);
  text-align: center;
  padding: 10px;
  border-bottom: 2px solid orange;
  border-radius: 20px 20px 0 0;
`;
