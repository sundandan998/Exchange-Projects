<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#409EFF">
            <div class="exchange-logo">
                <img src="../../assets/Images/logo.png" alt="">
            </div>
            <el-menu-item index="home" @click="home">首页</el-menu-item>
            <el-menu-item index="center" @click="notice">公告中心</el-menu-item>
            <el-menu-item index="transaction" @click="coin" >币币交易</el-menu-item>
            <div class="exchange-header">
              <template v-if="!data">
                  <el-menu-item index="register" @click="register">注册</el-menu-item>
                  <el-menu-item index="login" @click="login">登录</el-menu-item>
                </template>
                <template v-else>
                  <el-menu-item index="assets" @click="assets">资产</el-menu-item>
                  <el-menu-item index="administration" @click="form">委托单管理</el-menu-item>
                  <el-menu-item index="mine" @click="mine">我的</el-menu-item>
                </template>
                <el-submenu index="language" class="exchange-language">
                  <template slot="title">简体中文</template>
                  <el-menu-item index="9-1">简体中文</el-menu-item>
                  <el-menu-item index="9-2">English</el-menu-item>
                </el-submenu>
            </div>
          </el-menu>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: 'home',
      data: window.localStorage.getItem('data')
    }
  },
  methods: {
    // 跳转首页
    home () {
      this.$router.push('/home')
    },
    // 跳转注册页面
    register () {
      this.$router.push('/register')
    },
    // 跳转登录页面
    login () {
      this.$router.push('/login')
    },
    // 跳转我的页面
    mine () {
      this.$router.push('/mine')
    },
    // 跳转资产页面
    assets () {
      this.$router.push('/assets')
    },
    // 跳转币币交易页面
    coin () {
      this.$router.push('/currency-trading')
    },
    // 跳转委托单管理页面
    form () {
      this.$router.push('/order-form')
    },
    // 跳转公告中心页面
    notice () {
      this.$router.push('/notice-center')
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
  :focus {
    outline: 0;
}
.exchange-logo {
    float: left;
    display: inline-block;
}
.exchange-logo img {
    width: 110px;
    margin-top: 10px;
}
  .exchange-header{
    float: right;
    display: -webkit-inline-box;
    display: -ms-flexbox;
  }
  .exchange-header li{
    height: 100%;
    display:inline-block;
    border-bottom: 2px solid;
  }
  .exchange-header li:last-child{
    border-bottom:none;
  }
  .exchange-language{
    width: 120px;
  }
</style>
