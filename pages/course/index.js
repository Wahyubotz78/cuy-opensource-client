import React, { useEffect } from "react";
import Course from "components/Course/index.js";
import { getPostByTag } from "libs/gcms";

export const getStaticProps = async () => {
  const courses = (await getPostByTag("course")) || "";
  return {
    props: {
      courses,
    },
  };
};

export default function CoursePage({ courses }) {
  useEffect(() => {
    NProgress.inc();
    NProgress.done();
  }, []);
  return <Course courseData={courses} />;
}
