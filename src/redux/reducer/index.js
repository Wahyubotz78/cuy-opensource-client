import { combineReducers } from 'redux'
import registerReducer from './register/registerReducer'
import loginReducer from './login/reducerLogin'
import dashboardReducer from './dashboard/dashboardReducer'
import userReducer from './user/userReducer'

export default combineReducers({
    registerReducer,
    loginReducer,
    dashboardReducer,
    userReducer
})