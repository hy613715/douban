<template>
    <div class="searchWrap">
        <label for="searchBar">搜索：</label>
        <input
        class="searchBar"
        id="searchBar"
        type="text"
        placeholder="请输入您要搜索的内容"
        v-model="searchTxt"
        @keyup.enter="enterSearch">
        <button @click="enterSearch">搜索</button>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueResource from 'vue-resource'

    Vue.use(VueResource)

    export default {
        data() {
            return {
                searchTxt: ''
            }
        },
        mounted(){
            this.enterSearch();
        },
        methods: {
            enterSearch(){
                this.$root.eventHub.$emit('searchKey', this.searchTxt);

                this.$emit('onClickSearch', {
                    page:1,
                    searchKey: this.searchTxt
                });
            }
        }
    }
</script>

<style>
    .searchWrap {
        width: 960px;
        margin: 20px auto;
        text-align: center;
    }
    .searchBar{
        border:1px solid #ddd;
        border-radius:4px;
        padding:8px 15px;
        outline:none;
        font-size:14px;
        width:300px;
        display: inline-block;
        vertical-align: middle;
    }
    .searchBar:focus {
        border-color: #888;
    }
    label,
    button {
        display: inline-block;
        vertical-align: middle;
        height: 34px;
        line-height: 34px;
    }
    button {
        background: #fff;
        border: 1px solid #ccc;
        width: 120px;
        font-size: 14px;
        cursor: pointer;
        line-height: 32px;
        border-radius: 4px;
    }
    button:hover {
        background: #eee;
    }
    button:focus {
        outline: none;
    }
</style>
