import { GET_USER_BY_ID_LOADING, GET_USER_BY_ID_SUCCESS, GET_USER_BY_ID_FAILED } from '../../constan/user/userConstan'
  
const initState = {
    data: null,
    Loading: false,
    Error: false
};
  
    const userReducer = (state = initState, action) => {
        switch (action.type) {
        case GET_USER_BY_ID_LOADING:
            return Object.assign({}, state, {
                Loading: true,
            });
    
        case GET_USER_BY_ID_SUCCESS:
            return Object.assign({}, state, {
                Loading: false,
                data: action.data,
            });
    
        case GET_USER_BY_ID_FAILED:
            return Object.assign({}, state, {
                Loading: false,
                Error: true,
            });
    
        default:
            return state;
        }
    };
  
  export default userReducer;