<template>
  <div>
    <el-input
      placeholder="请输入您要搜索的内容"
      icon="search"
      v-model="searchTarget"
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
      searchTarget: '',
      searchResult : ''
    }
  },
  methods: {
    getResult:function(){
        this.$http.get('/api/v2/movie/search?q='+this.searchTarget).then(res=>{
          this.searchData = res.body;
          this.searchTarget="";
      })
    },
    handleIconClick(ev) {
      this.getResult();
    }
  }
}
</script>