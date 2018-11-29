import vueRouter from 'vue-router'
import shouye from '../../components/shouye.vue'
import brand from '../../components/brand.vue'
import sort from '../../components/sort.vue'
import cart from '../../components/cart.vue'
import my from '../../components/my.vue'
import zhuce from '../../components/zhuce.vue'

export default new vueRouter({
	routes:[
		{path:'/shouye',component:shouye},
		{path:'/brand',component:brand},
		{path:'/sort',component:sort},
		{path:'/cart',component:cart},
		{path:'/my',component:my},
		{path:'/zhuce',component:zhuce},
		{path:'/*',component:shouye}
	]
})





