import {
  registerLoading,
  registerSuccess,
  registerFailed,
} from "../../action/register/registerAction";
import { apiRegister } from "../../../api/auth/authApi";
import store from "../../store";

export const thunk_register = (data) => {
  store.dispatch(registerLoading());
  apiRegister(data)
    .then((res) => {
      if (res.data.success) {
        store.dispatch(registerSuccess(res.data.message));
      } else {
        store.dispatch(registerFailed(res.data.message));
      }
    })
    .catch((err) => {
      store.dispatch(registerFailed("data invalid"));
    });
};
