<template>
  <el-form :label-position="labelPosition" :model="verification" ref="verification" :rules="rules" label-width="110px" class="exchange-mine-setup">
    <div class="exchange-mine-setup-from">
      <template>
          <h2>我的>重置密码</h2>
          <div class="exchange-mine-setup-line"></div>
      </template>
      <div class="exchange-mine-setup-alert">
        <el-alert  description="为保证资产安全，请勿泄露手机验证码、登录密码、谷歌验证码、支付密码给任何人" title="" type="warning" show-icon  :closable="false"></el-alert>
      </div>
      <el-form-item prop="pass" label="新支付密码">
        <el-input type="password" v-model="verification.pass" autocomplete="off" class="exchange-mine-setup-input"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass" label="确认支付密码" class="exchange-mine-setup-item">
        <el-input type="password" v-model="verification.checkPass" autocomplete="off" class="exchange-mine-setup-input"></el-input>
      </el-form-item>
        <router-link to="/mine" class="exchange-mine-setup-btn" >
            <el-button type="primary">确定</el-button>
        </router-link>
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
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.verification.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      labelPosition: 'left',
      verification: {
        email: '',
        pass: '',
        checkPass: '',
        from: 'system',
        coupon: {}
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' },
          { pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/, message: '密码为8-16位字母加数字组合' }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
  }
}
</script>
<style>
  .exchange-mine-setup-from{
    margin:30px 0px 0px 80px;
  }
  .exchange-mine-setup{
    width: 900px;
    height: 630px;
    background-color: #fff;
    margin:20px auto;
    overflow: hidden;
  }
  .exchange-mine-setup-line{
    width: 600px;
    height: 2px;
    background-color: #ccc;
    margin-top: 10px;
  }
  .exchange-mine-setup-input{
    width: 500px;
  }
  .exchange-mine-setup-alert{
    width: 600px;
    margin:30px 0px 50px 0;
  }
  .exchange-mine-setup button{
    display: block;
    width: 500px;
    margin-left: 110px;
  }
  .exchange-mine-setup-item{
    margin:40px 0 40px 0;
  }
</style>
