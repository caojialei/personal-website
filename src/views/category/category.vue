<template>
  <div class="category-page page">
    <div class="page-content">
      <!--分类文章名-->
      <section class="category-name">
        <span>标签：</span>
        <span class="name">{{categoryName}}</span>
      </section>

      <!--主体-->
      <div class="col-main">
        <!--文章列表-->
        <article-list></article-list>
      </div>

      <!--侧边栏-->
      <my-aside></my-aside>
    </div>
  </div>
</template>
<script>
  import myAside from '../../components/myAside/myAside.vue'
  import articleList from '../../components/articleList/articleList.vue'
  import {bus} from '../../main.js'

  export default {
    data() {
      return {
        categoryName: {}
      }
    },
    created() {
      // 获取路由中的参数
//      this.categoryName = this.$route.params.categoryName
      bus.$on('name', (name) => {
        this.categoryName = name
        console.log(11111111)
      })
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
  .category-page{
    .category-name{
      max-width: 1150px;
      margin: 0 auto;
      padding: 36px 16px 18px;
      /*border-bottom: 1px solid #eee;*/
      .name{
        display: inline-block;
        line-height: 40px;
        padding: 0 20px;
        border: 1px solid #e5e9f2;
        border-radius: 20px;
      }
    }
  }
</style>
