<template>
  <div>{{catalogId}}</div>
</template>
<script>
  import { bus } from '../../main.js'
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
    }
  }
</script>
<style lang="scss">

</style>
