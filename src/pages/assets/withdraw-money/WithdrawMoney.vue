<template>
  <div class="exchange-assets">
    <el-form ref="form" label-width="100px" :label-position="labelPosition" class="exchange-assets-withdraw-money">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/assets' }">资产</el-breadcrumb-item>
        <el-breadcrumb-item>提币</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="exchange-assets-line"></div>
      <div class="exchange-assets-withmoney-address">
        <h4>提币地址</h4>
        <select>
            <option value="">USDT优先使用改地址</option>
            <option value="">房东账户</option>
            <option value="">添加新地址</option>
        </select>
      </div>
      <div class="exchange-assets-withmoney-num">
        <h4>提币数量</h4>
        <input type="text">&nbsp;&nbsp; <span>USDT</span>
      </div>
      <div class="exchange-assets-withmoney-interest">
          <span>手续费</span><span>实际到账</span>
        <ul>
          <li>0.00000001<b>USDT</b></li>
          <li>0.00000001<b>USDT</b></li>
        </ul>
      </div>
      <div class="exchange-assets-withmoney-notice">
        <h4> <img src="../../../assets/Images/notice.png" alt=""> 提币须知</h4>
        <p>• 最小提币金额为:0.002 USDT，小于最小提币金额将不会到账且无法退回</p>
        <p>• 您可在资产-充提明细查看提币进度</p>
        <p>• 24H提币额度为100USDT，超过无法提币</p>
        <p>• 成功提交提币申请后，待审核状态会自动扣除USDT资产，取消相对应的提币申请后，将按照1:1 比例自动增加USDT资产。</p>
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
  }
}
</script>
<style>
  .exchange-assets-withdraw-money{
    margin:30px 50px 0px 50px;
  }
  .exchange-assets-withdraw-money h4{
    font-size:14px;
  }
  .exchange-assets{
    width: 900px;
    height: 630px;
    background-color: #fff;
    margin:20px auto;
    overflow: hidden;
  }
.exchange-assets-line{
  width: 800px;
  height: 1px;
  background-color: #ccc;
  margin: 20px 0 20px 0;
}
.exchange-assets-withmoney-address select{
  width: 500px;
  height: 40px;
  margin: 10px 0px 10px 0px;
  font-size: 12px;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    font-weight: 700;
    color: #000;
}
.exchange-assets-withmoney-num {
    margin: 30px 0 20px 0px;
}
.exchange-assets-withmoney-num span{
  font-size: 14px;
}
.exchange-assets-withmoney-num input{
  width: 500px;
  height: 35px;
  margin: 10px 0px 10px 0px;
}
.exchange-assets-withmoney-interest {
    height: 90px;
}
.exchange-assets-withmoney-interest span{
  font-size:12px;
  margin-right: 165px;
}
.exchange-assets-withmoney-interest b{
  margin-left: 40px;
  font-weight: 400;
}
.exchange-assets-withmoney-interest li{
  width: 100px;
  height: 30px;
  background-color: #ccc;
  float: left;
  margin:5px 100px 0 0;
  line-height: 30px;
  font-size: 12px;
}
.exchange-assets-withmoney-notice p{
  font-size: 12px;
  margin-top: 5px;
}
</style>
