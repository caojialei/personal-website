<template>
  <div class="about-page page">
    <!--关于我-->
    <section class="info">
      <h3>关于我</h3>
      <div>
        <p>黄志鹏 Kira</p>
        <p>正儿八经的Java攻城狮一枚，但因媳妇缘故而对前端兴趣浓厚 . 笔者原创文章统一使用CmdMarkdown编写，以分享形式展示，希望看官们多多指导</p>
      </div>
      <h3>联系方式</h3>
      <div>
        <ul>
          <li>github：<a href="https://github.com/kiraGitHub">https://github.com/kiraGitHub</a></li>
          <li>掘金：<a href="https://juejin.im/user/59716ee96fb9a06b9c744c67">https://juejin.im/user/59716ee96fb9a06b9c744c67</a></li>
          <!--<li>知乎：<a href=""></a></li>-->
        </ul>
      </div>
    </section>

    <!--留言-->
    <section class="comment-container">
      <comment :comments="messageListVo"></comment>
    </section>
  </div>
</template>
<script>
  import comment from '../../components/comment/comment.vue'

  export default {
    data() {
      return {
        messageListVo: {}
      }
    },
    components: {
      comment
    },
    mounted() {
      this.getMessages()
    },
    methods: {
      getMessages() {
        this.$http.get('/website/messagelist').then(res => {
          this.messageListVo = res.data
        }).catch(res => {
            console.log('失败')
        })
      }
    }
  }
</script>
<style lang="scss">
  .about-page{
    padding: 0 20% 100px 15px;
    margin-top: 80px;
    .info{
      font-size: 18px;
      h3{
        font-size: 20px;
        font-weight: 700;
        margin: 20px 0;
      }
      div{
        padding-bottom: 30px;
        p{
          line-height: 30px;
        }
        ul{
          li{
            line-height: 30px;
          }
        }
      }
    }

  }
</style>
