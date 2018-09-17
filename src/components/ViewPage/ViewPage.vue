<template>
	<div>
	    <router-view @click='text'></router-view>
		<div @click='text'>111111</div>
        <router-view v-if='subViewShow' name='subview'></router-view>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import {mapMutations} from 'vuex'
export default{
	data(){
		return {
		}
	},
	methods:{
		text(){
			 this.subViewShowVx(!this.subViewShow);//更新vuex的状态，传入一个参数，会在mutations中作为第二个参数传入
		}
		,
		...mapMutations({
			subViewShowVx:'subViewShow'//前面的是本页面调用的函数名称，后面的是mutations里面对应的函数名称
		})
	},
	computed: {
		...mapGetters([
			'subViewShow'//getters中的参数名称，也是state的参数名称
		])
	}
}
</script>

<style>
</style>