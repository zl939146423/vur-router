
<!--这是个全局的组件--> 
<template>
  <div id="app">
    hello app.vue
    <div>
      <!--使用这个标签当我点击时跳转到相应的页面，to地址-->
      <!-- <router-link to="/home">首页</router-link>
      <router-link to="/list">列表</router-link>
      <router-link to="/mine">我的</router-link> -->
      <router-link
        v-for="nav in navs"
        :key="nav.id"
        :to="nav.path"
      >{{nav.title}}</router-link>
    </div>
    <!--它的做用就是显示路由组件的位置-->
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  .router-link-active{
    color:red;
  }
  
</style>

<script>
/* 
  这是一个组件，组件中包括三部分
    模板
    样式
    js
*/
export default {

  data(){
    return {
      navs:[
        {id: 1, path: "/home", title: "首页"},
        {id: 2, path: "/list", title: "列表"},
        {id: 3, path: "/mine", title: "我的"}
      ]
    }
  },
  //我输出可以在created这个钩子函数里边
  created(){
    
  }
}
</script>

