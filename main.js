/* 定义vue路由组件  */
const home = { template: `<p>this is home page</p>` }
const news = { template: `<p>this is news page</p>` }
const about = { template: `<p>this is about page</p>` }
/* 定义vue嵌套路由组件  */
const products = {
    template:
    `<div>
        <h4>my prodects </h4>
        <router-link to="/products/book">Go to book</router-link>
        <router-link to="/products/fruit">Go to prodects</router-link>
        <transition :name="transitionName">
            <router-view class="child-view"></router-view>
        </transition>
    </div>
    `,
    data() {
        return {
            transitionName: "slide-left"
        }
    },
    watch:{
        '$route'(to,from){ //ES6新写法 和 '$route':fun()一样
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            console.log(this.transitionName)
        }
    }
}
const book = {template: "<div> this is book </div>"}
const fruit = {template: "<div> this is fruit </div>"}

/* 定义路由  */
const routes = [
    { path: '/home', component: home},
    { path: '/news', component: news},
    { path: '/about', component: about},
    { path: '/products', component: products,
        children: [
            {
                path:"book",
                component:book,
            },
            {
                path:"fruit",
                component:fruit,
            },
        ],
    },
]
/* 创建router实例，并将定义的路由传入  */
const router = new VueRouter({
    routes, // （缩写）相当于 routes: routes
    linkActiveClass:"link-active",
})
/* 创建和挂载根实例  */
const app = new Vue({
    router,
    data(){
        return {
            fade:"fade"
        }
    }
}).$mount('#app')
