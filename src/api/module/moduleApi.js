import { request } from "../../libs/request";

export const apiCreateModule = async (data) => {
  return await request.createModule(data);
};

export const apiGetAllModule = async () => {
  return await request.getAllModule();
};

export const apiGetModuleById = async (data) => {
  return await request.getModuleById(data);
};

export const apiUpdateModule = async (data) => {
  return await request.updateModule(data);
};

export const apiDeleteModule = async (data) => {
  return await request.deleteModule(data);
};
