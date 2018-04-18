<template>
  <div class="catalog-page page">
    <section class="catalog-name">
    </section>
    <div>catalogId：{{catalogId}}</div>
    <!--对应目录文章列表-->
    <section class="catalog-container">
      <!--<div class="item" v-for="item in articleList">-->
        <!--<router-link :to="{ name: 'article', params: { articleId: item.articleId }}">-->
          <!--<h1>{{item.articleTitle}}</h1>-->
          <!--<span>最新修改：{{item.createdAt}}&nbsp;&nbsp;{{item.author}}</span>-->
          <!--<article>{{item.content}}</article>-->
          <!--<p>标签：<i v-for="tag in item.tags">{{tag.title}} </i></p>-->
        <!--</router-link>-->
      <!--</div>-->
    </section>
  </div>
</template>
<script>
  import bus from '../../main.js'

  export default {
    data() {
      return {
        'catalogId': ''
      }
    },
    created() {
      bus.$on('catalogId', (id) => {
        console.log('getSomething')
        this.catalogId = id
      })
    },
    mounted() {
      this.getCatalogArticleList()
    },
    methods: {
      getCatalogArticleList() {
//        this.$http.post('/website/catalogarticlelist', {
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
      }
    }
  }
</script>
<style lang="scss">

</style>
