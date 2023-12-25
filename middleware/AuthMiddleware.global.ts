import {useUserStore} from "~/stores/UserStore";
export default defineNuxtRouteMiddleware(to => {
    if (process.client) {
        const store = useUserStore();
        store.getUserLocalStorage();
        return;
    }
});
