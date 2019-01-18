<template>
  <el-form :model="verification" ref="verification" :rules="rules" label-width="100px" class="exchange-login">
    <div class="exchange-login-title">
      <h1>登录</h1>
    </div>
    <el-form-item prop="email">
      <el-input v-model="verification.email" class="exchange-login-input" placeholder="邮箱"></el-input>
    </el-form-item>
    <el-form-item prop="pass">
      <el-input type="password" v-model="verification.pass" autocomplete="off" placeholder="密码" class="exchange-login-input"></el-input>
    </el-form-item>
    <el-form-item prop="verificationcode">
      <el-input placeholder="图片验证码" class="exchange-login-input-pic" v-model="VerificationCode"></el-input>
      <el-input type="" readonly="readonly" @click="createCode"  class="exchange-login-input-pic" v-model="checkCode"></el-input>
    </el-form-item>
    <div class="exchange-input-checkbox">
      <input type="checkbox" v-on:click="changeColor(item)"> <span>记住账号</span>
    </div>
    <el-form-item class="exchange-login-button">
      <el-button type="primary" @click="handleLogin">登录</el-button>
      <div class="exchange-login-footer-button">
          <router-link to="/rest-password" class="exchange-login-footer-button-text">忘记密码？</router-link >
          <router-link to="/register" class="exchange-login-footer-button-text">注册账号</router-link >
      </div>
    </el-form-item>
  </el-form>
</template>
<style src="../login/css/Login.css"></style>
<script>
export default {
  name: 'login',
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
      verification: {
        email: '',
        pass: '',
        checkPass: '',
        from: 'system',
        coupon: {}
      },
      rules: {
        // 校验邮箱
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        // 校验密码
        pass: [
          { validator: validatePass, trigger: 'blur' },
          { pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/, message: '密码为8-16位字母加数字组合' }
        ]
      }
    }
  },
  methods: {
    // 验证码验证
    createCode () {
      this.code = ''
      this.checkCode = ''
      this.VerificationCode = ''
      var codeLength = 6
      var random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      for (var i = 0; i < codeLength; i++) {
        var index = Math.floor(Math.random() * 36)
        this.code += random[index]
      }
      this.checkCode = this.code
    },
    // 向后台发送请求
    async handleLogin () {
      const res = await this.$http.get('/api/user')
      const data = res
      console.log(data)
      if (data.status === 200) {
        window.localStorage.setItem('data', JSON.stringify(data))
        console.log(data)
        // saveUserInfo(data)
        this.$router.push({
          name: 'home'
        })
        this.$message({
          type: 'success',
          message: '登录成功!'
        })
      }
    }
    // reset () {
    //   this.$refs.AccountForm.resetFields()
    // }
  },
  created () {
    this.createCode()
  },
  mounted () {
    if (this.$route.query.from) {
      this.from = this.$route.query.from
    }
    if (this.$route.query.id) {
      this.id = this.$route.query.id
    }
    if (this.$route.query.form === 'system') {
      this.initCouponInfo()
    }
  }
}
</script>
<style lang="scss">
  /* @import'../../assets/scss/global.scss' */
</style>
