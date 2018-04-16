<template>
  <!--评论-->
  <div class="comments">
    <!--评论文章-->
    <!--<div v-show="showCommentsBox">-->
      <!--<h3>留言</h3>-->
      <!--<div class="comments-box">-->
        <!--<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" label-position="left" class="comments-ruleForm">-->
          <!--<el-form-item label="姓名" prop="name" size="small">-->
            <!--<el-input v-model="ruleForm.name"></el-input>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="邮件地址" prop="emailaddress" size="small">-->
            <!--<el-input v-model="ruleForm.emailaddress"></el-input>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="评论" prop="comment">-->
            <!--<el-input type="textarea" v-model="ruleForm.comment" :rows="5" placeholder="来说两句吧" ></el-input>-->
          <!--</el-form-item>-->
          <!--<el-form-item class="form-button">-->
            <!--<el-button type="primary" @click="submitCommentsForm('ruleForm')">发布</el-button>-->
          <!--</el-form-item>-->
        <!--</el-form>-->
      <!--</div>-->
    <!--</div>-->

    <!--评论列表-->
    <div class="comments-list">
      <h3>{{comments.total}}条评论</h3>
      <ul>
        <li v-for="(comment,index) in commentsList">
          <div class="comment">
            <h5>{{comment.c_user_name}}</h5>
            <span>{{comment.createdCt}}</span>
            <div>{{comment.c_content}}</div>
          </div>
          <div class="actions">
            <span class="iconfont icon-dianzan1"><i v-show="comment.likes_count" @click="doFabulous(comment)">{{comment.likes_count}}人点</i>赞</span>
            <span class="iconfont icon-huifu" @click="doReply(index,'replyC',comment)">回复</span>
          </div>
          <section class="reply-container">
            <div v-for="rItem in comment.reply_list" class="item">
              <p><span class="name">{{rItem.r_user_name}}</span>：<span class="name">@{{rItem.r_c_user_name}}</span> <span>{{rItem.r_content}}</span></p>
              <div class="reply-tool">
                <span class="time">{{rItem.createdRt}}</span>
                <span class="iconfont icon-huifu" @click="doReply(index,'replyR', rItem)">回复</span>
              </div>
            </div>
            <!--回复评论-->
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  label-width="80px" label-position="left" class="reply-ruleForm"  v-if="replyIndex==index">
              <el-form-item label="姓名" prop="name" size="small">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="邮件地址" prop="emailaddress" size="small">
                <el-input v-model="ruleForm.emailaddress"></el-input>
              </el-form-item>
              <el-form-item label="评论" prop="reply">
                <el-input type="textarea" v-model="ruleForm.reply" :rows="3" :placeholder="holder"></el-input>
              </el-form-item>
              <el-form-item class="form-button">
                <el-button type="cancel" @click="replyIndex = -1;showCommentsBox = 1" class="cancel">取消</el-button>
                <el-button type="primary" @click="submitReplyForm('ruleForm')">发布</el-button>
              </el-form-item>
            </el-form>
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
        commentsList: [], // 评论列表
        replyIndex: -1, // 回复下标
        ruleForm: { // 评论表单校验内容
          name: '',
          emailaddress: '',
          comment: '',
          reply: ''
        },
        rules: {// 评论表单校验规则
          name: [
            { required: true, message: '请输入名字', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          emailaddress: [
            { type: 'email', required: true, message: '请输入邮箱地址', trigger: 'blur' }
          ],
          comment: [
            { required: true, message: '评论不能为空', trigger: 'blur' },
            { min: 0, max: 500, message: '评论不能为空', trigger: 'blur' }
          ],
          reply: [
            { required: true, message: '评论不能为空', trigger: 'blur' },
            { min: 0, max: 500, message: '评论不能为空', trigger: 'blur' }
          ]
        },
        textareaType: '',
        showCommentsBox: 1,  // 评论框显示状态
        holder: ''
      }
    },
    mounted() {
    },
    watch: {
      comments: function () {
        this.commentsList = this.comments.data
      }
    },
    methods: {
      // 回复评论
      doReply(index, type, obj) {
        this.replyIndex = index
        this.showCommentsBox = 0
        if (type === 'replyC') {
          // 评论他人评论
          this.holder = '@' + obj.c_user_name + '：'
        } else {
          // 评论他人回复
          this.holder = '@' + obj.r_user_name + '：'
        }
      },
      // 提交评论
      submitCommentsForm(formName) {
        console.log('ruleForm' + this.ruleForm)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.post('/website/doComment', {
              name: this.ruleForm.name,
              emailAdress: this.ruleForm.emailaddress,
              comment: this.ruleForm.comment
            }, { headers: {
              // post请求的跨域
              'Content-Type': 'application/x-www-form-urlencoded'
            }}).then(res => {
              this.submitSuccess()
            }).catch(res => {
              // 请求失败
              console.log('error submit!!')
            })
            this.submitSuccess()
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      // 提交回复成功
      submitReplyForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.submitSuccess()
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      // 评论提交成功
      submitSuccess() {
        this.$message('提交成功')
      },
      // 点赞评论
      doFabulous(obj) {
        console.log(obj.c_user_name)
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
              .name{
                font-weight: 600;
              }
              .reply-tool{
                span{
                  font-size: 12px;
                  color: #969696;
                  margin-right: 10px;
                }
              }
            }
            .reply-box{
              textarea{
                padding: 10px 15px;
                width: 100%;
                height: 80px;
                font-size: 13px;
                border: 1px solid #dcdcdc;
                border-radius: 4px;
                background-color: hsla(0,0,71%,.1);
                resize: none;
              }
              .button-box{
                margin-top: 10px;
                text-align: right;
                button{
                  line-height: 35px;
                  width: 80px;
                  margin-left: 10px;
                  background: #fff;
                }
                .r-submit{
                  background: #000;
                  color: #fff;
                }
              }
            }
          }
        }
      }
    }
  }

  /*通用 评论框*/
  .el-form{
    .el-form-item--small{
      .el-form-item__content{
        max-width: 250px;
      }
    }
    .form-button{
      text-align: right;
      .el-button{
        padding:12px 25px;
        span{
          color: #fff;
        }
        &.cancel{
          span{
            color: #000!important;
          }
        }
      }
    }
  }
</style>
