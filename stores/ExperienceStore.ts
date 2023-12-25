import { defineStore } from "pinia";
import type {Experience, ExperienceItem} from "~/interfaces/interfaces";
import type {FetchContext} from "ofetch";
import {useUserStore} from "~/stores/UserStore";
import {DateTime} from "luxon";
export const useExperienceStore = defineStore('ExperienceStore', {
    state: (): Experience => {
        return {
            _id: 0,
            title: '',
            items: []
        }
    },
    actions: {
        async fetchExperience(): Promise<void> {
            const config = useRuntimeConfig();
            const API_BASE_URL = config.public.apiBase;
            const API_KEY = config.apiKey;
            try {
                let data = await $fetch(`${API_BASE_URL}/experience`) as Experience[];
                if (data.length === 0) {
                    await $fetch(`${API_BASE_URL}/backup/restore`, {
                        onRequest(context: FetchContext): Promise<void> | void {
                            context.options.headers = { ...context.options.headers, 'x-api-key': API_KEY }
                        }
                    });
                    data = await $fetch(`${API_BASE_URL}/experience`) as Experience[];
                }
                this._id = data[0]._id || 0;
                this.title =  data[0].title || '';
                this.items = data[0].items.map((item: any): ExperienceItem => {
                    const startDate = DateTime.fromISO(item.startDate);
                    const endDate = DateTime.fromISO(item.endDate);
                    console.log(startDate, endDate);
                    return {
                        company: item.company,
                        companyLogo: item.companyLogo,
                        load: item.load,
                        position: item.position,
                        startDate: startDate.toFormat('LLL yyyy'),
                        endDate: endDate.toFormat('LLL yyyy'),
                        current: item.current,
                        region: item.region,
                        place: item.place,
                        intro: item.intro,
                        achievements: [...item.achievements],
                        skills: [...item.skills]
                    };
                });
            } catch (error: any) {
                console.error(error?.message);
            }
        },
        async saveExperience(): Promise<void> {
            const config = useRuntimeConfig();
            const API_BASE_URL = config.public.apiBase;

            const userStore = useUserStore();
            await $fetch(`${API_BASE_URL}/about/${this._id}`, {
              method: 'PUT',
              body: { title: this.title, items: [...(this.items || [])] },
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
        getItems(state): Array<ExperienceItem> {
            return state.items || [];
        }
    }
});
