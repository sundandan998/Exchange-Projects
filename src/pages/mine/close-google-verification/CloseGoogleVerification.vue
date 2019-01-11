<template>
  <el-form :label-position="labelPosition" :model="verification" ref="verification" :rules="rules" label-width="100px" class="exchange-mine-close-google">
    <div class="exchange-mine-close-google-from">
      <template>
          <h2>我的>关闭谷歌验证</h2>
          <div class="exchange-mine-close-google-line"></div>
      </template>
      <div class="exchange-mine-close-google-alert">
        <el-alert  description="为保证资产安全，请勿泄露手机验证码、登录密码、谷歌验证码、支付密码给任何人" title="" type="warning" show-icon  :closable="false"></el-alert>
      </div>
      <el-form-item prop="pass" label="谷歌验证码">
        <el-input type="password" autocomplete="off" class="exchange-mine-close-google-input"></el-input>
      </el-form-item>
      <router-link to="/mine" class="exchange-mine-close-google-btn" >
          <el-button type="primary">确定</el-button>
      </router-link>
    </div>
  </el-form>
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
  .exchange-mine-close-google-from{
    margin:30px 0px 0px 80px;
  }
  .exchange-mine-close-google{
    width: 900px;
    height: 630px;
    background-color: #fff;
    margin:20px auto;
    overflow: hidden;
  }
  .exchange-mine-close-google-line{
    width: 600px;
    height: 2px;
    background-color: #ccc;
    margin-top: 10px;
  }
  .exchange-mine-close-google-input{
    width: 500px;
  }
  .exchange-mine-close-google-alert{
    width: 600px;
    margin:30px 0px 50px 0;
  }
  .exchange-mine-close-google button{
    display: block;
    width: 500px;
    margin:50px 0 0 100px;
  }
  .exchange-mine-close-google-info{
    width: 390px;
  }
  .exchange-mine-close-google-send{
    width: 110px;
  }
</style>
