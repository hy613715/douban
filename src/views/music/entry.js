import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Music from './Music.vue'

Vue.use(ElementUI)

new Vue({
  el: '#music',
  render: h => h(Music),
  data: {
    //添加一个空的Vue对象，前面的名字可以随意取，后面需和这里所取名字一致
    //用于组件间的通信，也就是组件间的数据共享
    eventHub: new Vue()
  }
})
