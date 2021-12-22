import React from "react";
import {
  CourseHeadingS,
  CourseCardContentS,
  CourseTitleS,
  CourseDescriptionS,
  CourseCardInfoS,
} from "styled/courseStyle";
import GoToHome from "../GoToHome";
import { jsonRender } from "libs/jsonRenderer";

export default function Course({ courseData }) {
  return (
    <div>
      <CourseHeadingS>Available Courses</CourseHeadingS>
      <CourseCardContentS>
        {courseData.map((data, i) => {
          return (
            <CourseCardInfoS key={i}>
              <CourseTitleS>
                {data.title} | {data.meta_description}
              </CourseTitleS>
              <CourseDescriptionS
                dangerouslySetInnerHTML={jsonRender(data.html)}
              ></CourseDescriptionS>
            </CourseCardInfoS>
          );
        })}
      </CourseCardContentS>
      <GoToHome />
    </div>
  );
}
