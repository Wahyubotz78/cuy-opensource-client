import { request } from "../../libs/request";

export const apiGetAllUser = async () => {
  return await request.getAllUser();
};

export const apiGetUserById = async (data) => {
  return await request.getUserById(data);
};

export const apiGetUserByKey = async (data) => {
  return await request.getUserByKey(data);
};

export const apiUpdateUser = async (data) => {
  return await request.updateUser(data);
};

export const apiChangePhone = async (data) => {
  return await request.changePhone(data);
};

export const apiChangePassword = async (data) => {
  return await request.changePassword(data);
};

export const apiForgotPassword = async (data) => {
  return await request.forgotPassword(data);
};

export const apiDeleteUser = async (data) => {
  return await request.deleteUser(data);
};
