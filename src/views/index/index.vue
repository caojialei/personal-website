<template>
  <div class="index-page page">
    <div class="content">
      <div class="col-main">
        <!--文章列表-->
        <section class="article-list">
          <div class="item">
            <h1>并发番@AbstractQueuedSynchronizer一文</h1>
            <span>最新修改：2018.3.13&nbsp;&nbsp;黄志鹏kira</span>
            <article>Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入何时对另一个线程可见</article>
            <p>标签：Java、后台、JMM</p>
          </div>
          <div class="item">
            <h1>并发番@AbstractQueuedSynchronizer一文</h1>
            <span>2018.3.13&nbsp;&nbsp;黄志鹏kira</span>
            <article>Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入何时对另一个线程可见</article>
            <p>标签：Java、后台、JMM</p>
          </div>
          <div class="item">
            <h1>并发番@AbstractQueuedSynchronizer一文</h1>
            <span>2018.3.13&nbsp;&nbsp;黄志鹏kira</span>
            <article>Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入何时对另一个线程可见Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入何时对另一个线程可见</article>
            <p>标签：Java、后台、JMM</p>
          </div>
        </section>

        <!--分页-->
        <section class="pagination-container">
          <pagination></pagination>
        </section>
      </div>
      <div class="col-aside">
        <!--<el-button>默认按钮</el-button>-->
        <!--<el-button type="primary">主要按钮</el-button>-->
        <!--<el-button type="success">成功按钮</el-button>-->
        <!--<el-button type="info">信息按钮</el-button>-->
        <!--<el-button type="warning">警告按钮</el-button>-->
        <!--<el-button type="danger">危险按钮</el-button>-->
        <div class="col-right">
          <!--搜索-->
          <section class="search-container">
            <div><input type="text"/></div>
          </section>

          <!--作者介绍-->
          <section class="author-container">
            <div>
              <img src="../../assets/img/huangzhipeng.jpg">
            </div>
            <p>正儿八经的Java攻城狮一枚，但因媳妇缘故而对前端兴趣浓厚 . 笔者原创文章统一使用CmdMarkdown编写，以分享形式展示，希望看官们多多指导</p>
            <ul>
              <li><a class="iconfont icon">&#xea0a;</a></li>
              <li><i class="iconfont icon">&#xe69a;</i></li>
            </ul>
          </section>

          <!--分类目录-->
          <section class="dialog-container">
            <h3>分类目录</h3>
            <ul>
              <li><router-link to="/catalog">并发番（242）</router-link></li>
              <li><a href="">并发番（242）</a></li>
              <li><a href="">集合番（242）</a></li>
              <li><a href="">c番（242）</a></li>
              <li><a href="">d番（242）</a></li>
            </ul>
          </section>

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

  export default {
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
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
  .index-page{
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
         div{
           width: 200px;
           height: 200px;
           overflow: hidden;
           margin-bottom: 20px;
           img{
             width: 100%;
           }
         }
         p{
           color: #bfbfbf;
           font-size: 14px;
         }
         /*ul{*/
           /*li{*/
             /*.tozh{*/
               /*font-family: "&#xea0a;";*/
             /*}*/
           /*}*/
         /*}*/
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
