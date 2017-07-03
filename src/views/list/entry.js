import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import List from './List.vue'

Vue.use(ElementUI)

new Vue({
  el: '#list',
  render: h => h(List)
})
