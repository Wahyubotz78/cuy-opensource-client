import { request } from "../../libs/request";

export const apiLogin = async (data) => {
  return await request.login(data);
};

export const apiRegister = async (data) => {
  return await request.register(data);
};
