<template>
	<div>
		<slider :pages="pages" :sliderinit="sliderinit" class="ml-sliders"></slider>
	</div>
</template>

<script>
	import slider from 'vue-concise-slider'
	export default {
		data() {
			return {
				pages: [{
						title: '',
						style: {
							background: 'url(https://aecpm.alicdn.com/tps/i3/TB1gXd1JXXXXXapXpXXvKyzTVXX-520-280.jpg)'
						}
					},
					{
						title: '',
						style: {
							background: 'url(https://img.alicdn.com/simba/img/TB1kKVYvCYTBKNjSZKbSutJ8pXa.jpg)'
						}
					},
					{
						title: '',
						style: {
							background: 'url(https://aecpm.alicdn.com/tps/i1/TB1r4h8JXXXXXXoXXXXvKyzTVXX-520-280.jpg)',
						},
					}
				],
				//滑动配置[obj]
				sliderinit: {
					currentPage: 0, //当前页码
					thresholdDistance: 50, //滑动判定距离
					thresholdTime: 10000, //滑动判定时间
					autoplay: 10000, //自动滚动[ms]
					loop: true, //循环滚动
					direction: 'horizontal', //方向设置，垂直滚动
					infinite: 1, //无限滚动前后遍历数
					slidesToScroll: 1, //每次滑动项数
				}
			}
		},
		components: {
			slider
		}
	}
</script>
<style lang="less" scoped>
.ml-sliders{
	height: 120px;
}
</style>