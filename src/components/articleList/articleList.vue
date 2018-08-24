<template>
  <div>
    <!--类型文章名-->
    <section class="list-type-name" v-if="!(articleListParams.categoryType==0 && articleListParams.tagType==0)">
      <span>{{articleListParams.listType}}：</span>
      <span class="name">{{listTypeName}}</span>
    </section>

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
  import {bus} from '../../main.js'
//  import {mapActions} from 'vuex'

  export default {
    props: {
      articleListParams: {
        type: Object
      }
    },
    data() {
      return {
        listType: '',
        listTypeName: '',
        tags: [],
        articleListVo: {},
        articleList: [],
        articleLink: ''
      }
    },
    created() {
      // 获取不同路由下切换的路由参数
      this.listTypeName = this.$route.params.name
      // 获取同一路由下切换的路由参数
      bus.$on('name', (name) => {
        this.listTypeName = name
      })
    },
    mounted() {
      this.getListArticle()
    },
    methods: {
      // 获取文章列表
      getListArticle() {
        this.$http.post('/website/article/listArticle', {
          'pageNo': 1,
          'pageSize': this.articleListParams.pageSize,
          'categoryType': this.articleListParams.categoryType,
          'tagType': this.articleListParams.tagType
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
//      ...mapActions(['articleListCurrentPage'])
    },
    components: {
      pagination
    }
  }
</script>
<style lang="scss">
  .list-type-name{
    max-width: 1150px;
    margin: 0 auto;
    padding: 36px 0 18px;
    /*border-bottom: 1px solid #eee;*/
    .name{
      display: inline-block;
      line-height: 40px;
      padding: 0 20px;
      border: 1px solid #e5e9f2;
      border-radius: 20px;
    }
  }
  .article-list{
    /*float: left;*/
    margin-top: 80px;
    padding:0;
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
