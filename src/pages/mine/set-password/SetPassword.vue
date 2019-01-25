
<template>
  <el-form :label-position="labelPosition" :model="verification" ref="verification" :rules="rules" label-width="110px" class="exchange-mine-setpassword">
    <div class="exchange-mine-setpassword-from">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/mine' }">我的</el-breadcrumb-item>
        <el-breadcrumb-item>设置支付密码</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="exchange-mine-setpassword-line"></div>
      <div class="exchange-mine-setpassword-alert">
        <el-alert  description="为保证资产安全，请勿泄露手机验证码、登录密码、谷歌验证码、支付密码给任何人" title="" type="warning" show-icon  :closable="false"></el-alert>
      </div>
      <el-form-item prop="pass" label="支付密码">
        <el-input type="password" v-model="verification.pass" autocomplete="off" class="exchange-mine-setpassword-input"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass" label="确认支付密码" class="exchange-mine-setpassword-item">
        <el-input type="password" v-model="verification.checkPass" autocomplete="off" class="exchange-mine-setpassword-input"></el-input>
      </el-form-item>
        <el-button type="primary" class="exchange-mine-setpassword-btn" @click="centerDialogVisible=true">确定</el-button>
    </div>
    <div>
      <el-dialog title="重置支付密码" :visible.sync="centerDialogVisible" width="40%" center>
        <div class="exchange-mine-dislog-input">
          <p>短信验证码</p>
            <el-input class="exchange-mine-dislog-info" ></el-input>
            <el-input type="" class="exchange-mine-dislog-send" placeholder="发送验证码" ></el-input>
            <p>登录密码</p>
            <el-input class="exchange-mine-dislog-pass"></el-input>
            <p>谷歌验证码</p>
            <el-input class="exchange-mine-dislog-pass"></el-input>
        </div>
      <span slot="footer" class="dialog-footer dialog-footer-btn">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
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
      centerDialogVisible: false,
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
  .exchange-mine-setpassword-from{
    margin:30px 0px 0px 80px;
  }
  .exchange-mine-setpassword{
    width: 900px;
    height: 630px;
    background-color: #fff;
    margin:20px auto;
    overflow: hidden;
  }
  .exchange-mine-setpassword-line{
    width: 600px;
    height: 2px;
    background-color: #ccc;
    margin-top: 10px;
  }
  .exchange-mine-setpassword-input{
    width: 500px;
  }
  .exchange-mine-setpassword-alert{
    width: 600px;
    margin:30px 0px 50px 0;
  }
  .exchange-mine-setpassword-btn{
    display: block;
    width: 500px;
    margin-left: 110px;
  }
  .exchange-mine-setpassword-item{
    margin:40px 0 40px 0;
  }
  .dialog-footer-btn button{
    width: 100px;
    display:inline-block;
  }
  .exchange-mine-dislog-input{
    margin-left:20px;
    /* width: 00px; */
  }
  .exchange-mine-dislog-input p{
    margin:20px 0 10px 0;
    font-size: 12px;
  }
  .exchange-mine-dislog-info{
    width: 395px;
  }
  .exchange-mine-dislog-send{
    width: 110px;
  }
  .exchange-mine-dislog-pass{
    width: 510px;
  }
  .el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    font-weight: 700;
    color: #000;
  }
  label.el-form-item__label {
    font-size: 12px;
  }
  .el-input__inner {
    border-color: #c0c4cc;
    font-size: 12px;
}
.el-button{
  font-size: 12px;
}
</style>
