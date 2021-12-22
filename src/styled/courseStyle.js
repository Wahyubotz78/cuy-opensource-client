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
  justify-content: center;
  justify-items: center;
  display: flex;
  max-width: 100%;
  @media (max-width: 576px) {
    max-width: 100%;
  }
`;

export const CourseCardInfoS = styled.div`
  padding: 20px;
  position: relative;
  width: 100%;
  color: white;
  @media (max-width: 576px) {
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
  line-height: 1.9;
  letter-spacing: 1.2px;
  font-family: "Arial";
  font-size: 16px;
  font-weight: 400;
  padding: 20px;
  border-radius: 0 0 10px 10px;
  background: rgba(100, 100, 100, 0.2);
`;

export const CourseButtonCardS = styled.a`
  background-color: orange;
  border: 0;
  border-radius: 50px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  color: #000;
  font-size: 16px;
  padding: 12px 25px;
  cursor: pointer;
  text-decoration: none;
  position: absolute;
  bottom: 15px;
  right: 9px;
  letter-spacing: 1px;
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -1px);
  }
  @media (max-width: 576px) {
    padding: 7px 16px;
    bottom: 10px;
    right: 10px;
  }
`;
