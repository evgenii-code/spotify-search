<template>
    <v-card max-width="600" width="100%" outlined>
        <v-container class="px-10 py-5">
            <validation-observer ref="observer" v-slot="{ invalid }" slim>
                <form headline @submit.prevent="search">
                    <v-list-item-title> Search on Spotify </v-list-item-title>

                    <div class="mt-5 d-flex justify-space-between align-end">
                        <validation-provider
                            name="Search"
                            rules="required"
                            slim
                        >
                            <v-text-field
                                v-model="searchQuery"
                                label="Search..."
                                hide-details="auto"
                                class="mr-10"
                            />
                        </validation-provider>

                        <v-card-actions class="pa-0">
                            <v-btn
                                outlined
                                rounded
                                text
                                type="submit"
                                :disabled="invalid"
                            >
                                Search
                            </v-btn>
                        </v-card-actions>
                    </div>

                    <validation-provider name="Types" rules="required" slim>
                        <v-chip-group
                            v-model="selectedTypesIds"
                            class="mt-5"
                            active-class="primary--text"
                            column
                            mandatory
                            multiple
                        >
                            <v-chip
                                v-for="availableType in availableTypes"
                                :key="availableType"
                            >
                                {{ availableType }}
                            </v-chip>
                        </v-chip-group>
                    </validation-provider>
                </form>
            </validation-observer>
        </v-container>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            selectedTypesIds: [],
            availableTypes: ['artist', 'album', 'track', 'playlist'],
            searchQuery: '',
        };
    },

    methods: {
        search() {
            const type = this.selectedTypesIds.map(
                (selectedTypeId) => this.availableTypes[selectedTypeId]
            );

            this.$axios
                .get(`/search?query=${this.searchQuery}&type=${type}`)
                .then(({ data }) => console.log('data', data));
        },
    },
};
</script>

<style lang="scss" scoped></style>
