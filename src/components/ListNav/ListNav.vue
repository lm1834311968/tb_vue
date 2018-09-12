<template>
	<div>
        <ul class="ml-list-nav">
            <li>
                <div class="ml-icons">
                    <i class="ml-icon ml-icon-tm"></i>
                    <span>天猫</span>
                </div>
            </li>
            <li>
                <div class="ml-icons">
                    <i class="ml-icon ml-icon-tm"></i>
                    <span>聚划算</span>
                </div>
            </li>
            <li>
                <div class="ml-icons">
                    <i class="ml-icon ml-icon-tm"></i>
                    <span>天猫国际</span>
                </div>
            </li>
            <li>
                <div class="ml-icons">
                    <i class="ml-icon ml-icon-tm"></i>
                    <span>饿了么</span>
                </div>
            </li>
            <li>
                <div class="ml-icons">
                    <i class="ml-icon ml-icon-tm"></i>
                    <span>天猫超市</span>
                </div>
            </li>
            <li>
                <div class="ml-icons">
                    <i class="ml-icon ml-icon-tm"></i>
                    <span>充值中心</span>
                </div>
            </li>
            <li>
                <div class="ml-icons">
                    <i class="ml-icon ml-icon-tm"></i>
                    <span>飞猪旅行</span>
                </div>
            </li>
            <li>
                <div class="ml-icons">
                    <i class="ml-icon ml-icon-tm"></i>
                    <span>领金币</span>
                </div>
            </li>
            <li>
                <div class="ml-icons">
                    <i class="ml-icon ml-icon-tm"></i>
                    <span>拍卖</span>
                </div>
            </li>
            <li>
                <div class="ml-icons">
                    <i class="ml-icon ml-icon-tm"></i>
                    <span>分类</span>
                </div>
            </li>
        </ul>
	</div>
</template>

<script>
	export default{

	}
</script>

<style lang="less" scoped>
.ml-list-nav{
    display: flex;
    flex-wrap:wrap;
    background: #fff;
    padding: 10px 6px;
    li{
        padding:6px 0;
        width: 20%;
        .ml-icon-tm{
            background: url(./tm.jpg) no-repeat;
            background-size: 100%;
            border-radius: 50%;
        }
    }
}
    .ml-icons{
         color: #646464;
         width: auto;
        .ml-icon{
            height: 40px;
            width: 40px;
            font-size: 22px;
        }
         >span{
               padding-top: 3px;
           }
    }
</style>