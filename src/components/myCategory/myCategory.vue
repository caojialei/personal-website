<template>
  <div>{{categoryId}}</div>
</template>
<script>
  import { bus } from '../../main.js'
  export default {
    data() {
      return {
        'categoryId': ''
      }
    },
    created() {
      bus.$on('categoryId', (id) => {
          console.log('getSomething')
          this.categoryId = id
        })
    }
  }
</script>
<style lang="scss">

</style>
