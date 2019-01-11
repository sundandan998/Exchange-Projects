<template>
  <div class="exchange-mine">
    <el-form ref="form" label-width="100px" :label-position="labelPosition" class="exchange-mine-from">
      <div class="exchange-mine-title">
          <h2>我的</h2>
          <el-button type="primary" size="mini" class="exchange-mine-outbtn" @click="login">退出登录</el-button>
          <div class="exchange-mine-line"></div>
      </div>
      <div class="exchange-mine-information">
         <img src="../../assets/Images/info.png" alt=""> <span>基本信息</span>
      </div>
      <el-form-item label="昵称">
        <el-input class="exchange-mine-input" readonly="readonly"></el-input>
      </el-form-item>
      <el-form-item label="邮箱账号">
        <el-input class="exchange-mine-input" readonly="readonly"></el-input>
      </el-form-item>
      <el-form-item label="登录密码">
        <el-input class="exchange-mine-input"></el-input>
        <el-button type="primary" size="mini" class="exchange-mine-btn" @click="ModifyPassword">修改</el-button>
      </el-form-item>
      <div class="exchange-mine-information">
        <img src="../../assets/Images/safety certificate.png" alt=""> <span>安全认证</span><h5>（开启多重验证，保障资产安全）</h5>
      </div>
      <el-form-item label="手机号验证">
        <el-input class="exchange-mine-input" readonly="readonly" placeholder="请选择是否需要开启"></el-input>
        <router-link to="/openmobileverification">
            <el-switch class="exchange-mine-switch" v-model="close" ></el-switch>
        </router-link>
      </el-form-item>
      <el-form-item label="谷歌器验证">
        <el-input class="exchange-mine-input" placeholder="请选择是否需要开启" readonly="readonly" ></el-input>
        <router-link to="/opengoogleverification">
            <el-switch class="exchange-mine-switch" v-model="close" ></el-switch>
        </router-link>
      </el-form-item>
      <el-form-item label="支付密码">
        <el-input class="exchange-mine-input" readonly="readonly"></el-input>
        <router-link to="/modifypassword">
            <el-button type="primary" size="mini" class="exchange-mine-btn-modify" @click="SetUp">修改</el-button>
        </router-link>
        <el-button type="primary" size="mini" class="exchange-mine-btn" @click="SetUp">设置</el-button>
      </el-form-item>
  </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      open: true,
      close: false,
      labelPosition: 'left'
    }
  },
  methods: {
    // 跳转登录页面
    login () {
      this.$router.push('/login')
    },
    // 跳转修改登录密码页面
    ModifyPassword () {
      this.$router.push('/Modify')
    },
    // 跳转设置支付密码页面
    SetUp () {
      this.$router.push('/setpassword')
    }
  }
}
</script>
<style>
  .exchange-mine-from{
    margin:30px 0px 0px 80px;
  }
  .exchange-mine{
    width: 900px;
    height: 630px;
    background-color: #fff;
    margin:20px auto;
    overflow: hidden;
  }
  .exchange-mine-line{
    width: 600px;
    height: 2px;
    background-color: #ccc;
    margin-top: 10px;
  }
  .exchange-mine-switch{
   margin-left: -50px;
  }
  .exchange-mine-input{
    width: 500px;
  }
  .exchange-mine-btn{
    position: relative;
    left: -70px;
  }
  .exchange-mine-btn-modify{
    position: absolute;
    left: 370px;
    top: 8px;
  }
  .exchange-mine-information {
    margin:30px 0px 20px 0px;
  }
  .exchange-mine-information span {
    font-size:20px;
  }
  .exchange-mine-information h5{
    display: inline-block;
    font-weight: normal;
  }
  .exchange-mine-outbtn{
    margin-left: 460px;
  }
  .exchange-mine h2{
    display: inline-block;
  }
  .exchange-mine-information img{
   width: 25px;
   margin-top:5px;
  }
</style>
