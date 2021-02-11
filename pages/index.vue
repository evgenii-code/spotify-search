<template>
    <v-container class="container">
        <search> </search>
    </v-container>
</template>

<script>
import Search from '@/components/Search.vue';
export default {
    components: { Search },
};
</script>

<style>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>
