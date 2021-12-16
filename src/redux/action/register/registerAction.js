import { REGISTER_LOADING, REGISTER_SUCCESS, REGISTER_FAILED } from '../../constan/register/registerConstan'
  
export const registerLoading = () => {
    return {
      type: REGISTER_LOADING,
    };
};
  
export const registerSuccess = (data) => {
    return {
      type: REGISTER_SUCCESS,
      data: data,
    };
};
  
export const registerFailed = (message) => {
    return {
      type: REGISTER_FAILED,
      message: message,
    };
};