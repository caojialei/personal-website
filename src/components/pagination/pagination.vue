<template>
  <div class="pagination">
    <!--<div class="block">-->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="articleListVo.pageSize"
        layout="prev, pager, next, jumper"
        background
        :total="articleListVo.total">
      </el-pagination>
    <!--</div>-->
  </div>
</template>
<script>
  export default {
    props: {
      articleListVo: {
        type: Object
      }
    },
    data() {
      return {
        currentPage: 1
      }
    },
    methods: {
      // 每页显示列表数
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      // 获取当前页码
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      }
    }
  }
</script>
<style lang="scss">

</style>
