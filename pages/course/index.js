import React, { useEffect } from "react";
// import Course from "components/Course/index.js";
import { Course } from "../../src/components/LazyComponents";

import { getPostByTag, getSetting } from "../../src/libs/gcms";

export const getStaticProps = async () => {
  const { navigation } = (await getSetting()) || "";
  const courses = (await getPostByTag("course")) || "";
  return {
    props: {
      courses,
      navigation,
    },
  };
};

export default function CoursePage({ navigation, courses }) {
  useEffect(() => {
    NProgress.inc();
    NProgress.done();
  }, []);
  return <Course courseData={courses} navigationData={navigation} />;
}
