<template>
  <div class="my-header">
    <div class="my-header-container">
      <div class="website-name">黄志鹏Kira</div>
      <el-menu mode="horizontal" :default-active="$route.path" class="my-header-nav"  @select="handleSelect">
        <el-menu-item index="/index"><router-link to="/index">首页</router-link></el-menu-item>
        <el-menu-item index="/articleDetail"><router-link to="/articleDetail">文章</router-link></el-menu-item>
        <el-menu-item index="/tools"><router-link to="/tools">小工具</router-link></el-menu-item>
        <el-menu-item index="/pet"><router-link to="/pet">萌宠</router-link></el-menu-item>
      </el-menu>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        activeIndex3: '1',
        activeIndex4: '1',
        slideDown: false
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
    position: relative;
    .my-header-container{
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 10px;
      border-bottom: 1px solid #e7e7e7;
      overflow: hidden;
      .website-name{
        float: left;
        height: 60px;
        line-height:60px;
        font-size: 22px;
      }
      .my-header-nav{
        float: right;
        border: 0;
        li{
          padding: 0;
          font-size: 16px;
          line-height: 60px;
          color: #333;
          &.is-active{
            border-color: #e54e53;
          }
          a{
            display: block;
            padding:0 40px;
          }
        }
      }

    }
  }
</style>
