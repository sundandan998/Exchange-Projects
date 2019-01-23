<template>
  <el-form :model="verification" ref="verification" :rules="rules" label-width="100px" class="exchange-mine-open-google">
    <div class="exchange-mine-open-google-from">
      <template>
          <h2>我的>开启谷歌验证</h2>
          <div class="exchange-mine-open-google-line"></div>
      </template>
      <div class="exchange-mine-open-google-alert">
        <el-alert  description="为保证资产安全，请勿泄露手机验证码、登录密码、谷歌验证码、支付密码给任何人" title="" type="warning" show-icon  :closable="false"></el-alert>
      </div>
      <el-steps v-model="active" :active="active" finish-status="success" class="exchange-mine-open-google-step">
        <el-step title="1、下载APP"></el-step>
        <el-step title="2、扫描二维码"></el-step>
        <el-step title="3、备份密钥"></el-step>
        <el-step title="4、开启谷歌验证"></el-step>
      </el-steps>
      <div class="exchange-mine-open-google-step-one" v-if="active===0">
        <p>下载并安装谷歌验证器APP</p>
        <ul>
          <li><img src="../../../assets/Images/step (1).png" alt=""></li>
          <li><img src="../../../assets/Images/step (1).png" alt=""></li>
        </ul>
      </div>
      <div class="exchange-mine-open-google-step-one" v-if="active===1">
          <p>a、按谷歌验证器APP提示扫描二维码</p>
          <img src="../../../assets/Images/ewm.png" alt="">
          <p>b、如无法扫描，请将如下16位密钥填入谷歌验证器APP</p>
          <span class="exchange-mine-open-google-step-key">DFDIFMDOMIOIFGODIFDS</span>
      </div>
      <div class="exchange-mine-open-google-step-one" v-if="active===2">
          <p>为防止手机丢失/更换/谷歌验证器APP 卸载，请将密钥保存至他人无法获取的安全地方，<br> 使用该密钥可恢复谷歌验证器绑定</p>
          <span class="exchange-mine-open-google-step-key">DFDIFMDOMIOIFGODIFDS</span>
      </div>
      <div class="exchange-mine-open-google-step-one" v-if="active===3">
        <el-form-item prop="pass" label="登录密码" class="exchange-mine-open-google-item">
          <el-input type="password" v-model="verification.pass" autocomplete="off" class="exchange-mine-open-google-input"></el-input>
        </el-form-item>
        <el-form-item prop="pass" label="谷歌验证码">
          <el-input type="password" v-model="verification.pass" autocomplete="off" class="exchange-mine-open-google-input"></el-input>
        </el-form-item>
      </div>
      <div class="exchange-mine-open-google-step-line">
        <div class="exchange-mine-open-google-step-btn">
          <el-button @click="prev">上一步</el-button>
          <h4>已下载</h4>
          <el-button @click="next">下一步</el-button>
        </div>
      </div>
    </div>
  </el-form>
</template>
<script>
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.verification.checkPass !== '') {
          this.$refs.verification.validateField('checkPass')
        }
        callback()
      }
    }
    return {
      active: 0,
      verification: {
        pass: '',
        checkPass: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' },
          { pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/, message: '密码为8-16位字母加数字组合' }
        ]
      }
    }
  },
  methods: {
    // 上一步
    prev () {
      --this.active
      if (this.active < 0) this.active = 0
    },
    // 下一步
    next () {
      if (this.active++ > 2) this.active = 0
    }
  }
}
</script>
<style>
  .exchange-mine-open-google-from{
    margin:30px 0px 0px 80px;
  }
  .exchange-mine-open-google{
    width: 900px;
    height: 630px;
    background-color: #fff;
    margin:20px auto;
    overflow: hidden;
  }
  .exchange-mine-open-google-line{
    width: 600px;
    height: 2px;
    background-color: #ccc;
    margin-top: 10px;
  }
  .exchange-mine-open-google-alert{
    width: 600px;
    margin:30px 0px 50px 0;
  }
  .exchange-mine-open-google-step{
    width: 700px;
    height: 100px;
  }
  .exchange-mine-open-google-step-one li{
    float: left;
    padding-right: 40px;
  }
  .exchange-mine-open-google-step-one {
    height: 215px;
  }
  .exchange-mine-open-google-step-one p{
   margin-bottom: 20px;
  }
  .exchange-mine-open-google-step-line{
    width: 600px;
    height: 1px;
    background-color: #ccc;
    margin-top: 30px;
  }
  .exchange-mine-open-google-step-btn{
    float: right;
    margin-top: 20px;
  }
  .exchange-mine-open-google-step-btn h4{
    display:inline-block;
    margin: 0 20px 0 350px;
    font-weight: 400;
  }
  .exchange-mine-open-google-step-key{
    width: 400px;
    height: 30px;
    background-color: #ccc;
    display: inline-block;
    text-align: center;
    line-height: 30px;
  }
  .exchange-mine-open-google-input{
    width: 500px;
  }
  .exchange-mine-open-google-item{
    margin:10px 0 50px 0;
  }
</style>
