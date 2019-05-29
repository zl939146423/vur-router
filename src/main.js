import Vue from 'vue'
import App from './App.vue'
import router from './router' //后面应该再跟上index.js，可以省略
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,   // 挂载一下，这里挂载了就可以使用this.$route 和 this.$router的一些API方法或属性
  store,
  render: h => h(App)
}).$mount('#app')

