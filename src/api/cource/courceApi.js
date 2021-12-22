import { request } from "../../libs/request";

export const apiCreateCourse = async (data) => {
    return await request.createCourse(data);
};

export const apiUpdateCourse = async (data) => {
    return await request.updateCourse(data);
}

export const apiGetallCourse = async () => {
    return await request.getAllCourse();
}

export const apiGetCourceById = async (data) => {
    return await request.getCourceById(data);
}

export const apiGetCourceByStatus = async (data) => {
    return await request.getCourceByStatus(data);
}

export const apiDeleteCource = async (data) => {
    return await request.deleteCource(data);
}
