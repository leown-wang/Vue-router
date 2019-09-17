
/* 定义vue组件  */
const home = { template: '<p>this is home page</p>' }
const news = { template: '<p>this is news page</p>' }
const about = { template: '<p>this is about page</p>' }

/* 定义路由  */
const routes = [
    { path: '/home', component: home},
    { path: '/news', component: news},
    { path: '/about', component: about},
]


/* 创建router实例，并将定义的路由传入  */
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

/* 创建和挂载根实例  */
const app = new Vue({
    router
}).$mount('#app')
