<template>
  <div>
    <el-input
      placeholder="请选择日期"
      icon="search"
      v-model="input2"
      :on-icon-click="handleIconClick">
    </el-input>
    <el-input
      placeholder="请选择日期"
      icon="search"
      v-model="input1"
      :on-icon-click="handleIconClick">
    </el-input>
  </div>
</template>
<script>

import VueResource from 'vue-resource'
import Vue from 'vue'

Vue.use(VueResource)

export default {
  data() {
    return {
      input1: '',
      input2: '',
      searchData : ''
    }
  },
  methods: {
    getSearchData:function(){
        this.$http.get('/api/v2/movie/search?q='+this.input2+'&tag='+this.input1).then(res=>{
          this.searchData = res.body;
      })
    },
    handleIconClick(ev) {
      this.getSearchData();
    }
  }
}
</script>