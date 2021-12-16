import { REGISTER_LOADING, REGISTER_SUCCESS, REGISTER_FAILED } from '../../constan/register/registerConstan'
  
const initState = {
    Loading: false,
    Error: false,
    message: '',
};
  
    const registerReducer = (state = initState, action) => {
        switch (action.type) {
        case REGISTER_LOADING:
            return Object.assign({}, state, {
                Loading: true,
            });
    
        case REGISTER_SUCCESS:
            return Object.assign({}, state, {
                Loading: false,
                message: action.data,
            });
    
        case REGISTER_FAILED:
            return Object.assign({}, state, {
                Loading: false,
                Error: true,
                message: action.message,
            });
    
        default:
            return state;
        }
    };
  
  export default registerReducer;