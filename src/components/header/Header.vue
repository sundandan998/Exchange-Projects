<template>
  <div>
    <el-row>
      <el-col :span="18">
        <div class="grid-content bg-purple">
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="logo">
              <img src="../../assets/Images/logo.png" alt="">
            </el-menu-item>
            <el-menu-item index="home">首页</el-menu-item>
            <el-menu-item index="center" @click="notice">公告中心</el-menu-item>
            <el-menu-item index="transaction" @click="coin">币币交易</el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <template v-if="!data">
              <el-menu-item index="register" @click="register">注册</el-menu-item>
              <el-menu-item index="login" @click="login">登录</el-menu-item>
            </template>
            <template v-else>
              <el-menu-item index="assets" @click="assets">资产</el-menu-item>
              <el-menu-item index="administration" @click="form">委托单管理</el-menu-item>
              <el-menu-item index="mine" @click="mine">我的</el-menu-item>
            </template>
            <el-submenu index="language">
              <template slot="title">简体中文</template>
              <el-menu-item index="9-1">English</el-menu-item>
              <el-menu-item index="9-2">English</el-menu-item>
              <el-menu-item index="9-3">English</el-menu-item>
            </el-submenu>
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
      // activeIndex: 'home'
      data: window.localStorage.getItem('data')
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
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
    }
  }
}
</script>
<style></style>
