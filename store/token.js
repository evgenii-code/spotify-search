export const state = () => ({
    accessToken: '',
    tokenType: '',
});

export const mutations = {
    setState(state, { name, value }) {
        return (state[name] = value);
    },
};

export const actions = {
    setAccessToken({ state, commit }, { accessToken }) {
        commit('setState', {
            name: 'accessToken',
            value: accessToken,
        });
    },

    setTokenType({ state, commit }, { tokenType }) {
        commit('setState', {
            name: 'tokenType',
            value: tokenType,
        });
    },
};

export const getters = {
    getAccessToken(state) {
        return state.accessToken;
    },

    getTokenType(state) {
        return state.tokenType;
    },
};
