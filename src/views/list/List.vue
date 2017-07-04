<template>
    <div id="list">
        <search @onClickSearch="getResult"></search>
        <result></result>
        <pagination @onClickSearch="getResult"></pagination>
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
    },
    data() {
        return {
            start: 1,
            count: 20
        }
    },
    methods: {
        getResult(options){
            var page = options.page;
            var searchTarget = options.searchKey;

            this.start = page ? page : 1;
            var url = '/api/v2/movie/search?q='+ searchTarget + '&start=' + this.start + '&count=' + this.count;
            if (!searchTarget) {
                var url = '/api/v2/movie/top250?start='+ this.start + '&count=' + this.count;
            }
            this.$http.get(url).then(res=>{
                var data = res.body;

                //向其他组件发送数据，让其他组件也能使用这里获取到的数据
                this.$root.eventHub.$emit('getSearchResult', data);
            });
        }
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
