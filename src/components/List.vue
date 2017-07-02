<template>
    <div>
        <h1>{{movieData.title}}</h1>
        <div>
            <span v-for="item in movieData.aka">{{item}}</span>
        </div>
        <dl class="clearfix">
            <dt>主演：</dt>
            <dd v-for="item in movieData.casts">
                <a v-bind:href="item.alt"  v-bind:alt="item.alt">
                    <img v-bind:src="item.avatars.medium">
                    <span>{{item.name}}</span>
                </a>
            </dd>
        </dl>
        <dl class="clearfix">
            <dt>上映地区：</dt>
            <dd v-for="item in movieData.countries">{{item}}</dd>
        </dl>
        <dl class="clearfix">
            <dt>看过人数：</dt>
            <dd>{{movieData.collect_count}}</dd>
        </dl>
        <dl class="clearfix">
            <dt>短评数量：</dt>
            <dd>{{movieData.comments_count}}</dd>
        </dl>
        <dl class="clearfix">
            <dt>影片类型：</dt>
            <dd v-for="item in movieData.genres">{{item}}</dd>
        </dl>
        <dl class="clearfix">
            <dt>电影海报图:</dt>
            <dd><img v-bind:src="movieData.images.large"></dd>
        </dl>
        <dl class="clearfix">
            <dt>原名：</dt>
            <dd>{{movieData.original_title}}</dd>
        </dl>
        <dl class="clearfix">
            <dt>简介:</dt>
            <dd>{{movieData.summary}}</dd>
        </dl>
    </div>
</template>

<style>
    .el-select .el-input {
        width: 110px;
    }
    dt,dd{float:left;}
    .clearfix:after{
        display: block;
        height: 0;
        content:'';
        visibility: hidden;
        clear: both;
    }
</style>

<script>
    import VueResource from 'vue-resource'
    import Vue from 'vue'

    Vue.use(VueResource)

    export default {
        data() {
            return {
                getUrl: '/api/v2/movie/subject/1764796',
                movieData:{},
            }
        },

        mounted : function(){
            this.getData();
        },

        methods: {
            getData :function(){
                this.$http.get(this.getUrl).then(res => {
                    this.movieData = res.body;
                })
            }
        }
    }
</script>
