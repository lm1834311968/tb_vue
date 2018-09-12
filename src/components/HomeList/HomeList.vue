<template>
	<div class="ml-home">
		<search></search>
		<sliders></sliders>
		<list-nav></list-nav>
		<cross-sliders></cross-sliders>
		<list-item></list-item>
		<list-item></list-item>
	</div>
</template>

<script>
	import Search from 'components/Search/Search'
	import Sliders from 'components/Sliders/Sliders'
	import ListNav from 'components/ListNav/ListNav'
	import CrossSliders from 'components/CrossSliders/CrossSliders'
	import ListItem from 'components/ListItem/ListItem'
	export default{
		components:{
			Search,
			Sliders,
			ListNav,
			CrossSliders,
			ListItem
		}
	}
</script>

<style lang="less" scoped>
.ml-home{
	padding: 48px 0 60px;
}
</style>