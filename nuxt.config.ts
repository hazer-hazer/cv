// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true,
        timeline: {
            enabled: true,
        },
    },
    ssr: false,
    sourcemap: true,
    modules: [
        'nuxt-quasar-ui',
        '@nuxtjs/i18n',
    ],
    css: [
        '~/assets/scss/main.scss',
    ],
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ru'],
        vueI18n: './i18n.config.ts',
    },
    quasar: {
        extras: {
            animations: 'all',
            fontIcons: [
                'material-icons',
                'mdi-v7',
                'ionicons-v4', // last webfont was available in v4.6.3
                'eva-icons',
                'fontawesome-v6',
                'themify',
                'line-awesome',
                'bootstrap-icons',
            ],
        },
    },
    router: {
        options: {
            scrollBehaviorType: 'smooth',
        },
    },
    app: {
        baseURL: '/cv/',
        head: {
            title: 'Ivan Gordeev CV',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Ivan Gordeev CV' },
            ],
            link: [
                { rel: 'icon', type: 'image/ico', href: '/cv/favicon.ico' },
            ],
        },
    },
})
