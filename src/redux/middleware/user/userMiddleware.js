import {
  getUserLoading,
  getUserSuccess,
  getUserFailed,
} from "../../action/user/userAction";
import { apiGetUserById } from "../../../api/user/userApi";
import store from "../../store";

export const thunk_getUser = (data) => {
  store.dispatch(getUserLoading());
  apiGetUserById(data)
  .then((res) => {
      if (res.data.success) {
        store.dispatch(getUserSuccess(res.data.data));
      } else {
        store.dispatch(getUserFailed());
      }
    })
    .catch((err) => {
      store.dispatch(getUserFailed());
    });
};
