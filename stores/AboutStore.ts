import { defineStore } from "pinia";
import type {About} from "~/interfaces/interfaces";
import type {FetchContext} from "ofetch";
import {useUserStore} from "~/stores/UserStore";
export const useAboutStore = defineStore('AboutStore', {
    state: (): About => {
        return {
            _id: 0,
            title: '',
            text: []
        }
    },
    actions: {
        async fetchAbout(): Promise<void> {
            const config = useRuntimeConfig();
            const API_BASE_URL = config.public.apiBase;
            const API_KEY = config.apiKey;
            try {
                let data = await $fetch(`${API_BASE_URL}/about`) as About[];
                if (data.length === 0) {
                    await $fetch(`${API_BASE_URL}/backup/restore`, {
                        onRequest(context: FetchContext): Promise<void> | void {
                            context.options.headers = { ...context.options.headers, 'x-api-key': API_KEY }
                        }
                    });
                    data = await $fetch(`${API_BASE_URL}/about`) as About[];
                }
                this._id = data[0]._id || 0;
                this.title =  data[0].title || '';
                this.text = [...(data[0].text || [])];
            } catch (error: any) {
                console.error(error?.message);
            }
        },
        async saveAbout(): Promise<void> {
            const config = useRuntimeConfig();
            const API_BASE_URL = config.public.apiBase;

            const userStore = useUserStore();
            await $fetch(`${API_BASE_URL}/about/${this._id}`, {
              method: 'PUT',
              body: { title: this.title, text: [...(this.text || [])] },
                onRequest(context: FetchContext): Promise<void> | void {
                    context.options.headers = { ...context.options.headers, 'Authorization': `Bearer ${userStore.encodedJwt}` || '' }
                },
            });
        }
    },
    getters: {
        getTitle(state): string {
            return state.title || '';
        },
        getText(state): Array<string> {
            return state.text || [];
        }
    }
});
