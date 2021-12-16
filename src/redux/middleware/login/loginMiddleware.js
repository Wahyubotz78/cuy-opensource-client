import { loginLoading, loginSuccess, loginFailed } from '../../action/login/loginAction';
import { api_login } from '../../../api/login/loginApi'
import store from '../../store'

export const thunk_login = (data) => {
    store.dispatch(loginLoading())
    api_login(data).then( (res) => {
        if(res.data.success){
            store.dispatch(loginSuccess(res.data.data))
        }else{
            store.dispatch(loginFailed(res.data.message))
        }
    }).catch( err => {
        store.dispatch(loginFailed('data invalid'))
    })
};