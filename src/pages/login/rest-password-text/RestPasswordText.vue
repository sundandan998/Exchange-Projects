<template>
    <el-form :model="verification" ref="verification" :rules="rules" label-width="100px" class="exchange-restpassword-text">
      <div class="exchange-restpassword-text-title">
        <h1>重置登录密码</h1>
        <p>*为了您的资产安全，重置登录密码修改24小时以内不允许提现。</p>
      </div>
      <div class="exchange-restpassword-text-info">
        <span>xx已向您的注册邮箱 1479553370@qq.com发送了一封验证邮件，请按邮件中的提示完成重置登录密码。</span>
      </div>
      <div class="exchange-restpassword-text-explain">
        <ul>
          <li>未收到邮件，请检查以下操作：</li>
          <li>• 邮件地址是否正确</li>
          <li>• 请在垃圾邮件或其他邮件分组中查找</li>
          <li>• 检查邮件客户端收发是否正常</li>
          <li>• 检查xx邮箱地址是否被加入黑名单</li>
        </ul>
      </div>
    </el-form>
  </template>
<script>
</script>
  <style>
    .exchange-restpassword-text{
      width: 500px;
      height: 475px;
      background-color: #fff;
      margin:50px auto;
    }
    .exchange-restpassword-text-title{
      text-align: center;
    }
    .exchange-restpassword-text-title p{
      text-align: center;
      color:red;
      font-size:12px;
    }
    .exchange-restpassword-text-info span{
      display: inline-block;
      border-bottom: 2px solid #ccc;
      margin:10px 50px 0 50px;
      padding-bottom: 15px;
    }
    .exchange-restpassword-text-title h1{
      font-weight: 400;
      padding:50px 0 20px 0px;
    }
    .exchange-restpassword-text-explain{
      margin:10px 0px 0px 50px;
    }
    .exchange-restpassword-text-explain li{
      line-height: 30px;
      font-size:12px;
    }
  </style>
