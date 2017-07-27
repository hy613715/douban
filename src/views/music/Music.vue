<template>
    <layout></layout>
</template>

<script>

import Layout from './components/Layout.vue'
import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$ajax = axios

export default {
    components:{
        'layout' : Layout
    }
}

</script>

<style>
    *{
        margin:0;
        padding:0;
        list-style:none;
        text-decoration: none;
    }
    a {
        color: #333;
    }
    .clearfix:after{
        display: block;
        content:"";
        height: 0;
        visibility: hidden;
        clear: both;
    }
</style>
