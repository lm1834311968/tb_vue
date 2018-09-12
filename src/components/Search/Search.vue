<template>
	<div class='search'>
		<div class="ml-icons">
			<i class="ml-icon ml-icon-sys"></i>
			<span>扫一扫</span>
		</div>
		<div class="search-content">
			<i class="el-icon-search"></i>
			<input placeholder="请输入查询内容" />
			<i class="ml-icon-camera"></i>
		</div>
		<div class="ml-icons">
			<i class="ml-icon el-icon-menu"></i>
			<span>会员码</span>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.search {
		display: flex;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		padding: 4px 0;
		z-index: 9;
		border-bottom: 1px solid #dedede;
		box-sizing:border-box;
		background: linear-gradient(to right, #ff8e01 , #ff5000);
			.ml-icon-sys{
				background: url(./sys.png) no-repeat;
				background-size: 100%;
			}
			.el-icon-menu{
				font-size: 21px;
			}
		.search-content{
			box-sizing:border-box;
			padding: 4px;
			flex-grow: 1;
			position:relative;
			input{
				line-height: 28px;
				width: 100%;
				outline: none;
				box-sizing: border-box;
				border-radius: 14px;
				padding: 0 29px;
				border:1px solid #dedede;
			}
			.el-icon-search{
				position:absolute;
				top: 10px;
				left: 13px;
				color: #9e9e9e;
				font-size: 16px;
			}
			.ml-icon-camera{
				position:absolute;
				height: 20px;
				width: 20px;
				top: 10px;
				right: 13px;
				background: url(./camera.png) no-repeat;
				background-size: 100%;
			}
		
		}
	}
</style>