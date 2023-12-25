import { defineStore } from "pinia";
import type {User} from "~/interfaces/interfaces";
import jwtDecode from "jwt-decode";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export const useUserStore = defineStore('UserStore', {
    state: (): User => {
        return {
            email: '',
            isAdmin: false,
            isAuthorized: false,
            encodedJwt: ''
        }
    },
    actions: {
        async logout(): Promise<boolean> {
            const config = useRuntimeConfig();
            const API_BASE_URL = config.public.apiBase;
            try {
                const token = localStorage.getItem('token') || '';
                const {email} = <User>jwtDecode(token);
                await $fetch(`${API_BASE_URL}/user/logout`, {
                    method: 'POST',
                    body: {email},
                    onRequest(context) {
                        context.options.headers = {...context.options.headers, 'Authorization': token || ''}
                    },
                });
                this.isAdmin = false;
                this.email = '';
                this.isAuthorized = false;
                this.encodedJwt = '';
                localStorage.clear();
                toast("Successfully logged out", {"type": "success"});
                return false;
            } catch (error: any) {
                console.error('Failed to log out: ', error?.message);
                toast("Failed to log out", {"type": "error"});
                return true;
            }
        },
        async login(userName: string, password: string): Promise<boolean> {
            const config = useRuntimeConfig();
            const API_BASE_URL = config.public.apiBase;
            const authorizationHeader = ref<string>('');
            try {
                await $fetch(`${API_BASE_URL}/user/login`, {
                    method: 'POST',
                    body: { email: userName, password },
                    onResponse(context) {
                        authorizationHeader.value = context.response.headers.get('Authorization') || '';
                    },
                });
                const {email, isAdmin} = <User>jwtDecode(authorizationHeader.value);
                this.isAdmin = isAdmin || false;
                this.email = email || '';
                this.isAuthorized = true;
                this.encodedJwt = authorizationHeader.value;
                localStorage.setItem('token', this.encodedJwt);
                toast("Successfully authenticated", {"type": "success"});
                return true;
            } catch (error: any) {
                this.isAuthorized = false;
                toast("The user or password was incorrect", {"type": "error"});
                console.error(error?.message);
                return false;
            }
        },
        getUserLocalStorage(): void {
            try {
                const token = localStorage.getItem('token');
                if(token) {
                    const {email, isAdmin} = <User>jwtDecode(token);
                    this.isAdmin = isAdmin || false;
                    this.email = email || ''
                    this.isAuthorized = true;
                    this.encodedJwt = token;
                }
            } catch (error: any) {
                this.isAdmin = false;
                this.email = '';
                this.isAuthorized = false;
                this.encodedJwt = '';
            }
        }
    },
    getters: {
        getIsAdmin(state): boolean {
            return state.isAdmin || false;
        },
        getIsAuthorized(state): boolean {
            return state.isAuthorized || false;
        },
        getToken(state): string {
            return state.encodedJwt || '';
        }
    }
});
