<template>
  <div class="notice-center-problem">
    <div class="notice-center-problem-title">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/notice-center' }">公告中心</el-breadcrumb-item>
        <el-breadcrumb-item>历史反馈</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="notice-center-problem-line"></div>
    </div>
    <div class="notice-center-histor-describe">
      <ul>
        <li><h3>问题描述</h3></li>
        <li><h3>反馈时间</h3></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
    @import '../../../assets/scss/global';
</style>
