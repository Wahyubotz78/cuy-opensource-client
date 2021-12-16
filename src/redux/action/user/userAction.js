import { GET_USER_BY_ID_LOADING, GET_USER_BY_ID_SUCCESS, GET_USER_BY_ID_FAILED } from '../../constan/user/userConstan'
  
export const getUserLoading = () => {
    return {
      type: GET_USER_BY_ID_LOADING,
    };
};
  
export const getUserSuccess = (data) => {
    return {
      type: GET_USER_BY_ID_SUCCESS,
      data: data
    };
};
  
export const getUserFailed = () => {
    return {
      type: GET_USER_BY_ID_FAILED
    };
};