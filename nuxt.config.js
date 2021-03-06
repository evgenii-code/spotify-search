import colors from 'vuetify/es5/util/colors';

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - spotify-search',
        title: 'spotify-search',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{ src: '@/plugins/axios.js' }, { src: '@/plugins/vee-validate' }],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/composition-api',
        '@nuxtjs/eslint-module',
        '@nuxtjs/vuetify',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // '@nuxtjs/auth-next',
    ],

    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                },
            },
        },
    },

    auth: {
        strategies: {
            local: {
                token: {
                    property: false,
                    type: 'Bearer',
                    maxage: 3600,
                },
                redirect: false,
                user: {
                    property: 'user',
                    autoFetch: false,
                },
                endpoints: false,
            },
        },
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: process.env.SPOTIFY_BASE_API_URL, // Used as fallback if no runtime config is provided
    },

    publicRuntimeConfig: {
        axios: {
            browserBaseURL: process.env.SPOTIFY_BASE_API_URL,
        },

        spotifyAuthorizationAPIURL: process.env.SPOTIFY_AUTHORIZATION_API_URL,

        spotifyClientID: process.env.SPOTIFY_CLIENT_ID,
    },

    privateRuntimeConfig: {
        axios: {
            baseURL: process.env.SPOTIFY_BASE_API_URL,
        },

        spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ['vee-validate/dist/rules'],
    },
};
