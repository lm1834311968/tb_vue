<template>
	<nav>
		<ul>
			<router-link tag='li' to='/HomeList'><i class="el-icon-tickets"></i>
				<div>首页</div>
			</router-link>
			<router-link tag='li' to='/'><i class="el-icon-edit"></i>
				<div>分类</div>
			</router-link>
			<router-link tag='li' to='/'><i class="el-icon-circle-plus add"></i></router-link>
			<router-link tag='li' to='/'><i class="el-icon-bell"></i>
				<div>品牌</div>
			</router-link>
			<router-link tag='li' to='/'><i class="el-icon-menu"></i>
				<div>个人</div>
			</router-link>
		</ul>
	</nav>
</template>

<script>
	export default {
		data() {
			return {
				isTransition: false
			}
		},
		methods: {
			addNavs() {
				this.isTransition = !this.isTransition;
			}
		}
	}
</script>

<style lang="less" scoped>
	nav {
		position: fixed;
		width: 100%;
		bottom: 0;
		font-size: 13px;
		line-height: 20px;
		color: #959aa0;
		background: #fff;
		padding: 6px 0;
		>ul {
			display: flex;
			>li {
				flex: 1;
				text-align: center;
				>i {
					font-size: 21px;
				}
				.add {
					font-size: 37px;
					margin-top: 3px;
					position: relative;
					ul {
						position: absolute;
						transform: scale(0);
						transition: all .4s cubic-bezier(.4, .46, .3, 1.31);
						left: 18px;
						top: 13px;
						&.transition {
							transform: scale(1);
						}
						li {
							position: absolute;
							background: #fff;
							height: 50px;
							width: 50px;
							line-height: 50px;
							text-align: center;
							font-size: 14px;
							border-radius: 50%;
						}
						.subnavs1 {
							top: -92px;
							left: -89px;
						}
						.subnavs2 {
							top: -110px;
							left: -24px;
						}
						.subnavs3 {
							top: -92px;
							left: 41px;
						}
					}
				}
				&.router-link-exact-active {
					color: #ebba49;
				}
			}
		}
	}
</style>