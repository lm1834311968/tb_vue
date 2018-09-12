<template>
	<div>
        <ul class="ml-item">
            <li>
                <div class="item-sub">
                    <div class="item-titles">
                        <div class="ml-title">有好货</div>
                        <div class="ml-subtitle">你值得购买</div>
                    </div>
                    <img src="./subcommodity.jpg">
                </div>
                <img class="item-content" src="./commodity.jpg" >
            </li>
             <li>
                <div class="item-sub">
                    <div class="item-titles">
                        <div class="ml-title">有好货</div>
                        <div class="ml-subtitle">你值得购买</div>
                    </div>
                    <img src="./subcommodity.jpg">
                </div>
                <img class="item-content" src="./commodity.jpg" >
            </li>
             <li>
                <div class="item-sub">
                    <div class="item-titles">
                        <div class="ml-title">有好货</div>
                        <div class="ml-subtitle">你值得购买</div>
                    </div>
                    <img src="./subcommodity.jpg">
                </div>
                <img class="item-content" src="./commodity.jpg" >
            </li>
             <li>
                <div class="item-sub">
                    <div class="item-titles">
                        <div class="ml-title">有好货</div>
                        <div class="ml-subtitle">你值得购买</div>
                    </div>
                    <img src="./subcommodity.jpg">
                </div>
                <img class="item-content" src="./commodity.jpg" >
            </li>
        </ul>
	</div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="less" scoped>
.ml-item {
    display: flex;
    position: relative;
    flex-flow: wrap;
    margin-top: 10px;
    background: #fff;
    &:before{
        content:'';
        position: absolute;
        left: 50%;
        top: 0;
        width: 1px;
        height: 100%;
        background: #f1f1f1;
    }
      &:after{
        content:'';
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        height: 1px;
        background: #f1f1f1;
    }
  li {
    width: 50%;
    padding:0  10px;
    box-sizing: border-box;
    height: 135px;
    display: flex;
    flex-shrink: 1;
    &:nth-child(2){
        .ml-title{
            color: #3597e2;
        }
    }
    .item-sub {
      width: 50%;
      img {
        width: 100%;
        display: block;
        font-size: 0;
      }
    }
    .item-content {
      width: 50%;
      height: 100%;
      display: block;
      font-size: 0;
    }
  }
}
.ml-title {
  font-size: 17px;
  line-height: 30px;
  color: #fd3456;
}
.ml-subtitle {
  font-size: 14px;
  color: #949494;
}
</style>