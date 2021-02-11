export const state = () => ({
    tokenData: {
        accessToken: '',
        tokenType: '',
        expirityDate: '',
    },
});

export const mutations = {
    setState(state, { name, value }) {
        return (state[name] = value);
    },
};

export const actions = {
    setTokenData({ state, commit }, { tokenData }) {
        commit('setState', {
            name: 'tokenData',
            value: tokenData,
        });
    },

    clearTokenData({ commit }) {
        commit('setState', {
            name: 'tokenData',
            value: {
                accessToken: '',
                tokenType: '',
                expirityDate: '',
            },
        });
    },

    fetchAuthToken(
        { dispatch },
        { spotifyAuthorizationAPIURL, body, headers }
    ) {
        return this.$axios
            .post(spotifyAuthorizationAPIURL, body, {
                headers,
            })
            .then((response) => {
                const {
                    token_type: tokenType = '',
                    access_token: accessToken = '',
                    expires_in: expiresIn = 0,
                } = response.data;

                const expirityDate = new Date();

                expirityDate.setHours(
                    expirityDate.getHours() + expiresIn / 60 / 60
                );

                dispatch('setTokenData', {
                    tokenData: { tokenType, accessToken, expirityDate },
                });

                return Promise.resolve(response);
            })
            .catch((error) => console.log('error', error));
    },
};

export const getters = {
    getTokenData(state) {
        return state.tokenData;
    },

    isTokenInvalid(state) {
        const { accessToken, tokenType, expirityDate } = state.tokenData;
        const currentDate = new Date();
        const isTokenExpired = currentDate >= expirityDate;

        return isTokenExpired || !accessToken || !tokenType || !expirityDate;
    },
};
