import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Main from './views/Main.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)
//整个项目的路由词典：访问路径 <=> 视图组件
export default new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { 
      path: '/main', 
      component: Main,
      children: [
        {path:'',redirect:'/table/list'},        
        {path:'/settings',component:GlobalSettings},
        {path:'/table/list',component:TableList},
        {path:'/table/add',component:TableAdd},
        {path:'/table/delete',component:TableDelete},
        {path:'/category/list',component:CategoryList},
        {path:'/category/add',component:CategoryAdd},
        {path:'/category/delete',component:CategoryDelete},
        {path:'/category/update',component:CategoryUpdate},
        {path:'/dish/list',component:DishList},
        {path:'/dish/add',component:DishAdd},
        {path:'/dish/delete',component:DishDelete},
        {path:'/dish/update',component:DishUpdate},
        {path:'/order/list',component:OrderList},
        {path:'/security',component:Securifty},
      ]
    },
    { path: '*', component: NotFound },
  ]
})
