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
        <input type="text" placeholder="请输入关键字">
        <img src="../../assets/Images/Search.png" alt="">
        <el-tabs>
          <el-tab-pane label="公告中心">
            <div class="notice-center-text">
              <ul class="fl">
                <li @click="recharge">如何注册账号？</li>
                <li @click="recharge">如何完成谷歌认证？</li>
                <li @click="recharge">如何完成手机认证？</li>
                <li @click="recharge">提币、充币攻略</li>
                <li @click="recharge">交易流程介绍</li>
                <li @click="recharge">费率</li>
              </ul>
            <ul class="fr">
              <li>2018-12-12</li>
              <li>2018-12-12</li>
              <li>2018-12-12</li>
              <li>2018-12-12</li>
              <li>2018-12-12</li>
              <li>2018-12-12</li>
            </ul>
          </div></el-tab-pane>
          <el-tab-pane label="常见问题">
          <div class="notice-center-text">
            <ul class="fl">
              <li @click="recharge">如何注册账号？</li>
              <li @click="recharge">如何完成手机认证？</li>
              <li @click="recharge">交易流程介绍</li>
            </ul>
            <ul class="fr">
              <li>2018-12-12</li>
              <li>2018-12-12</li>
              <li>2018-12-12</li>
            </ul>
          </div>
          </el-tab-pane>
          <el-tab-pane label="新手帮助">
              <div class="notice-center-text">
                <ul class="fl">
                  <li @click="recharge">如何注册账号？</li>
                  <li @click="recharge">如何完成手机认证？</li>
                  <li @click="recharge">交易流程介绍</li>
                </ul>
                <ul class="fr">
                  <li>2018-12-12</li>
                  <li>2018-12-12</li>
                  <li>2018-12-12</li>
                </ul>
              </div>
          </el-tab-pane>
        </el-tabs>
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
  },
  methods: {
    recharge () {
      this.$router.push('/recharge-rate')
    }
  }
}
</script>
<style lang="scss">
    @import '../../assets/scss/global';
</style>
