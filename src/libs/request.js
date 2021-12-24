import axiosConfig from "./axiosConfig";

export const request = {
  // members endpoint
  login: (data) => axiosConfig.post(`login`, { data }),
  register: (data) => axiosConfig.post(`register`, { data }),
  getAllUser: () => axiosConfig.get(`get/members`),
  getUserById: (data) => axiosConfig.post(`get/member/id`, { data }),
  getUserByKey: (data) => axiosConfig.post(`get/member/`, { data }),
  updateMember: (data) => axiosConfig.put(`update/member`, { data }),
  changePhone: (data) => axiosConfig.put(`change/phone`, { data }),
  changePassword: (data) => axiosConfig.put(`change/password`, { data }),
  forgotPassword: (data) => axiosConfig.put(`forgot/password`, { data }),
  deleteMember: (data) => axiosConfig.delete(`delete/member`, { data }),

  // courses endpoint
  createCourse: (data) => axiosConfig.post(`course`, { data }),
  updateCourse: (data) => axiosConfig.put(`course`, { data }),
  getAllCourse: () => axiosConfig.get(`course/find`),
  getCourceById: (data) => axiosConfig.post(`course/findone`, { data }),
  getCourceByStatus: (data) => axiosConfig.post(`course/status`, { data }),
  deleteCource: (data) => axiosConfig.delete(`course`, { data }),

  // modules endpoint
  createModule: (data) => axiosConfig.post(`module`, { data }),
  updateModule: (data) => axiosConfig.put(`module`, { data }),
  getAllModule: () => axiosConfig.get(`module`),
  getModuleById: (data) => axiosConfig.post(`module/findone`, { data }),
  deleteModule: (data) => axiosConfig.delete(`module`, { data }),

  // members-course endpoint
  createMemberCourse: (data) => axiosConfig.post(`member-course`, { data }),
  updateMemberCourse: (data) => axiosConfig.put(`member-course`, { data }),
  getMemberCourseById: (data) =>
    axiosConfig.post(`member-course/findone`, { data }),
  deleteMemberCourse: (data) => axiosConfig.delete(`member-course`, { data }),

  // orders endpoint
  createOrder: (data) => axiosConfig.post(`order/create`, { data }),
  getOrderById: (data) => axiosConfig.post(`order/findone`, { data }),
  updateOrder: (data) => axiosConfig.put(`order/status`, { data }),
  updateOrderSimulate: (data) => axiosConfig.put(`order/simulate`, { data }),
  getAllOrderByMember: (data) => axiosConfig.post(`order/member`, { data }),
};
