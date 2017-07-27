<template>
    <div class="container" @click="aa">
        <search></search>
        <info></info>
    </div>
</template>

<script>
    import Info from '../components/Info.vue'
    import Search from './Search.vue'

    export default {
        components: {
            'info' : Info,
            'search' : Search
        },
        methods: {
            aa: function() {
                console.log(this.$root)
            }
        }
    }
</script>

<style>
    .container {
        width: 960px;
        margin: 0 auto;
        background: #f1f1f1;
        font-family: 'Microsoft YaHei';
    }
</style>
