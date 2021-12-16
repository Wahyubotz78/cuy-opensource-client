import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILED } from '../../constan/login/loginConstant'
  
const initState = {
    data: null,
    Loading: false,
    Error: false,
    message: '',
};
  
    const loginReducer = (state = initState, action) => {
        switch (action.type) {
        case LOGIN_LOADING:
            return Object.assign({}, state, {
                Loading: true,
            });
    
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                Loading: false,
                data: action.data,
            });
    
        case LOGIN_FAILED:
            return Object.assign({}, state, {
                Loading: false,
                Error: true,
                message: action.message,
            });
    
        default:
            return state;
        }
    };
  
  export default loginReducer;