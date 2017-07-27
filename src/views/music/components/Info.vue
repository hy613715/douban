<template>
    <div class="info-box clearfix">
        <div class="info-img">
            <img src="" alt="">
        </div>
        <ul class="info-detail" v-for="item in result">
            <li><label>歌曲：</label><a href="" v-for="el in item.attrs.title">{{el}}</a></li>
            <li><label>歌手：</label>
                <span v-for="el in item.author">{{el.name}}</span>
            </li>
            <li><label>专辑：</label>留聲經典復刻版</li>
            <li>
                <label>标签：</label>
                <span v-for="el in item.tags">{{el.name}}（{{el.count}}） </span>
            </li>
            <li>
                <label>简介：</label>
                <span>邓丽君在1987年推出的唱片专集《我只在乎你》中</span>
            </li>
        </ul>
    </div>
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
                this.$root.eventHub.$on('getMusicData',(data)=>{
                    this.result = data;
                })
            }
        }
    }
</script>
<style>
    .info-img {
        float: left;
        width: 200px;
        overflow: hidden;
    }
    .info-img img {
        width: 100%;
    }
    .info-detail {
        margin-left: 200px;
        font-size: 14px;
        color: #777;
        padding: 15px;
    }
    .info-detail li label {
        color: #555;
    }
</style>
