<template>
  <el-form :label-position="labelPosition" :model="verification" ref="verification" :rules="rules" label-width="100px" class="exchange-mine-open-mobile">
    <div class="exchange-mine-open-mobile-from">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/mine' }">我的</el-breadcrumb-item>
        <el-breadcrumb-item>开启手机验证</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="exchange-mine-open-mobile-line"></div>
      <div class="exchange-mine-open-mobile-alert">
        <el-alert  description="为保证资产安全，请勿泄露手机验证码、登录密码、谷歌验证码、支付密码给任何人" title="" type="warning" show-icon  :closable="false"></el-alert>
      </div>
      <el-form-item prop="pass" label="登录密码">
        <el-input type="password" v-model="verification.pass" autocomplete="off" class="exchange-mine-open-mobile-input"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass" label="手机号" class="exchange-mine-open-mobile-item">
        <el-input type="password" autocomplete="off" class="exchange-mine-open-mobile-input"></el-input>
      </el-form-item>
      <el-form-item prop="" label="短信验证码">
        <el-input class="exchange-mine-open-mobile-info" ></el-input>
        <el-input type="" class="exchange-mine-open-mobile-send" placeholder="发送验证码" ></el-input>
      </el-form-item>
        <router-link to="/mine" class="exchange-mine-open-mobile-btn" >
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
        ]
      }
    }
  },
  methods: {
  }
}
</script>
<style>
  .exchange-mine-open-mobile-from{
    margin:30px 0px 0px 80px;
  }
  .exchange-mine-open-mobile{
    width: 900px;
    height: 630px;
    background-color: #fff;
    margin:20px auto;
    overflow: hidden;
  }
  .exchange-mine-open-mobile-line{
    width: 600px;
    height: 1px;
    background-color: #ccc;
    margin-top: 10px;
  }
  .exchange-mine-open-mobile-input{
    width: 500px;
  }
  .exchange-mine-open-mobile-alert{
    width: 600px;
    margin:30px 0px 50px 0;
  }
  .exchange-mine-open-mobile button{
    display: block;
    width: 500px;
    margin-left: 100px;
  }
  .exchange-mine-open-mobile-item{
    margin:40px 0 40px 0;
  }
  .exchange-mine-open-mobile-info{
    width: 390px;
  }
  .exchange-mine-open-mobile-send{
    width: 110px;
  }
  .el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    font-weight: 700;
    color: #000;
}
label.el-form-item__label {
  font-size: 12px;
}
input.el-input__inner {
  font-size: 12px;
}
.el-button{
  font-size: 12px;
}
</style>
