<template>
  <el-form :label-position="labelPosition" :model="verification" ref="verification" :rules="rules" label-width="100px" class="exchange-mine-close-mobile">
    <div class="exchange-mine-close-mobile-from">
      <template>
          <h2>我的>关闭手机验证</h2>
          <div class="exchange-mine-close-mobile-line"></div>
      </template>
      <div class="exchange-mine-close-mobile-alert">
        <el-alert  description="为保证资产安全，请勿泄露手机验证码、登录密码、谷歌验证码、支付密码给任何人" title="" type="warning" show-icon  :closable="false"></el-alert>
      </div>
      <el-form-item prop="" label="短信验证码">
        <el-input class="exchange-mine-close-mobile-info" ></el-input>
        <el-input type="" class="exchange-mine-close-mobile-send" placeholder="发送验证码" ></el-input>
      </el-form-item>
        <router-link to="/mine" class="exchange-mine-close-mobile-btn" >
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
  .exchange-mine-close-mobile-from{
    margin:30px 0px 0px 80px;
  }
  .exchange-mine-close-mobile{
    width: 900px;
    height: 630px;
    background-color: #fff;
    margin:20px auto;
    overflow: hidden;
  }
  .exchange-mine-close-mobile-line{
    width: 600px;
    height: 2px;
    background-color: #ccc;
    margin-top: 10px;
  }
  .exchange-mine-close-mobile-alert{
    width: 600px;
    margin:30px 0px 50px 0;
  }
  .exchange-mine-close-mobile button{
    display: block;
    width: 500px;
    margin:50px 0 0 100px;
  }
  .exchange-mine-close-mobile-info{
    width: 390px;
  }
  .exchange-mine-close-mobile-send{
    width: 110px;
  }
</style>
