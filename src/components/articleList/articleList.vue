<template>
  <div>
    <!--文章列表-->
    <section class="article-list">
      <div class="item" v-for="item in articleList">
        <router-link :to="{ name: 'article', params: { articleId: item.id }}">
          <h1>{{item.title}}</h1>
          <span>最新修改：{{item.createdAt}}&nbsp;&nbsp;{{item.author}}</span>
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
        tags: [],
        articleListVo: {},
        articleList: [],
        articleLink: ''
      }
    },
    mounted() {
      this.getListArticle()
    },
    methods: {
      // 获取文章列表
      getListArticle() {
        this.$http.post('/website/article/listArticle', {
          'pageNo': 1,
          'pageSize': 10,
          'categoryType': 0,
          'tagType': 0
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
      },
      // 显示每页条数
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      // 显示当前页
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      }
    },
    components: {
      pagination
    }
  }
</script>
<style lang="scss">
  .article-list{
    float: left;
    margin-top: 80px;
    .item{
      margin-bottom: 80px;
      h1{
        line-height: 34px;
        text-align: center;
        font-size: 20px;
        color: #000;
      }
      span{
        display: block;
        line-height: 40px;
        text-align: center;
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
</style>
