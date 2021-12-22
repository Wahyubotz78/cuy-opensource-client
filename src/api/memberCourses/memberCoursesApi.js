import { request } from "../../libs/request";

export const apiCreateMemberCourse = async (data) => {
  return await request.createMemberCourse(data);
};

export const apiGetMemberCourseById = async (data) => {
  return await request.getMemberCourseById(data);
};

export const apiUpdateMemberCourse = async (data) => {
  return await request.updateMemberCourse(data);
};

export const apiDeleteMemberCourse = async (data) => {
  return await request.deleteMemberCourse(data);
};
