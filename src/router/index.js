import Vue from 'vue'
import Router from 'vue-router'


//注册一下，可以让vue使用vue-router的插件
// 若不注册则连$route和$router都没有
Vue.use(Router)

// 我要使用home这个组件，先要引进  .vue可以省略
/* import Home from "@/views/Home"
import List from "@/views/List"
import Mine from "@/views/Mine" */

let router = new Router({
  // 在这个routes里面配置我们路由的路径
  routes:[
    //我在地址栏后边拼上/home它就会映射Home这个组件，但是这样还不能显示，你需要在App.vue里去配置
    // 这样我们一次性加载到页面上，比较慢，采取懒加载模式，在component后跟一个函数，返回一个引入组件的路径，上边的引路径也不需要了
    //函数内部只返回一条数据可以这样写
    /* {path: "/home", component: () => {
      return import("@/views/Home")
    }}, */
    //当我访问首页时只加载首页的组件
    {path:'/', redirect:"/home"}, //一打开默认就渲染Home组件
    {path: "/home", component: () => import("@/views/Home")},
    {path: "/list", component: () => import("@/views/List"), children:[
      {path:"", redirect:"guonei"},
      //二级路由前不需要加/
      {path:"guonei", component: () => import("@/views/Guonei")},
      {path:"guoji", component: () => import("@/views/Guoji")}
    ]},
    {path: "/mine", component: () => import("@/views/Mine")},
    //这里动态给它拼上id是为了后面的页面的跳转
    {path:"/detail/:id", component: () => import("@/views/Detail")}
    
    /* {path: "/home", component: Home},
    {path: "/list", component: List},
    {path: "/mine", component: Mine} */
  ]
})

//导出,供给main.js入口文件用
export default router;
