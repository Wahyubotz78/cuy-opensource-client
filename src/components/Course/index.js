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
    <div>
      <CourseHeadingS>Available Courses</CourseHeadingS>
      <CourseRootS>
        {courseData.map((data, i) => {
          return (
            <CourseDetailS key={i}>
              <CourseTitleS>
                {data.title} | {data.meta_description}
              </CourseTitleS>
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
