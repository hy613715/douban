<template>
  <el-input
    placeholder="请选择日期"
    icon="search"
    v-model="input2"
    :on-icon-click="handleIconClick">
  </el-input>
</template>
<script>
export default {
  data() {
    return {
      input2: ''
    }
  },
  methods: {
    getSearchData:function(){
      debugger;
      this.$http.get({
        url:'/v2/movie/search?q = {'+ this.input2 +'}'
      }).then(function(res){
        this.searchData = res.body;
      })
    },
    handleIconClick(ev) {
      this.getSearchData();
    }
  }
}
</script>