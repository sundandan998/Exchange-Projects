<template>
  <div class="notice-center-problem">
    <div class="notice-center-problem-title">
      <h3>公告中心>问题反馈</h3>
    </div>
    <div class="notice-center-problem-describe">
      <h3>问题描述</h3>
      <el-input type="textarea" placeholder="请输入内容"></el-input>
    </div>
    <div class="notice-center-problem-mobile">
      <h3>联系电话</h3> <input type="text">
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
