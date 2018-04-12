<template>
  <div class="article-page page">
    <!--文章-->
    <section class="article-container">
      <div class="header">
        <h1>{{articledetail.articleTitle}}</h1>
        <div><i class="time">{{articledetail.createdAt}}</i>&nbsp;·&nbsp;<i class="author">{{articledetail.author}}</i></div>
      </div>
      <div class="content" v-html="markdownToHtml" v-highlight></div>
      <div class="like"><span class="iconfont icon-love-b"></span><i> 赞一个 ~</i></div>
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
        articledetail: {},
        comments: {}
      }
    },
    mounted() {
      this.getMarkdown()
      this.markdown()
      this.getComments()
    },
    computed: {
      markdownToHtml: function () {
        return marked(this.markdownString || '')
      }
    },
    methods: {
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
      getMarkdown() {
        this.$http.get('/website/articledetail').then(res => {
          // success callback
          this.articledetail = res.data
          this.markdownString = this.articledetail.content
        }, res => {
          // error callback
          alert('文章内容获取失败')
        })
      },
      // 获取评论列表
      getComments() {
        this.$http.get('/website/articlecomments?articleId=123').then(res => {
          // success callback
          this.comments = res.data
        }, res => {
          // error callback
          alert('文章评论获取失败')
        })
      }
//      markdown() {
//        marked.setOptions({
//          renderer: new marked.Renderer(),
//          gfm: true,
//          tables: true,
//          breaks: false,
//          pedantic: false,
//          sanitize: false,
//          smartLists: true,
//          smartypants: false
//        })
//      }
    },
    components: {
      comment
    }
  }
</script>
<style lang="scss">
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
      .like{
        display: block;
        width: 80px;
        height: 80px;
        border: 2px solid #EA6F5A;
        border-radius: 50%;
        margin: 30px auto 0;
        span:before{
          display: block;
          width: 76px;
          line-height: 76px;
          text-align: center;
          font-size: 36px;
          color: #EA6F5A;
        }
        i{
          display: block;
          width: 80px;
          line-height: 40px;
          text-align: center;
          font-size: 18px;
          color: #333;
        }
      }
    }
    .comment-container{
      padding: 50px 15px 0;
    }
  }
</style>
