<template>
  <div class="my-header">
    <div class="my-header-container">
      <div class="website-name">黄志鹏Kira</div>

      <!--screen > 768：导航-->
      <el-menu mode="horizontal" :default-active="$route.path" class="my-header-nav hidden-sm"  @select="handleSelect">
        <el-menu-item index="/index"><router-link to="/home">首页</router-link></el-menu-item>
        <el-menu-item index="/about"><router-link to="/about">关于</router-link></el-menu-item>
      </el-menu>

      <!--screen < 768：导航-->
      <i class="el-icon-menu hidden-sm-and-up navbar-toggle"></i>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
//        activeIndex: '1',
//        activeIndex2: '1',
//        activeIndex3: '1',
//        activeIndex4: '1',
//        slideDown: false
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    },
    ready () {
      this.$nextTick(() => {
        responsiveNav('#nav')
      })
    }
  }
</script>
<style lang="scss">
  .my-header{
    height: 80px;
    position: relative;
    border-bottom: 1px solid #f9f9f9;
    .my-header-container{
      max-width: 1150px;
      margin: 0 auto;
      padding: 0 15px;
      overflow: hidden;
      .website-name{
        float: left;
        height: 80px;
        line-height:80px;
        font-size: 22px;
        font-weight: 600;
        color: #333;
      }
      .my-header-nav{
        float: right;
        border: 0;
        li{
          padding: 0;
          font-size: 16px;
          height:40px;
          line-height: 40px;
          color: #333;
          margin-left: 30px;
          margin-top: 20px;
          &.is-active{
            border-bottom: 1px solid #999;
          }
          a{
            display: block;
            padding:0;
          }
        }
      }
      .navbar-toggle{
        float: right;
        margin-top: 23px;
        font-size: 30px;
      }
    }
  }
</style>
