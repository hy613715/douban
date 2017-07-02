<template>
    <div id="app">
        <search></search>
        <list></list>
    </div>
</template>

<script>
    import List from './components/List.vue'
    import Search from './components/Search.vue'

    export default {
        components: {
            'list': List,
            'search': Search
        }
    }
</script>
