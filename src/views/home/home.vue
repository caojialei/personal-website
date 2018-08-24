<template>
  <div class="home-page page">
    <!--<el-button>默认按钮</el-button>-->
    <!--<el-button type="primary">主要按钮</el-button>-->
    <!--<el-button type="success">成功按钮</el-button>-->
    <!--<el-button type="info">信息按钮</el-button>-->
    <!--<el-button type="warning">警告按钮</el-button>-->
    <!--<el-button type="danger">危险按钮</el-button>-->

    <!--<div class="page-content">-->
      <!--&lt;!&ndash;主体&ndash;&gt;-->
      <!--<div class="col-main">-->
        <!--<article-list></article-list>-->
      <!--</div>-->

      <!--&lt;!&ndash;侧边栏&ndash;&gt;-->
      <!--<my-aside></my-aside>-->
    <!--</div>-->

    <el-row class="page-content">
      <el-col :xs="24" :sm="17" class="col-main"><article-list :articleListParams="articleListParams"></article-list></el-col>
      <el-col :xs="24" :sm="7"><my-aside></my-aside></el-col>
    </el-row>

  </div>
</template>
<script>
  import myAside from '../../components/myAside/myAside.vue'
  import articleList from '../../components/articleList/articleList.vue'
  import {bus} from '../../main.js'

  export default {
    data() {
      return {
        articleListParams: {
          listType: '首页',
          pageNo: 1,
          pageSize: 5,
          categoryType: 0,
          tagType: 0
        },
        sarr: ['a', 'b', 'c']
      }
    },
    created() {
      bus.$on('currentPage', (page) => {
        console.log('首页文章列表当前页' + page)
      })
    },
    mounted() {
    },
    methods: {
      change1() {
        this.sarr[0] = 'x'
        console.log(11111, this.sarr[0])
      },
      change2() {
        this.$set(this.sarr, 0, 'y')
        console.log(222, this.sarr[0])
      }
    },
    components: {
      myAside,
      articleList
    }
  }
</script>
<style lang="scss">
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .home-page{
    margin: 0 auto;
    max-width: 1150px;
    position: relative;
  }
</style>
