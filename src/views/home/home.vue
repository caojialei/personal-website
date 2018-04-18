<template>
  <div class="home-page page">
    <!--<el-button>默认按钮</el-button>-->
    <!--<el-button type="primary">主要按钮</el-button>-->
    <!--<el-button type="success">成功按钮</el-button>-->
    <!--<el-button type="info">信息按钮</el-button>-->
    <!--<el-button type="warning">警告按钮</el-button>-->
    <!--<el-button type="danger">危险按钮</el-button>-->
    <div class="content">
      <div class="col-main">
        <!--文章列表-->
        <section class="article-list">
          <div class="item" v-for="item in articleList">
            <router-link :to="{ name: 'article', params: { articleId: item.articleId }}">
              <h1>{{item.articleTitle}}</h1>
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
      <div class="col-aside">
        <div class="col-right">
          <!--todo:二期功能 搜索-->
          <!--<section class="search-container">-->
            <!--<div><input type="text"/></div>-->
          <!--</section>-->

          <!--作者介绍-->
          <section class="author-container">
            <div>
              <!--<img src="../../assets/img/huangzhipeng.jpg">-->
            </div>
            <p>{{authorinfo.selfDescription}}</p>
            <ul>
              <li><a class="iconfont icon-GitHub" href="https://github.com/kiraGitHub"></a></li>
              <li><a class="iconfont icon-zhihu" href="https://www.zhihu.com/people/kira-49-60/activities"></a></li>
            </ul>
          </section>

          <!--分类目录-->
          <section class="dialog-container">
            <h3>分类目录</h3>
            <ul v-for="item in catalogList">
              <!--<li><router-link :to="{name: 'catalog', params: {catalogId: item.id }}" @click="goCatalog(item.id)">{{item.name}}（{{item.count}}）</router-link></li>-->
              <li><router-link :to="{name: 'catalog', params: {catalogId: item.id }}">{{item.name}}（{{item.count}}）</router-link></li>
            </ul>
          </section>
          <div @click="goCatalog()">传值</div>
          <!--标签-->
          <section class="tags-container">
            <h3>标签</h3>
            <div class="tags">
              <a href="" title="设计模式" rel="7">设计模式</a>
              <a href="" title="创建型模式" rel="7">创建型模式</a>
              <a href="" title="行为模式" rel="7">行为模式</a>
              <a href="" title="开源框架" rel="7">开源框架</a>
              <a href="" title="源码分析" rel="7">源码分析</a>
              <a href="" title="开源框架" rel="7">开源框架</a>
              <a href="" title="CoAP" rel="7">CoAP</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import pagination from '../../components/pagination/pagination.vue'
  import bus from '../../main.js'

  export default {
    data() {
      return {
        tags: [],
        articleListVo: {},
        articleList: [],
        articleLink: '',
        authorinfo: {},
        catalogListVo: {},
        catalogList: []
      }
    },
    created() {
//      bus.$emit('catalogId', '1234')
    },
    mounted() {
      this.getArticleList()
      this.getAuthorInfo()
      this.getCatalog()
    },
    methods: {
      // 获取文章列表
      getArticleList() {
        this.$http.get('/website/articlelist?pageNo=1')
          .then(res => {
          // 请求成功
          this.articleListVo = res.data
          this.articleList = res.data.data
        }).catch(res => {
          // 请求失败
          console.log(res)
        })
      },
//      getArticleList() {
//        this.$http.post('/website/articlelist', {
//          pageNo: 1,
//          pageSize: 5
//        }, { headers: {
//          // post请求的跨域
//          'Content-Type': 'application/x-www-form-urlencoded'
//        }}).then(res => {
//          // 请求成功
//          this.articleListVo = res.data
//          this.articleList = res.data.data
//          this._getArticleTag(this.articleList)
//        }).catch(res => {
//          // 请求失败
//          console.log(res)
//        })
//      },
      // 获取作者信息
      getAuthorInfo() {
        this.$http.get('/website/authorinfo')
          .then(res => {
            // 请求成功
            this.authorinfo = res.data
          }).catch(res => {
            // 请求失败
        })
      },
      // 获取文章分类
      getCatalog() {
        this.$http.get('/website/cataloglist').then(res => {
          this.catalogListVo = res.data
          this.catalogList = res.data.data
        }).catch(res => {
          console.log('请求失败')
        })
      },
      // 前往分类文章页面
      goCatalog(id) {
        console.log('dosomething')
        bus.$emit('catalogId', '传值成功')
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
  @font-face {
    font-family: 'iconfont';  /* project id 602787 */
    src: url('//at.alicdn.com/t/font_602787_gnmblytdnp7j5rk9.eot');
    src: url('//at.alicdn.com/t/font_602787_gnmblytdnp7j5rk9.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_602787_gnmblytdnp7j5rk9.woff') format('woff'),
    url('//at.alicdn.com/t/font_602787_gnmblytdnp7j5rk9.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_602787_gnmblytdnp7j5rk9.svg#iconfont') format('svg');
  }
  .home-page{
    margin: 0 auto;
    padding-bottom: 300px;
    max-width: 1150px;
    position: relative;
   .content{
     padding: 0 15px;
     .col-main{
       margin: 0 320px 0 0;
       overflow: hidden;
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
     }
     .col-aside{
       width: 280px;
       position: absolute;
       top: 0;
       right: 15px;
       padding-top: 100px;
       section{
         margin: 50px 0;
         h3{
           font-size: 16px;
           color: #666;
           line-height: 60px;
         }
       }
       .search-container{

       }
       .author-container{
         border-top: 0;
         margin-top: 0;
         /*div{*/
           /*width: 200px;*/
           /*height: 200px;*/
           /*overflow: hidden;*/
           /*margin-bottom: 20px;*/
           /*img{*/
             /*width: 100%;*/
           /*}*/
         /*}*/
         p{
           color: #bfbfbf;
           font-size: 14px;
           margin-bottom: 10px;
         }
         ul{
           li{
             display: inline-block;
             margin-right: 5px;
           }
         }
       }
       .dialog-container{
         ul{
           li{
             a{
               color: #999;
               line-height: 26px;
               font-size: 14px;
             }
           }
         }
       }
       .tags-container{
         .tags{
           a{
             display: inline-block;
             border: 1px solid #bfbfbf;
             border-radius: 999em;
             padding: 0 10px;
             color: #bfbfbf;
             line-height: 24px;
             font-size: 12px;
             text-decoration: none;
             margin: 0 1px 6px 1px;
           }
         }
       }
     }
   }
  }

</style>
