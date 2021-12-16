import { SIDEBAR_LOADING, SIDEBAR_SUCCESS, SIDEBAR_FAILED } from '../../constan/dashboard/dashboardConstan'
  
const initState = {
    sidebar: 'profile',
    Loading: false,
    Error: false,
};
  
    const dashboardReducer = (state = initState, action) => {
        switch (action.type) {
        case SIDEBAR_LOADING:
            return Object.assign({}, state, {
                Loading: true
            });
    
        case SIDEBAR_SUCCESS:
            return Object.assign({}, state, {
                Loading: false,
                sidebar: action.data
            });
    
        case SIDEBAR_FAILED:
            return Object.assign({}, state, {
                Loading: false,
                Error: true
            });
    
        default:
            return state;
        }
    };
  
  export default dashboardReducer;