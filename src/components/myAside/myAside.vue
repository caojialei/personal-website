<template>
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
        <p>{{authorInfo.selfDescription}}</p>
        <ul>
          <li><a class="iconfont icon-GitHub" href="https://github.com/kiraGitHub"></a></li>
          <li><a class="iconfont icon-zhihu" href="https://www.zhihu.com/people/kira-49-60/activities"></a></li>
        </ul>
      </section>

      <!--分类目录-->
      <section class="dialog-container">
        <h3>分类目录</h3>
        <ul>
          <li v-for="item in categoryList"><router-link :to="{name: 'category', params: {categoryId: item.id,name: item.name}}">{{item.name}}（{{item.articleCounts}}）</router-link></li>
        </ul>
      </section>

      <!--标签-->
      <section class="tags-container">
        <h3>标签</h3>
        <ul>
          <li v-for="item in tagList"><router-link :to="{name: 'tag', params: {tagId: item.id,name: item.name }}" >{{item.name}}</router-link></li>
        </ul>
      </section>
    </div>
  </div>
</template>
<script>
  import {bus} from '../../main.js'

  export default {
    data() {
      return {
        authorInfo: {},
        categoryListVo: {},
        categoryList: [],
        tagListVo: {},
        tagList: []
      }
    },
    mounted() {
      this.getAuthorInfo()
      this.getListCategory()
      this.getListTag()
    },
    watch: {
      // 同一路由下切换，监听路由参数的变化
      '$route'() {
        console.log('当前路由参数为：' + this.$route.params.name)
        bus.$emit('name', this.$route.params.name)
      }
    },
    methods: {
      // 获取作者信息
      getAuthorInfo() {
        this.$http.get('/website/user/getAuthorInfo')
          .then(res => {
            // 请求成功
            this.authorInfo = res.data
          }).catch(res => {
          // 请求失败
        })
      },
      // 获取文章分类
      getListCategory() {
        this.$http.get('/website/category/listCategory').then(res => {
          this.categoryListVo = res.data
          this.categoryList = res.data.categoryList
        }).catch(res => {
          console.log('请求失败')
        })
      },
      // 获取文章标签
      getListTag() {
        this.$http.get('/website/tag/listTag')
          .then(res => {
            this.tagListVo = res.data
            this.tagList = res.data.tagList
          }).catch(res => {
          alert('请求失败')
        })
      }
    }
  }
</script>
<style lang="scss">
  .col-aside{
    /*width: 280px;*/
    /*position: absolute;*/
    /*top: 0;*/
    /*right: 15px;*/
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
      li{
        display: inline-block;
        margin: 0 3px 6px 1px;
        a{
          display: inline-block;
          border: 1px solid #bfbfbf;
          border-radius: 999em;
          padding: 0 10px;
          color: #bfbfbf;
          line-height: 24px;
          font-size: 12px;
          text-decoration: none;
        }
      }
    }
  }
</style>
