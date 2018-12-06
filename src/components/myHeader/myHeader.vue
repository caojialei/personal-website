<template>
  <div class="my-header">
    <div class="my-header-container">
      <div class="website-name">黄志鹏Kira</div>

      <!--screen >= 768：水平导航显示-->
      <el-menu mode="horizontal" :default-active="$route.path" class="my-header-nav hidden-xs-only"  @select="handleSelect">
        <el-menu-item index="/home"><router-link to="/home">首页</router-link></el-menu-item>
        <el-menu-item index="/about"><router-link to="/about">关于</router-link></el-menu-item>
      </el-menu>

      <!--screen < 768：下拉导航显示-->
      <i class="el-icon-menu hidden-sm-and-up navbar-toggle" @click="showNav = !showNav"></i>

      <!--<div class="transition-nav" v-show="showNav">-->
        <!--<el-collapse-transition>-->
          <!--<div>-->
            <!--<div class="transition-box">首页</div>-->
            <!--<div class="transition-box">关于</div>-->
          <!--</div>-->
        <!--</el-collapse-transition>-->
      <!--</div>-->

      <div>
        <el-collapse-transition>
          <div v-show="showNav">
            <div class="transition-box">
              <div><router-link to="/home">首页{{$route.path}}</router-link></div>
              <div><router-link to="/about">关于</router-link></div>
            </div>
          </div>
        </el-collapse-transition>
      </div>

      <!--<div>-->
        <!--<el-collapse-transition>-->
          <!--<div v-show="showNav">-->
            <!--<div class="transition-box">-->
              <!--<div>iu双方都会收到回复</div>-->
              <!--<div>啊手动阀手动阀</div>-->

              <!--&lt;!&ndash;<el-menu&ndash;&gt;-->
                <!--&lt;!&ndash;:default-active="$route.path"&ndash;&gt;-->
                <!--&lt;!&ndash;class="el-menu-vertical-demo transition-nav"&ndash;&gt;-->
                <!--&lt;!&ndash;background-color="#fff"&ndash;&gt;-->
                <!--&lt;!&ndash;text-color="#fff"&ndash;&gt;-->
                <!--&lt;!&ndash;active-text-color="#ffd04b">&ndash;&gt;-->
                <!--&lt;!&ndash;<el-menu-item index="/home">&ndash;&gt;-->
                  <!--&lt;!&ndash;<router-link to="/home">首页</router-link>&ndash;&gt;-->
                <!--&lt;!&ndash;</el-menu-item>&ndash;&gt;-->
                <!--&lt;!&ndash;<el-menu-item index="/about">&ndash;&gt;-->
                  <!--&lt;!&ndash;<router-link to="/about">关于</router-link>&ndash;&gt;-->
                <!--&lt;!&ndash;</el-menu-item>&ndash;&gt;-->
              <!--&lt;!&ndash;</el-menu>&ndash;&gt;-->
            <!--</div>-->
          <!--</div>-->
        <!--</el-collapse-transition>-->
      <!--</div>-->

      <!--<el-menu-->
        <!--:default-active="$route.path"-->
        <!--class="el-menu-vertical-demo transition-nav hidden-sm-and-up"-->
        <!--background-color="#fff"-->
        <!--text-color="#fff"-->
        <!--active-text-color="#ffd04b">-->
        <!--<el-submenu index="/home">-->
          <!--<template slot="title">-->
            <!--<span class="el-icon-menu"></span>-->
          <!--</template>-->
          <!--<el-menu-item-group>-->
            <!--<el-menu-item index="/home">-->
              <!--<router-link to="/home">首页</router-link>-->
            <!--</el-menu-item>-->
            <!--<el-menu-item index="/about">-->
              <!--<router-link to="/about">关于</router-link>-->
            <!--</el-menu-item>-->
          <!--</el-menu-item-group>-->
        <!--</el-submenu>-->
      <!--</el-menu>-->
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        activeNav: '',
        showNav: false
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
        console.log(this.$route.path)
      }
    },
    ready () {
    }
  }
</script>
<style lang="scss">
  .my-header{
    height: 80px;
    position: sticky;
    top: 0;
    border-bottom: 1px solid #f9f9f9;
    background: #fff;
    z-index: 1;
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
  .transition-nav{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    border-bottom: 1px solid #e7e7e7;
    background: transparent!important;
    padding-top: 80px;
    .transition-box {
      width: 100%;
      line-height: 20px;
      background: #f9f9f9;
      /*background: #fff;*/
      text-align: left;
      color: #333;
      font-size: 14px;
      padding: 15px 14px;
      box-sizing: border-box;
    }
    .el-submenu__title{
      height: 80px;
      background: transparent!important;
      padding: 0!important;
      position: absolute;
      top: 0;
      right: 20px;
      .el-icon-menu{
        /*position: absolute;
        top: 50%;
        right: 20px;
        margin-top: -7px;*/
      }
    }
    .el-menu{
      .el-menu-item-group{
        .el-menu-item-group__title{
          padding: 0;
        }
        .el-menu-item{
          a{
            display: block;
            width: 100%;
          }
        }
      }

    }
  }

</style>
