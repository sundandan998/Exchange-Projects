<template>
  <div class="notice-center-problem">
    <div class="notice-center-problem-title">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/notice-center' }">公告中心</el-breadcrumb-item>
        <el-breadcrumb-item>问题反馈</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="notice-center-problem-line"></div>
    </div>
    <div class="notice-center-problem-describe">
      <h3>问题描述</h3>
      <el-input type="textarea" placeholder="请输入内容"></el-input>
    </div>
    <div class="notice-center-problem-mobile">
      <h3>联系电话</h3> <input type="text"><br>
      <el-button type="primary">提交</el-button>
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
