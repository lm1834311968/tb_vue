<template>
	<div class="ml-cross">
		<div class="ml-cross-logo">
			淘宝头条
		</div>
		<slider :pages="pages" :sliderinit="sliderinit" class="ml-cross-sliders"></slider>
	</div>
</template>

<script>
	import slider from 'vue-concise-slider'
	export default {
		data() {
			return {
				pages: [{
						html:'<div>汽车正常不开可以停放几天</div><div>丰田出新汽车</div>',
						style: {
							background: '#fff'
						}
					},
					{
						html:'<div>扫地机器哪家好</div><div>为什么国产手机短命</div>',
						style: {
							background: '#fff'
						},
					},
					{
						html: '<div>自行车好货推荐</div><div>老司机必备车上用品</div>',
						style: {
							background: '#fff'
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
					direction: 'vertical', //方向设置，垂直滚动
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

<style lang="less">
.ml-cross{
	display: flex;
	padding: 10px 0;
	background: #fff;
	.ml-cross-logo{
		width:60px;
		box-sizing: border-box;
		padding: 0 10px;
		font-size: 17px;
		color: #644847;
		font-weight: bold;
	}
	.ml-cross-sliders{
		height: 44px;
	}
	.slider-item{
		color:#000;
		font-size: 12px;
		text-align: left;
		line-height: 22px;
		>div{
			flex-grow: 1;
			>div{
				position: relative;
				padding-left: 44px;
				&:before{
					content:'最新';
					font-size: 8px;
					position: absolute;
					line-height: 14px;
					border-radius: 6px;
					padding: 0 6px;
					left:0;
					top:3px;
					color:#fd7a10;
					border: 1px solid #fd7a10;
				}
			}
		}
	}
	.swiper-container-vertical .slider-pagination-bullets{
		display: none
	}
}

</style>