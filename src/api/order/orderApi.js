import { request } from "../../libs/request";

export const apiCreateOrder = async (data) => {
  return await request.createOrder(data);
};

export const apiGetAllOrderByMember = async (data) => {
  return await request.getAllOrderByMember(data);
};

export const apiGetOrderById = async (data) => {
  return await request.getOrderById(data);
};

export const apiUpdateOrder = async (data) => {
  return await request.updateOrder(data);
};

export const apiUpdateOrderSimulate = async (data) => {
  return await request.updateOrderSimulate(data);
};
