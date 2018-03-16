<template>
  <div class="index main">
    <div class="content">
      <div class="col-main">
        <!--文章列表-->
        <div class="article-list">
          <div class="item">
            <h1>并发番@AbstractQueuedSynchronizer一文</h1>
            <span>2018.3.13&nbsp;&nbsp;黄志鹏kira</span>
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
        </div>
      </div>
      <div class="col-aside">
        <div class="col-right"></div>
      </div>
    </div>
  </div>

</template>
<script>

</script>
<style lang="scss">
  .main{
    margin: 0 auto;
    max-width: 1200px;
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
     }
     .col-aside{
       width: 280px;
       position: absolute;
       top: 0;
       right: 0;
     }
   }
  }

</style>
