<template>
  <div class="article-page page">
    <!--文章-->
    <section class="article-container">
      <div class="header">
        <h1>{{articleDetail.title}}</h1>
        <div><i class="time">{{articleDetail.createdAt}}</i>&nbsp;·&nbsp;<i class="author">{{articleDetail.author}}</i></div>
      </div>
      <div class="content" v-html="markdownToHtml" v-highlight></div>

      <!--todo：二期功能--文章点赞-->
      <!--<div :class="favoriteStatus" @click="doFavorite(articleDetail.id)"><span :class="favoriteIconsStatus"></span><i> 赞一个 ~</i></div>-->

    </section>

    <!--评论-->
    <section class="comment-container">
        <comment :comments="comments"></comment>
    </section>
  </div>
</template>
<script>
  import marked from 'marked'
  import comment from '../../components/comment/comment.vue'

  export default {
    data() {
      return {
        markdownString: '',
        articleDetail: {},
        comments: {},
        isFavorite: ''
      }
    },
    mounted() {
      this.getArticleDetail()
      this.markdown()
      this.getComments()
    },
    computed: {
      markdownToHtml: function () {
        return marked(this.markdownString || '')
      }
      // todo:二期功能--文章点赞
//      favoriteStatus: function () {
//        if (this.isFavorite === 1) {
//          return ('favoriteStatus favorite')
//        } else {
//          return ('favoriteStatus unFavorite')
//        }
//      },
//      favoriteIconsStatus: function () {
//        if (this.isFavorite === 1) {
//          return ('iconfont icon-love-b')
//        } else {
//          return ('iconfont icon-love-b1')
//        }
//      }
    },
    methods: {
      // 获取文章
      getArticleDetail() {
        this.$http.get('/website/article/getArticleDetail').then(res => {
          // success callback
          this.articleDetail = res.data
          this.getMarkdown(this.articleDetail.content)
          this.isFavorite = this.articleDetail.isFavorite
        }).catch(res => {
          // error callback
          alert('文章内容获取失败')
        })
      },
      markdown() {
        marked.setOptions({
          renderer: new marked.Renderer(),
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          smartLists: true,
          sanitize: true,
          smartypants: false
        })
      },
      // 将markdown转化成html
      getMarkdown(content) {
        this.markdownString = content
      },
      // todo：二期功能--点赞文章
//      doFavorite(id) {
//        console.log(id)
//        if (this.isFavorite === 1) {
//          this.isFavorite = 0
//          console.log('取消文章点赞')
//        } else {
//          this.isFavorite = 1
//          console.log('文章点赞')
//        }
//      },
      // 获取文章评论列表
      getComments() {
        this.$http.post('/website/comment/listArticleComments', {
          'articleId': '123',
          'pageNo': '1',
          'pageSize': '5'
        }, { headers: {
          // post请求的跨域
          'Content-Type': 'application/x-www-form-urlencoded'
        }}).then(res => {
          // success callback
          this.comments = res.data
        }).catch(res => {
          // error callback
          alert('文章评论获取失败')
        })
      }
    },
    components: {
      comment
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/style/markdown";
  @import "../../assets/style/highlight.css";

  .article-page{
    .article-container{
      .header{
        padding: 36px 16px 18px;
        h1{
          line-height: 35px;
          font-size: 28px;
          font-weight: 600;
          padding: 20px 0;
          word-wrap: break-word;
        }
        div{
          i{
            font-size: 14px;
          }
          .time{
            color: rgba(0,0,0,.5);
          }
          .author{
            color: #666;
          }
        }
      }
      .content{
        padding: 0 16px;
      }
      .favoriteStatus{
        display: block;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin: 30px auto 0;
        span:before{
          display: block;
          width: 76px;
          line-height: 76px;
          text-align: center;
          font-size: 36px;
        }
        i{
          display: block;
          width: 80px;
          line-height: 40px;
          text-align: center;
          font-size: 18px;
          color: #333;
        }
        &.unFavorite{
          border: 2px solid grey;
          span{
            color: grey;
          }
        }
        &.favorite{
          border: 2px solid #EA6F5A;
          span{
            color: #EA6F5A;
          }
        }
      }
    }
    .comment-container{
      padding: 50px 15px 0;
    }
  }
</style>
