<template>
  <div class="home-page page">
    <!--<el-button>默认按钮</el-button>-->
    <!--<el-button type="primary">主要按钮</el-button>-->
    <!--<el-button type="success">成功按钮</el-button>-->
    <!--<el-button type="info">信息按钮</el-button>-->
    <!--<el-button type="warning">警告按钮</el-button>-->
    <!--<el-button type="danger">危险按钮</el-button>-->
    <div class="page-content">
      <!--主体-->
      <div class="col-main">
        <article-list></article-list>

        <!--&lt;!&ndash;文章列表&ndash;&gt;-->
        <!--<section class="article-list">-->
          <!--<div class="item" v-for="item in articleList">-->
            <!--<router-link :to="{ name: 'article', params: { articleId: item.id }}">-->
              <!--<h1>{{item.title}}</h1>-->
              <!--<span>最新修改：{{item.createdAt}}&nbsp;&nbsp;{{item.author}}</span>-->
              <!--<article>{{item.content}}</article>-->
              <!--<p>标签：<i v-for="tag in item.tags">{{tag.title}} </i></p>-->
            <!--</router-link>-->
          <!--</div>-->
        <!--</section>-->

        <!--&lt;!&ndash;分页&ndash;&gt;-->
        <!--<section class="pagination-container">-->
          <!--<pagination :articleListVo="articleListVo"></pagination>-->
        <!--</section>-->
      </div>

      <!--侧边栏-->
      <my-aside></my-aside>
    </div>
  </div>

</template>
<script>
  import myAside from '../../components/myAside/myAside.vue'
  import articleList from '../../components/articleList/articleList.vue'

  export default {
    data() {
      return {}
    },
    mounted() {
    },
    methods: {
    },
    components: {
      myAside,
      articleList
    }
  }
</script>
<style lang="scss">

  .home-page{
    margin: 0 auto;
    padding-bottom: 300px;
    max-width: 1150px;
    position: relative;
  }

</style>
