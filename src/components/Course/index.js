import React, { useState } from "react";
import {
  CourseHeadingS,
  CourseDetailS,
  CourseDescriptionS,
  CourseRootS,
  CourseTitleS,
} from "styled/courseStyle";
import ReadMore from "components/Helper/ReadMore";
import { jsonRender } from "libs/jsonRenderer";

export default function Course({ courseData }) {
  return <CourseList courseDatas={courseData} />;
}

const CourseItem = (props) => {
  const defaultTextLength = 992;
  const [isReadMore, setReadMore] = useState(false);
  return (
    <CourseDetailS>
      <CourseTitleS>{props.title}</CourseTitleS>
      <CourseDescriptionS
        dangerouslySetInnerHTML={
          isReadMore
            ? jsonRender(props.html)
            : jsonRender(props.html.slice(0, defaultTextLength))
        }
      />
      {props.html.includes("COMING SOON") ? (
        ""
      ) : (
        <ReadMore isReadMore={isReadMore} setReadMore={setReadMore} />
      )}
    </CourseDetailS>
  );
};

const CourseList = ({ courseDatas }) => {
  return (
    <div style={{ marginBottom: 100 }}>
      <CourseHeadingS>Available Courses</CourseHeadingS>
      <CourseRootS>
        {courseDatas.map((courseData, _) => (
          <CourseItem {...courseData} key={_} />
        ))}
      </CourseRootS>
    </div>
  );
};
