<template>
  <div class="category-page page">
    <!--分类文章名-->
    <section class="category-name">
      <span>分类：</span>
      <!--<span class="name">{{articleListVo.categoryName}}</span>-->
    </section>

    <!--对应目录文章列表-->
    <section class="category-container">
      <div class="item" v-for="item in articleList">
        <router-link :to="{ name: 'article', params: { articleId: item.id }}">
          <h1>{{item.title}}</h1>
          <span>最新修改：{{item.createTime}}&nbsp;&nbsp;{{item.author}}</span>
          <article>{{item.content}}</article>
          <p>标签：<i v-for="tag in item.tags">{{tag.title}} </i></p>
        </router-link>
      </div>
    </section>

    <!--分页-->
    <section class="pagination-container">
      <pagination :articleListVo="articleListVo"></pagination>
    </section>
  </div>
</template>
<script>
  import pagination from '../../components/pagination/pagination.vue'

  export default {
    data() {
      return {
        'categoryId': '',
        'articleListVo': {},
        'articleList': []
      }
    },
    components: {
      pagination
    },
    created() {
      // 获取路由中的参数
      this.categoryId = this.$route.params.categoryId
    },
    mounted() {
      this.listArticle()
    },
    methods: {
      listArticle() {
        this.$http.post('/website/article/listArticle', {
          'pageNo': 1,
          'pageSize': 10,
          'categoryType': 1
        }, { headers: {
          // post请求的跨域
          'Content-Type': 'application/x-www-form-urlencoded'
        }}).then(res => {
          // 请求成功
          this.articleListVo = res.data
          this.articleList = res.data.articleList
        }).catch(res => {
          // 请求失败
          console.log(res)
        })
      }
    }
  }
</script>
<style lang="scss">
  .category-page{
    .category-name{
      max-width: 1150px;
      margin: 0 auto;
      padding: 36px 16px 18px;
      border-bottom: 1px solid #eee;
      .name{
        display: inline-block;
        line-height: 40px;
        padding: 0 20px;
        border: 1px solid #e5e9f2;
        border-radius: 20px;
      }
    }
    .category-container{
      float: left;
      margin-top: 80px;
      .item{
        margin-bottom: 80px;
        h1{
          line-height: 34px;
          /*text-align: center;*/
          font-size: 20px;
          color: #000;
        }
        span{
          display: block;
          line-height: 40px;
          /*text-align: center;*/
          font-size: 12px;
          color: #999;
        }
        article{
          line-height: 36px;
          font-size: 14px;
          color: #888;
        }
        p{
          line-height: 36px;
          font-size: 14px;
          color: #888;
          i{
            line-height: 36px;
            font-size: 14px;
            color: #888;
          }
        }
      }
    }
    .pagination-container{
      clear: both;
      text-align: center;
    }
  }
</style>
