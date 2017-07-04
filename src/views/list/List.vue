<template>
    <div id="list">
        <search></search>
        <result></result>
        <pagination></pagination>
    </div>
</template>

<script>

import Search from './components/Search.vue'
import Result from './components/Result.vue'
import Pagination from './components/Pagination.vue'

export default {
    components:{
        'search': Search,
        'result': Result,
        'pagination': Pagination
    }
}

</script>

<style>
    *{
        margin:0;
        padding:0;
        list-style:none;
    }
    .clearfix:after{
        display: block;
        content:"";
        height: 0;
        visibility: hidden;
        clear: both;
    }
</style>