<template>
    <el-form :model="verification" ref="verification" :rules="rules" label-width="100px" class="exchange-mailboxvalidation">
      <div class="exchange-mailboxvalidation-title">
        <h1>邮箱验证</h1>
      </div>
      <div class="exchange-mailboxvalidation-info">
        <span>xx已向您的注册邮箱 1479553370@qq.com发送了一封验证邮件，请按邮件中的提示完成重置登录密码。</span>
      </div>
      <div class="exchange-mailboxvalidation-explain">
        <ul>
          <li>未收到邮件，请检查以下操作：</li>
          <li>• 邮件地址是否正确</li>
          <li>• 请在垃圾邮件或其他邮件分组中查找</li>
          <li>• 检查邮件客户端收发是否正常</li>
          <li>• 检查xx邮箱地址是否被加入黑名单</li>
        </ul>
      </div>
      <div class="exchange-mailboxvalidation-btn">
          <el-button :plain="true" @click="sendSuccess" class="exchange-mailboxvalidation-btn-text">重新发送邮件 ></el-button>
      </div>
    </el-form>
  </template>
<script>
export default {
  methods: {
    sendSuccess () {
      this.$message({
        message: '邮件重发成功',
        type: 'success'
      })
    }
  }
}
</script>
<style>
  .exchange-mailboxvalidation{
    width: 500px;
    height: 475px;
    background-color: #fff;
    margin:50px auto;
  }
  .exchange-mailboxvalidation-title{
    text-align: center;
  }
  .exchange-mailboxvalidation-info span{
    display: inline-block;
    border-bottom: 2px solid #ccc;
    margin:10px 50px 0 50px;
    padding-bottom: 15px;
  }
  .exchange-mailboxvalidation-title h1{
    font-weight: 400;
    padding:50px 0 20px 0px;
  }
  .exchange-mailboxvalidation-explain{
    margin:10px 0px 0px 50px;
  }
  .exchange-mailboxvalidation-explain li{
    line-height: 30px;
    font-size:12px;
  }
  .exchange-mailboxvalidation-btn-text{
    color:#409EFF;
    float: right;
    margin:50px 50px 0 0;
    border:none;
  }
</style>
