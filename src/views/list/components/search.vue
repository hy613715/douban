<template>
    <div>
        <div class="searchWrap">
            <label for="searchBar">搜索：</label>
            <input
            class="searchBar"
            id="searchBar"
            type="text"
            placeholder="请输入您要搜索的内容"
            v-model="searchTarget">
            <button @click="enterSearch">搜索</button>
        </div>
        <ul class="movieList" v-if="showList">
            <li class="item clearfix" v-for="item in searchResult">
                <a :href="item.alt" class="movieImg"><img :src="item.images.large" alt=""></a>
                <div class="movieMsg">
                    <a :href="item.alt" class="moiveName">{{item.title}}</a>
                    <p class="moiveDirectors">导演：<a :href="director.alt" v-for="director in item.directors">{{director.name}}</a></p>
                    <p class="moiveStyle">类型：<span v-for="item in item.genres">{{item}}</span></p>
                    <p class="moiveCasts">主演：<a :href="cast.alt" v-for="cast in item.casts">{{cast.name}}</a></p>
                    <p class="moiveInfo">简介：数据里面没看到有关电影介绍的内容</p>
                    <p class="moiveWatch">看过人数：{{item.collect_count}}</p>
                    <p  class="moiveRank">
                        评分：
                        <el-rate v-model="mvRank" show-text></el-rate>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueResource from 'vue-resource'

    Vue.use(VueResource)

    export default {
        data() {
            return {
                searchTarget: '',
                showList:false,
                searchResult : [],
                mvRank: null
            }
        },
        methods: {
            getResult(){
                this.$http.get('/api/v2/movie/search?q='+this.searchTarget).then(res=>{
                    this.searchResult = res.body.subjects;
                    this.searchTarget="";//情况输入框
                })
            },
            enterSearch(){
                this.getResult(); //点击搜索按钮，发送请求，获取数据
                if(this.searchTarget==""){
                    alert("请输入内容！");
                    return false;
                }
                // 此处应该再加一个判断，如果没有搜索结果，提示
                this.showList = true; //点击输入按钮显示内容
            }
        }
    }
</script>

<style>
    .movieList {
        width: 960px;
        margin: 0 auto;
    }
    .movieList .item {
        border-bottom: 1px dashed #ccc;
    }
    .movieImg,
    .movieMsg {
        float: left;
    }
    .movieImg {
        margin-right: 20px;
        width: 200px;
        overflow: hidden;
    }
    .movieImg img {
        width: 100%;
    }
    .movieMsg {
        font-size: 14px;
        color: #555;
    }
    .movieMsg a {
        display: block;
        color: #555;
        text-decoration: none;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .movieMsg p {
        margin-bottom: 5px;
    }
    .moiveCasts span,
    .moiveStyle span {
        margin-right: 10px;
    }
    .moiveDirectors a,
    .moiveCasts a {
        font-size: 14px;
        color: #555;
        font-weight: normal;
        display: inline;
        margin-right: 10px;
    }
    .moiveRank .el-rate {
        display: inline-block;
    }
    *{margin:0;padding:0;list-style:none;}
    .clearfix:after{
        display: block;
        content:"";
        height: 0;
        visibility: hidden;
        clear: both;
    }
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