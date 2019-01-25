<template>
  <!-- 注册页部分 -->
  <el-form :model="verification" ref="verification" :rules="rules" label-width="100px" class="exchange-register">
    <div class="exchange-register-title">
      <h1>注册</h1>
    </div>
    <el-form-item prop="email"
      :rules="[
        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
      ]">
      <el-input v-model="verification.email" class="exchange-register-input">
        <i slot="prefix">
          <img src="../../assets/Images/email.png" alt="">
        </i>
      </el-input>
    </el-form-item>
    <el-form-item prop="pass">
      <el-input type="password" v-model="verification.pass" autocomplete="off" class="exchange-register-input">
        <i slot="prefix">
          <img src="../../assets/Images/pass.png" alt="">
        </i>
      </el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="verification.checkPass" autocomplete="off" class="exchange-register-input">
        <i slot="prefix">
          <img src="../../assets/Images/pass.png" alt="">
        </i>
      </el-input>
    </el-form-item>
    <el-form-item prop="">
      <el-input class="exchange-register-input-input" v-model="VerificationCode">
        <i slot="prefix">
          <img src="../../assets/Images/yzm.png" alt="">
        </i>
      </el-input>
      <el-input type="" readonly="readonly" @click="createCode"  class="exchange-register-input-pic" v-model="checkCode"></el-input>
    </el-form-item>
    <div class="exchange-input-checkbox">
      <input type="checkbox"> <span>同意用户协议</span>
    </div>
    <el-form-item class="exchange-register-button">
      <router-link to="/mailbox-validation">
        <el-button type="primary">注册</el-button>
      </router-link>
      <div class="exchange-register-footer-button">
        <router-link to="/login" class="exchange-register-footer-button-text">已有账号、去登陆</router-link >
      </div>
    </el-form-item>
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
    removeDomain (item) {
      var index = this.verification.domains.indexOf(item)
      if (index !== -1) {
        this.verification.domains.splice(index, 1)
      }
    },
    addDomain () {
      this.verification.domains.push({
        value: '',
        key: Date.now()
      })
    },
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
    }
  },
  created () {
    this.createCode()
  }
}
</script>
<style>
  .exchange-register{
    width: 500px;
    height: 475px;
    background-color: #fff;
    margin:50px auto;
  }
  .exchange-register-input {
    width: 300px;
    text-align: center;
}
.exchange-input-checkbox{
  margin-left: 100px;
  margin-bottom: 10px;
}
.exchange-register-title{
  text-align: center;
}
.exchange-register-title h1{
  font-weight: 400;
  padding:20px 0 20px 0px;
  font-size: 22px;
}
.exchange-input-checkbox span{
  color:#666;
  font-size: 12px;
}
.exchange-register-button button{
  width: 300px;
}
.exchange-register-input-input{
  width: 210px;
}
.exchange-register-input-pic.el-input {
    width: 90px;
}
.exchange-register-footer-button{
  float: right;
  padding-right: 100px;
  margin: 10px 0 20px 0px;
}
.exchange-register-footer-button-text{
  color:#409EFF;
  font-size: 12px;
}
.exchange-register-button button{
  background-color: #ccc;
  border:#ccc;
}
</style>
