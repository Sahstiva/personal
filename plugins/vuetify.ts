import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        theme: {
            defaultTheme: 'dark'
        },
        defaults: {
            VBtn: {
                style: 'text-transform: none;',
            },
        }});
    app.vueApp.use(vuetify)
})
