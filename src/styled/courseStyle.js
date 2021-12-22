import styled from "styled-components";

export const CourseHeadingS = styled.h1`
  letter-spacing: 5px;
  font-weight: 400;
  color: azure;
  text-align: center;
  padding: 10px;
`;

export const CourseCardContentS = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-flow: column wrap;
    justify-content: flex-start;
  }
`;

export const CourseCardInfoS = styled.div`
  color: white;
  width: 31%;
  margin: 5px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    padding: 16px;
  }
`;

export const CourseTitleS = styled.h3`
  letter-spacing: 1px;
  font-weight: 400;
  color: azure;
  text-align: center;
  background: rgba(10, 0, 0, 0.2);
  border-bottom: 2px solid orange;
  border-radius: 10px 10px 0 0;
  padding: 20px;
`;

export const CourseDescriptionS = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  padding: 20px;
  height: auto;
  border-radius: 0 0 10px 10px;
  background: rgba(100, 100, 100, 0.2);
  p {
    font-family: "Arial";
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.05em;
    font-size: 1.2em;
    margin: 0;
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
    &:hover {
      box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
      transform: translate(0, -1px);
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin: 10px auto;
      width: 100%;
      text-align: center;
    }

  }
  a {
    color: #000;
    font-size: 16px;
    text-decoration: none;
    letter-spacing: 1px;
  }
`;
