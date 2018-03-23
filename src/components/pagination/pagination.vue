<template>
  <div class="pagination">
    <!--<div class="block">-->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="1"
        layout="prev, pager, next, jumper"
        background
        :total="5">
      </el-pagination>
    <!--</div>-->
  </div>
</template>
<script>
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      }
    },
    data() {
      return {
        currentPage1: 2
      }
    }
  }
</script>
<style lang="scss">

</style>
