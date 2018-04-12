<template>
  <!--评论-->
  <div class="comments">
    <h3>留言</h3>
    <div class="comments-box">
      <div><label>姓名</label><input type="text"/></div>
      <div><label>邮件地址</label><input type="email"/></div>
      <textarea placeholder="来说两句吧..."></textarea>
      <button type="button" class="submit">发表</button>
    </div>

    <!--评论列表-->
    <div class="comments-list">
      <ul>
        <li v-for="comment in commentsList">
          <div class="comment">
            <h5>{{comment.c_user_name}}</h5>
            <span>{{comment.createdCt}}</span>
            <div>{{comment.c_content}}</div>
          </div>
          <div class="actions">
            <span class="iconfont icon-dianzan1"><i v-show="comment.likes_count">{{comment.likes_count}}人点</i>赞</span>
            <span class="iconfont icon-huifu">回复</span>
          </div>
          <section class="reply-container">
            <div v-for="rItem in comment.reply_list" class="item">
              <p><span>{{rItem.r_user_name}}</span>:<span>@{{rItem.r_c_user_name}}</span> <span>{{rItem.r_content}}</span></p>
              <div class="reply-tool">
                <span class="time">{{rItem.createdRt}}</span>
                <span class="iconfont icon-huifu" @click="doReply()">回复</span>
              </div>
            </div>
          </section>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      comments: {
        type: Object
      }
    },
    data() {
      return {
        commentsList: []
        // replyList: []
      }
    },
    mounted() {
//      this.getCommentsList()
    },
    watch: {
      comments: function () {
        this.commentsList = this.comments.data
      }
    },
    methods: {
      doReply() {
        alert(1)
      }
    }
  }
</script>
<style lang="scss">
  .comments{
    h3{
      font-size: 20px;
      font-weight: 700;
      margin: 20px 0;
    }
    .comments-box{
      overflow: hidden;
      padding-bottom: 20px;
      border-bottom: 1px solid #999;
      div{
        margin-bottom: 10px;
        label{
          display: inline-block;
          height: 35px;
          line-height: 35px;
          width: 70px;
        }
        input{
          padding: 10px;
          height: 35px;
          border: 1px solid #333;
          border-radius: 4px;
          -webkit-border-radius: 4px;
        }
      }
      textarea{
        display: block;
        width: 100%;
        height: 150px;
        padding: 10px;
        border: 1px solid #333;
        border-radius: 4px;
        -webkit-border-radius: 4px;
        resize: none;
      }
      .submit{
        float: right;
        display: block;
        width: 100px;
        margin-top: 20px;
        line-height: 30px;
        background: #333;
        color: #fff;
        text-align: center;
        font-size: 14px;
        cursor: pointer;
      }
    }
    .comments-list{
      padding-top: 20px;
      ul{
        margin-left: 0;
        li{
          position: relative;
          padding-bottom: 20px;
          padding-top: 10px;
          list-style: none;
          border-bottom: 1px solid #f0f0f0;
          .comment{
            h5{
              font-size: 14px;
              font-weight: 600;
              margin-bottom: 5px;
            }
            div{
              font-size: 14px;
              line-height: 26px;
            }
            span{
              position: absolute;
              top: 10px;
              right: 0;
              font-size: 12px;
              color: #999;
            }
          }
          .actions{
            margin-top: 10px;
            span{
              margin-right: 10px;
              font-size: 14px;
              color: #969696;
              i{
                font-size: 14px;
                color: #969696;
              }
            }
          }
          .reply-container{
            margin-top: 20px;
            padding: 5px 0 5px 20px;
            border-left: 2px solid #d9d9d9;
            .item{
              margin-bottom: 15px;
              padding-bottom: 15px;
              border-bottom: 1px dashed #f0f0f0;
              &:last-child{
                border: 0;
              }
              .reply-tool{
                span{
                  font-size: 12px;
                  color: #969696;
                  margin-right: 10px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
