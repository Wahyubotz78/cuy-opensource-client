import { SIDEBAR_LOADING, SIDEBAR_SUCCESS, SIDEBAR_FAILED } from '../../constan/dashboard/dashboardConstan'
  
export const sidebarLoading = () => {
    return {
      type: SIDEBAR_LOADING,
    };
};
  
export const sidebarSuccess = (data) => {
    return {
      type: SIDEBAR_SUCCESS,
      data: data,
    };
};
  
export const sidebarFailed = () => {
    return {
      type: LOGIN_FAILED
    };
};