<template>
	<div>
		<router-view ></router-view>
		<navs></navs>
	</div>
</template>

<script>
	import Navs from 'components/Navs/Navs'
	export default{
		components:{
			Navs
		}
	}
</script>

<style>
</style>