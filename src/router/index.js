import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/Login/Login'
import HomePage from 'components/HomePage/HomePage'
import HomeList from 'components/HomeList/HomeList'
import ViewPage from 'components/ViewPage/ViewPage'
import Wait from 'components/wait/wait'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Login',
			component: Login
		},
		{
			path: '/ViewPage',
			component:ViewPage,
			children:[{
				path: '',
				components:{
					default:HomePage,
					left:HomePage
				},
				children: [{
					path: '',
					redirect: 'HomeList'
				}, {
					path: 'HomeList',
					name: 'HomeList',
					component: HomeList
				}]
			}]
		}
	]
})