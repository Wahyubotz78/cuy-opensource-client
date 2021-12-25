import dynamic from "next/dynamic";
import { SpinnerPage } from "../styled/loadingStyle";

const options = {
  loading: () => <SpinnerPage width="100px" height="100px" />,
};

export const Home = dynamic(() => import("../components/Home"), options);

export const PlaygroundLazy = dynamic(
  () => import("../components/Playground"),
  options
);

export const NotFound = dynamic(
  () => import("../components/Helper/NotFound"),
  options
);

export const Login = dynamic(() => import("../components/Login"), options);

export const Register = dynamic(
  () => import("../components/Register"),
  options
);

export const Course = dynamic(() => import("../components/Course"), options);

export const CourseRegistration = dynamic(
  () => import("../components/Course/registration"),
  options
);

// export const Profile = dynamic(() => import("../components/Profile"), options);

// export const Dashboard = dynamic(
//   () => import("../components/Dashboard"),
//   options
// );
