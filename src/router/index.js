import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'components/HelloWorld'
import Login from 'components/Login/Login'
import HomePage from 'components/HomePage/HomePage'
import HomeList from 'components/HomeList/HomeList'
import MogoList from 'components/MogoList/MogoList'
import Wait from 'components/wait/wait'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Login',
			component: Login
		},
		{
			path: '/HomePage',
			name: 'HomePage',
			component: HomePage,
			children: [{
				path: '/',
				redirect: '/HomeList'
			}, {
				path: '/HomeList',
				name: 'HomeList',
				component: HomeList
			}]
		},
		{
			path: '/wait',
			name: 'Wait',
			component: Wait,
		}
	]
})