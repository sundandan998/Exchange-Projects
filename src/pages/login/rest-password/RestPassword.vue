<template>
    <el-form :model="verification" ref="verification" :rules="rules" label-width="100px" class="exchange-restpassword">
      <div class="exchange-restpassword-title">
        <h1>重置登录密码</h1>
      </div>
      <el-form-item prop="email"
        :rules="[
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]">
        <el-input v-model="verification.email" class="exchange-restpassword-input" placeholder="邮箱"></el-input>
      </el-form-item>
      <el-form-item class="exchange-restpassword-button">
        <el-button type="primary" @click="restpasswordtext">登录</el-button>
      </el-form-item>
    </el-form>
  </template>
<script>
export default {
  data () {
    return {
      verification: {
        domains: [{
          value: ''
        }],
        email: ''
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
    // 跳转重置密码说明页面
    restpasswordtext () {
      this.$router.push('/rest-password-text')
    }
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
  <style>
    .exchange-restpassword{
      width: 500px;
      height: 475px;
      background-color: #fff;
      margin:50px auto;
    }
    .exchange-restpassword-input {
      width: 300px;
      text-align: center;
    }
    .exchange-input-checkbox{
      margin-left: 100px;
      margin-bottom: 10px;
    }
    .exchange-restpassword-title{
      text-align: center;
    }
    .exchange-restpassword-title h1{
      font-weight: 400;
      padding:50px 0 50px 0px;
    }
    .exchange-input-checkbox span{
      color:#666;
    }
    .exchange-restpassword-button button{
      width: 300px;
    }
    .exchange-restpassword-footer-button :last-child{
      float: right;
      padding-right: 100px;
    }
    .exchange-restpassword-input-pic.el-input {
        width: 150px;
    }
    .exchange-restpassword-button button{
      background-color: #ccc;
      border:#ccc;
    }
    .exchange-restpassword-button {
    margin-top: 100px;
    }
  </style>
