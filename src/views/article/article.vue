<template>
  <div class="article-page page">
    <!--文章-->
    <section class="article-container">
      <div class="header">
        <h1>并发番@AbstractQueuedSynchronizer一文</h1>
        <div><i class="time">2018-3-27</i>&nbsp;·&nbsp;<i class="author">黄志鹏</i></div>
      </div>
      <div class="content" v-html="markdownToHtml" v-highlight></div>
    </section>

    <!--评论-->
    <section class="comment-container">

    </section>
  </div>
</template>
<script>
  import marked from 'marked'

  export default {
    data() {
      return {
        markdownString: '```python\n' +
        '@requires_authorization\n' +
        'class SomeClass:\n' +
        '    pass\n' +
        '\n' +
        'if __name__ == \'__main__\':\n' +
        '    # A comment\n' +
        '    print \'hello world\'\n' +
        '```'
      }
    },
    mounted() {
      this.getMarkdown()
      this.markdown()
    },
    computed: {
      markdownToHtml: function () {
        return marked(this.markdownString)
      }
    },
    methods: {
      getMarkdown() {
//        this.$http.get('http://localhost:8888/md/test.md').then(response => {
//        this.$http.get('http://localhost:8888/pointgate/equityecard/changegiftstate').then(response => {
        this.$http.get('http://localhost:8888/pointgate/equityecard/changegiftstate').then(response => {
          // success callback
          alert(1)
        }, response => {
          // error callback
          alert(0)
        })
      },
      markdown() {
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
      }
    }
  }
</script>
<style lang="scss">
  .article-page{
    .article-container{
      .header{
        padding: 36px 16px 18px;
        h1{
          font-size: 28px;
          font-weight: 600;
          padding: 20px 0;
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
    }
  }
</style>
