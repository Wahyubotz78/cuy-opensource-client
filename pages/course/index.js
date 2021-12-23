import React, { useEffect } from "react";
import Course from "components/Course/index.js";
import { getPostByTag, getSetting } from "libs/gcms";

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
