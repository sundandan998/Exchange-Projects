<template>
  <el-form :label-position="labelPosition" :model="verification" ref="verification" :rules="rules" label-width="100px" class="exchange-mine-modify">
    <div class="exchange-mine-modify-from">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/mine' }">我的</el-breadcrumb-item>
        <el-breadcrumb-item>修改登录密码</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="exchange-mine-modify-line"></div>
      <div class="exchange-mine-modify-alert">
        <el-alert  description="为保证资金安全，登录密码修改后24H内无法提币" title="" type="warning" show-icon  :closable="false"></el-alert>
      </div>
      <el-form-item prop="pass" label="原登录密码">
        <el-input type="password" v-model="verification.pas" autocomplete="off" class="exchange-mine-modify-input"></el-input>
      </el-form-item>
      <el-form-item prop="pass" label="新登录密码">
        <el-input type="password" v-model="verification.pass" autocomplete="off" class="exchange-mine-modify-input"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass" label="确认新密码">
        <el-input type="password" v-model="verification.checkPass" autocomplete="off" class="exchange-mine-modify-input"></el-input>
      </el-form-item>
      <router-link to="/mine" class="exchange-mine-modify-btn">
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
    // 跳转登录页面
    login () {
      this.$router.push('/login')
    }
  }
}
</script>
<style>
  .exchange-mine-modify-from{
    margin:30px 0px 0px 80px;
  }
  .exchange-mine-modify{
    width: 900px;
    height: 630px;
    background-color: #fff;
    margin:20px auto;
    overflow: hidden;
  }
  .exchange-mine-modify-line{
    width: 600px;
    height: 1px;
    background-color: #ccc;
    margin-top: 10px;
  }
  .exchange-mine-modify-input{
    width: 500px;
  }
  .exchange-mine-modify-alert{
    width: 600px;
    margin:30px 0px 50px 0;
  }
  .exchange-mine-modify-btn button{
    display: block;
    width: 500px;
    margin-left: 100px;
    margin-top: 50px;
  }
  .exchange-mine-modify-item{
    margin:40px 0 40px 0;
  }
.el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    font-weight: 700;
    color: #000;
}
</style>
