<template>
    <div id="app">
        <el-row>
            <el-col :span="16">
                <topbar></topbar>
            </el-col>
            <el-col :span="8">
                <list></list>
                <search></search>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Topbar from './components/Topbar.vue'
    import Search from './components/Search.vue'
    import List from './components/List.vue'

    export default {
        components: {
            'topbar': Topbar,
            'search': Search,
            'list': List
        }
    }
</script>
