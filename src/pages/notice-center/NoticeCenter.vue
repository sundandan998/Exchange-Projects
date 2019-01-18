<template>
  <div class="notice-center">
    <div class="notice-center-title">
      <h3>公告中心</h3>
      <router-link to="problem-feedback">
          <el-button type="primary" size="mini">问题反馈</el-button>
      </router-link>
      <router-link to="historical-feedback">
          <el-button type="primary" size="mini">历史反馈</el-button>
      </router-link>
    </div>
    <div class="notice-center-btn">
        <el-button>公告中心</el-button>
        <el-button>常见问题</el-button>
        <el-button type="primary">新手帮助</el-button>
        <input type="text" placeholder="请输入关键字">
    </div>
    <div class="notice-center-text">
      <ul class="fl">
        <router-link to="recharge-rate">
          <li>如何注册账号？</li>
        </router-link>
        <router-link to="recharge-rate">
          <li>如何完成谷歌认证？</li>
        </router-link>
        <router-link to="recharge-rate">
          <li>如何完成手机认证？</li>
        </router-link>
        <router-link to="recharge-rate">
          <li>提币、充币攻略</li>
        </router-link>
        <router-link to="recharge-rate">
          <li>交易流程介绍</li>
        </router-link>
        <router-link to="recharge-rate">
          <li>费率</li>
        </router-link>
      </ul>
      <ul class="fr">
        <li>2018-12-12</li>
        <li>2018-12-12</li>
        <li>2018-12-12</li>
        <li>2018-12-12</li>
        <li>2018-12-12</li>
        <li>2018-12-12</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // 跳转充值费率页面
      rate () {
        // this.$router.push('/notice-center')
        // this.$router.push('/order-form')
        this.$router.push('/recharge-rate')
      }
    }
  }
}
</script>
<style lang="scss">
    @import '../../assets/scss/global';
</style>
