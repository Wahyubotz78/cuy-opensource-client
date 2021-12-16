import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILED } from '../../constan/login/loginConstant'
  
export const loginLoading = () => {
    return {
      type: LOGIN_LOADING,
    };
};
  
export const loginSuccess = (data) => {
    return {
      type: LOGIN_SUCCESS,
      data: data,
    };
};
  
export const loginFailed = (message) => {
    return {
      type: LOGIN_FAILED,
      message: message,
    };
};