<template>
  <div id="app">
    <!--导航栏-->
    <my-header></my-header>

    <!--视图-->
    <router-view></router-view>

    <!--底部-->
    <my-footer></my-footer>
  </div>
</template>

<script>
  import myHeader from './components/myHeader/myHeader.vue'
  import myFooter from './components/myFooter/myFooter.vue'

  export default {
    name: 'app',
    components: {
      myHeader,
      myFooter
    }
  }
</script>


<style>

</style>
