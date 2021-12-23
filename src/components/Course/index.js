import React from "react";
import {
  CourseHeadingS,
  CourseDetailS,
  CourseDescriptionS,
  CourseRootS,
  CourseTitleS,
} from "styled/courseStyle";
import GoToHome from "../GoToHome";
import { jsonRender } from "libs/jsonRenderer";

export default function Course({ courseData }) {
  return (
    <div style={{ marginBottom: 100 }}>
      <CourseHeadingS>Available Courses</CourseHeadingS>
      <CourseRootS>
        {courseData.map((data, i) => {
          return (
            <CourseDetailS key={i}>
              <CourseTitleS>{data.title}</CourseTitleS>
              <CourseDescriptionS
                dangerouslySetInnerHTML={jsonRender(data.html)}
              />
            </CourseDetailS>
          );
        })}
      </CourseRootS>
      <GoToHome />
    </div>
  );
}
