import React, { useEffect } from "react";
import CourseRegistration from "components/Course/registration";
import { getSetting } from "libs/gcms";

export const getStaticProps = async () => {
  const { navigation } = (await getSetting()) || "";
  return {
    props: {
      navigation,
    },
  };
};

export default function CourseRegistrationPage({ navigation }) {
  useEffect(() => {
    NProgress.inc();
    NProgress.done();
  }, []);
  return (
    <CourseRegistration registrationData={""} navigationData={navigation} />
  );
}
