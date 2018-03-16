<template>
  <div class="tools">
    <el-row>
      <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <a href="">
            <img src="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=00fff7e02f2dd42a4b0409f9625230d0/4a36acaf2edda3ccab0c1aa90be93901203f924b.jpg" class="image">
          </a>
          <div style="padding: 9px;">
            <span>批量生成二维码</span>
            <div class="bottom clearfix">
              <i>思考的机会卡都嘎哈数</i>
              <!--<time class="time">{{ currentDate }}</time>-->
              <!--<el-button type="text" class="button">操作按钮</el-button>-->
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>

</script>
<style lang="scss">
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  .el-col{width: 50%}
</style>
