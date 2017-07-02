<template>
  <div>
      <h1></h1>
  </div>
</template>

<style>
  .el-select .el-input {
    width: 110px;
  }
</style>

<script>
import VueResource from 'vue-resource'
import Vue from 'vue'

Vue.use(VueResource)

  export default {
    data() {
      return {
          getUrl: '/api/v2/movie/subject/1764796'
      }
  },

  mounted : function(){
    this.getData();
  },

  methods: {
    getData :function(){
        console.log(1)

        this.$http.get(this.getUrl).then(res => {
            console.log(res)

      })


    }
  }
  }
</script>
