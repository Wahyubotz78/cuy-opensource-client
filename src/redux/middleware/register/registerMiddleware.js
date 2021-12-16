import { registerLoading, registerSuccess, registerFailed } from '../../action/register/registerAction';
import { api_register } from '../../../api/register/registerApi'
import store from '../../store'

export const thunk_register = (data) => {
    store.dispatch(registerLoading())
    api_register(data).then( (res) => {
        if(res.data.success){
            store.dispatch(registerSuccess(res.data.message))
        }else{
            store.dispatch(registerFailed(res.data.message))
        }
    }).catch( err => {
        store.dispatch(registerFailed('data invalid'))
    })
};