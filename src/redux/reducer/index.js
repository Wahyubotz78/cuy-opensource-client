import { combineReducers } from 'redux'
import registerReducer from './register/registerReducer'
import loginReducer from './login/reducerLogin'

export default combineReducers({
    registerReducer,
    loginReducer
})