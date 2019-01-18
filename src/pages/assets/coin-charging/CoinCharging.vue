<template>
  <div class="exchange-assets">
    <el-form ref="form" label-width="100px" :label-position="labelPosition" class="exchange-assets-from">
      <div class="exchange-assets-title">
          <h2>资产>充币</h2>
          <div class="exchange-assets-line"></div>
      </div>
      <div class="exchange-assets-coin-address">
        <h4>方式一: 提币地址</h4>
        <p>16GGXHcXg4JMDCs12G1dV1GDLF1chd6RVD</p>
        <el-button type="primary" size="small" @click="copyUrl">复制地址</el-button>
      </div>
      <div class="exchange-assets-coin-scan">
        <h4>方式二: 扫一扫充币二维码</h4>
        <img src="../../../assets/Images/adress.png" alt="">
      </div>
      <div class="exchange-assets-coin-notice">
        <h4>提币须知</h4>
        <p>• 该地址为USDT充币地址，请勿转入非USDT资产，否则资产将不可找回</p>
        <p>• 转入至上述地址后，需整个网络节点确认，6次网络确认后可到账。</p>
        <p>• 最小充币金额：100 USDT ，小于最小金额的充币将不会到账且无法退回</p>
        <p>• 充币地址不会经常改变，可重复充值；如有更改，我们会通过公告通知。</p>
        <p>• 请确保电脑及浏览器安全，防止信息被篡改或泄露。</p>
      </div>
  </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    success () {
      this.$message({
        message: '复制链接成功',
        type: 'success'
      })
    },
    copyUrl () {
      const input = document.createElement('input')
      document.body.appendChild(input)
      input.setAttribute('value', '16GGXHcXg4JMDCs12G1dV1GDLF1chd6RVD')
      input.select()
      if (document.execCommand('copy')) {
        document.execCommand('copy')
      }
      document.body.removeChild(input)
    }
  }
}
</script>
<style>
  .exchange-assets-from{
    margin:30px 50px 0px 50px;
  }
  .exchange-assets{
    width: 900px;
    height: 630px;
    background-color: #fff;
    margin:20px auto;
    overflow: hidden;
  }
  .exchange-assets-title {
    margin-bottom: 30px;
}
  .exchange-assets-line{
    width: 800px;
    height: 1px;
    background-color: #ccc;
    margin-top: 20px;
  }
  .exchange-assets-coin-address p{
    width: 400px;
    height: 33px;
    line-height: 33px;
    margin: 15px 10px 10px 0;
    background-color: #ccc;
    display: inline-block;
  }
  .exchange-assets-coin-scan h4{
    margin:15px 0 15px 0;
  }
  .exchange-assets-coin-notice{
    margin-top: 20px;
  }
  .exchange-assets-coin-notice p{
    font-size: 14px;
    margin-top: 5px;
  }
</style>
