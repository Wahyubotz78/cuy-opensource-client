import React from "react";
import {
  CourseHeadingS,
  CourseCardContentS,
  CourseTitleS,
  CourseDescriptionS,
  CourseCardInfoS,
  CourseButtonCardS,
} from "styled/courseStyle";
import GoToHome from "../GoToHome";
import { jsonRender } from "libs/jsonRenderer";

export default function Course({ courseData }) {
  return (
    <div>
      <CourseHeadingS>Available Courses</CourseHeadingS>
      {courseData.map((data, i) => {
        return (
          <CourseCardContentS key={i}>
            <CourseCardInfoS>
              <CourseTitleS>
                {data.title} | {data.meta_description}
              </CourseTitleS>
              <CourseDescriptionS
                dangerouslySetInnerHTML={jsonRender(data.html)}
              ></CourseDescriptionS>
              <CourseButtonCardS as="a" href="/course/journey-1">
                JOIN
              </CourseButtonCardS>
            </CourseCardInfoS>
          </CourseCardContentS>
        );
      })}
      <GoToHome />
    </div>
  );
}
