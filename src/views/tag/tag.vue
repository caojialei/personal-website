<template>
  <div class="tag-page page">
    <div class="page-content">
      <!--分类文章名-->
      <section class="tag-name">
        <span>标签：</span>
        <span class="name">{{tagName}}</span>
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
        tagName: ''
      }
    },
    created() {
      // 获取不同路由下切换的路由参数
      this.tagName = this.$route.params.name
      // 获取同一路由下切换的路由参数
      bus.$on('name', (name) => {
        this.tagName = name
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
  .tag-page{
    .tag-name{
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
