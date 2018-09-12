<template>
	<div>
		<search></search>
		<sliders class='ml-banner'></sliders>
	</div>
</template>

<script>
	import Search from 'components/Search/Search'
	import Sliders from 'components/Sliders/Sliders'
	export default {
		components: {
			Search,
			Sliders
		}
	}
</script>

<style lang="less" scoped>
	.ml-banner {
		height: 200px;
	}
</style>