<template>
    <div id="app">
        <el-row>
            <el-col :span="6">
                <sidebar></sidebar>
            </el-col>
            <el-col :span="18">
                <home33></home33>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Sidebar from './components/Sidebar.vue'
    import Home from './components/Home.vue'
    export default {
        components: {
          'sidebar' : Sidebar,
          'home33' : Home
        }
    }
</script>
