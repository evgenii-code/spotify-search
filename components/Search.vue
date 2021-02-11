<template>
    <v-card class="mx-auto" max-width="600" outlined>
        <v-list-item-title class="headline mb-1">
            Search on Spotify
        </v-list-item-title>

        <v-text-field
            v-model="searchQuery"
            label="Search..."
            :rules="rules"
            hide-details="auto"
        />

        <v-card-actions>
            <v-btn outlined rounded text @click="search"> Search </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: '',
            rules: [
                (value) => !!value || 'Required.',
                (value) => (value && value.length >= 3) || 'Min 3 characters',
            ],
        };
    },

    methods: {
        search() {
            console.log('axios', this.$axios.defaults.headers);

            // this.$axios
            //     .get(`/search?query=${this.searchQuery}`)
            //     .then(({ data }) => console.log('data', data));
        },
    },
};
</script>

<style lang="scss" scoped></style>
