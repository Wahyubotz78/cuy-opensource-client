import styled from "styled-components";

export const CourseRootS = styled.section`
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
  background: rgba(20, 20, 20, 0.7);
  border-bottom: 2px solid orange;
  border-radius: 0px 0px 20px 20px;

  p,
  code,
  pre {
    font-family: "Arial";
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.05em;
    font-size: 1.2em;
    white-space: pre-wrap;
  }

  figure {
    width: 100%;
  }

  img {
    max-width: 100%;
    height: auto;
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
    p,
    code,
    pre {
      font-size: 16px;
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

export const CourseMessageS = styled.p`
  text-align: center;
  color: azure;
  font-family: "Arial";
  font-style: italic;
  margin-top: -20px;
  margin-bottom: 30px;
`;

export const CourseTitleS = styled.h2`
  letter-spacing: 1px;
  font-weight: 400;
  color: azure;
  background: rgba(22, 22, 22, 0.9);
  text-align: center;
  padding: 10px;
  border-bottom: 2px solid orange;
  border-radius: 20px 20px 0 0;
`;

export const CourseFormContainerS = styled.div`
  background: #f8f4e5;
  max-width: 500px;
  padding: 50px;
  margin: 0 auto;
  border: 2px solid rgba(0, 0, 0, 1);
  box-shadow: 15px 15px 1px orange;
  input {
    display: block;
    font-size: 22px;
    width: 100%;
    line-height: 50px;
    margin-bottom: 10px;
    border: none;
    border-bottom: 5px solid rgba(0, 0, 0, 0.5);
    background: #f8f4e5;
    min-width: 250px;
    padding-left: 5px;
    outline: none;
    color: rgba(0, 0, 0, 1);
  }

  input:focus {
    border-bottom: 5px solid orange;
    background: #f7f7f7;
  }

  button {
    display: block;
    margin: 0 auto;
    margin-top: 25px;
    padding: 10px 50px;
    letter-spacing: 2px;
    transition: 0.2s all ease-in-out;
    outline: none;
    font-size: 20px;
    border: 1px solid rgba(0, 0, 0, 1);
    box-shadow: 3px 3px 1px 1px rgba(0, 0, 0, 1);
  }
  &:hover {
    color: white;
  }

  ::selection {
    background: #f0eae1;
  }

  input:-webkit-autofill {
  }
  input:-webkit-autofill:hover {
    background: #f8f4e5;
    color: white;
    border: 1px solid rgba(0, 0, 0, 1);
  }
  input:-webkit-autofill:focus {
    border-bottom: 5px solid orange;
    -webkit-text-fill-color: orange;
    -webkit-box-shadow: 0 0 0px 1000px f8f4e5 inset;
    transition: 2s ease-in-out 0s;
  }
`;
