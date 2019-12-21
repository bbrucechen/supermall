import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

import Home from 'views/home/home.vue'
import Cart from 'views/cart/cart.vue'
import Category from 'views/category/category.vue'
import Profile from 'views/profile/profile.vue'
import Detail from 'views/detail/Detail.vue'


const routes = [
	{
		path:'',
		redirect:'/home'
	},
	{
		path:'/home',
		component:Home
	},
	{
		path:'/category',
		component:Category
	},
	{
		path:'/cart',
		component:Cart
	},
	{
		path:'/profile',
		component:Profile
	},
	{
		path:'/detail/:id',
		component:Detail
	}
]

const router = new VueRouter({
	routes,
	mode:'history'	
})

export default router