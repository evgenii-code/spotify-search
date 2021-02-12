<template>
    <v-card max-width="900" width="100%" outlined>
        <v-container class="px-5 px-sm-10 py-5">
            <validation-observer ref="observer" v-slot="{ invalid }" slim>
                <form headline @submit.prevent="search">
                    <h1 class="text-sm-h3 text-lg-h1 font-weight-black">
                        Search on Spotify
                    </h1>

                    <div
                        class="mt-5 d-flex flex-column flex-sm-row justify-space-between align-sm-end"
                    >
                        <validation-provider
                            name="Search"
                            rules="required"
                            slim
                        >
                            <v-text-field
                                v-model="searchQuery"
                                placeholder="Search..."
                                hide-details="auto"
                                class="mr-0 mb-5 mr-sm-10 mb-sm-0"
                                color="success"
                            />
                        </validation-provider>

                        <v-card-actions class="pa-0">
                            <v-btn
                                rounded
                                type="submit"
                                :disabled="invalid"
                                :loading="loading"
                                depressed
                                color="success"
                                class="px-8"
                            >
                                Search
                            </v-btn>
                        </v-card-actions>
                    </div>

                    <validation-provider name="Types" rules="required" slim>
                        <v-chip-group
                            v-model="selectedTypesIds"
                            class="mt-5"
                            active-class="success--text"
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
import useSearch from './useSearch';

export default {
    setup(props, context) {
        const { results, fetchSearchResults } = useSearch({ context });

        return { results, fetchSearchResults };
    },

    data() {
        return {
            loading: false,
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

            this.loading = true;

            this.fetchSearchResults(this.searchQuery, type).finally(
                () => (this.loading = false)
            );
        },
    },
};
</script>

<style lang="scss" scoped></style>
