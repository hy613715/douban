import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(ElementUI)
Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App),

  data: {
    getUrl: 'https://api.douban.com/v2/movie/subject/1764796'
  },

  mounted : function(){
    this.getData();
  },

  methods: {
    getData :function(){
        var _this = this;
        _this.$http.get(this.getUrl).then(function(res){
            console.log(res)
        })
    }
  }
})
