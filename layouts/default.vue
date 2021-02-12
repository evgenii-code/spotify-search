<template>
    <v-app dark>
        <v-main>
            <v-container fluid fill-height class="pa-md-0">
                <Nuxt />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import btoa from 'btoa';

export default {
    async fetch() {
        const {
            spotifyAuthorizationAPIURL,
            spotifyClientID,
            spotifyClientSecret,
        } = this.$config;
        const base64EncodedToken = btoa(
            spotifyClientID + ':' + spotifyClientSecret
        );

        const body = 'grant_type=client_credentials';

        const headers = {
            // eslint-disable-next-line prettier/prettier
            'Authorization': `Basic ${base64EncodedToken}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        };

        await this.$store.dispatch('token/fetchAuthToken', {
            spotifyAuthorizationAPIURL,
            body,
            headers,
        });
    },
};
</script>

<style>
html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}

.layout {
    position: relative;
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
}
</style>
