import { sidebarLoading, sidebarSuccess } from '../../action/dashboard/dashboardAction';
import store from '../../store';

export const thunk_sidebar = (data) => {
    store.dispatch(sidebarLoading())
    setTimeout( () => {
        store.dispatch(sidebarSuccess(data))
    }, 100)
};