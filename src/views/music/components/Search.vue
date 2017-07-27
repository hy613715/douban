<template>
    <div class="search-box">
        <label for="searchTxt">搜索：</label>
        <input type="text" id="searchTxt" v-model="searchTxt">
        <a href="javascript:;" class="searchBtn" v-on:click="getData()">GO</a>
    </div>
</template>
<script>
    import Vue from 'vue'
    import axios from 'axios'

    Vue.prototype.$ajax = axios

    export default {
        data(){
            return {
                searchTxt: ''
            }
        },
        methods: {
            getData() {
                // 定义this
                var self = this;
                this.$ajax({
                    method: 'GET',
                    url: '/api/v2/music/search',
                    params: {
                        q: this.searchTxt
                    }
                }).then(function(res){
                    var musicData = res.data.musics;
                    self.$root.eventHub.$emit('getMusicData', musicData);
                })
            }
        }
    }

</script>
<style>
    .search-box {
        padding: 20px;
        text-align: center;
    }
    .search-box input ,
    .search-box label {
        display: inline-block;
        vertical-align: middle;
    }
    .search-box input {
        height: 28px;
        line-height: 28px;
        border: 1px solid #ddd;
        padding: 0 10px;
        width: 300px;
        border-radius: 4px;
        text-align: left;
    }
    .search-box input:focus {
        outline: none;
    }
    .searchBtn {
        font-weight: bold;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        width: 90px;
        height: 30px;
        line-height: 30px;
        background: #fff;
        color: #777;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
</style>
