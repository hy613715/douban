<template>
    <ul class="movieList">
        <li class="item clearfix" v-for="item in result">
            <a :href="item.alt" class="movieImg"><img :src="item.images.large" alt=""></a>
            <div class="movieMsg">
                <a :href="item.alt" class="moiveName">{{item.title}}({{item.year}})</a>
                <p class="moiveDirectors">导演：<a :href="director.alt" v-for="director in item.directors">{{director.name}}</a></p>
                <p class="moiveStyle">类型：<span v-for="genre in item.genres">{{genre}}</span></p>
                <p class="moiveCasts">主演：<a :href="cast.alt" v-for="cast in item.casts">{{cast.name}}</a></p>
                <p class="moiveInfo">简介：{{item.summary}}</p>
                <p class="moiveWatch">看过人数：{{item.collect_count}}</p>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        data(){
            return {
                result:[]
            }
        },
        mounted(){
            //页面加载是运行函数，否则获取不到search组件传过来的数据
            this.obtainData();
        },
        methods: {
            obtainData(){
                //获取search组件传过来的数据
                this.$root.eventHub.$on('getSearchResult',(data)=>{
                    this.result = data.subjects;
                })
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
        padding: 15px 20px;
    }
    .movieImg {
        float: left;
    }
    .movieImg {
        width: 150px;
        overflow: hidden;
    }
    .movieImg img {
        width: 100%;
    }
    .movieMsg {
        font-size: 14px;
        color: #555;
        margin-left: 170px;
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
</style>
