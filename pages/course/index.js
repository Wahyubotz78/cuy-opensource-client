import React, { useEffect } from "react";
import Course from "components/Course/index.js";

export default function CoursePage() {
  useEffect(() => {
    NProgress.inc();
    NProgress.done();
  }, []);
  return <Course />;
}
