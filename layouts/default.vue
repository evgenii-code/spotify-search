<template>
    <div>
        <Nuxt />
    </div>
</template>

<script>
import btoa from 'btoa';

export default {
    fetch() {
        const {
            spotifyAuthorizationAPIURL,
            spotifyClientID,
            spotifyClientSecret,
        } = this.$config;

        const base64EncodedToken = btoa(
            spotifyClientID + ':' + spotifyClientSecret
        );

        this.$axios
            .post(spotifyAuthorizationAPIURL, 'grant_type=client_credentials', {
                headers: {
                    // eslint-disable-next-line prettier/prettier
                    'Authorization': `Basic ${base64EncodedToken}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
            .then(({ data }) => {
                // const {
                //     // token_type: tokenType,
                //     access_token: accessToken,
                // } = data;

                console.log('data', data);

                // console.log('$auth.token', this.$auth.token);

                // return this.$auth.setUserToken(accessToken);
                // this.$store.dispatch('token/setAccessToken', { accessToken });
                // this.$store.dispatch('token/setTokenType', { tokenType });
            })
            .catch((error) => console.log('HERE!!!!!! error', error));
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
</style>
