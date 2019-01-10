<template>
  <div>
    <el-row>
      <el-col :span="18">
        <div class="grid-content bg-purple">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="">
              <img src="../../assets/Images/logo.png" alt="">
            </el-menu-item>
            <el-menu-item index="home">首页</el-menu-item>
            <el-menu-item index="center">公告中心</el-menu-item>
            <el-menu-item index="transaction">币币交易</el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <!-- <el-menu-item index="register" @click="register" v-if="!showname">注册</el-menu-item>
            <el-menu-item index="login" @click="login" >登录</el-menu-item> -->
            <el-menu-item index="assets">资产</el-menu-item>
            <el-menu-item index="administration">委托单管理</el-menu-item>
            <el-menu-item index="mine">我的</el-menu-item>
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
      activeIndex: 'home',
      showname: false
    }
  },
  methods: {
    register () {
      this.$router.push('/register')
    },
    login () {
      this.$router.push('/login')
    }
  }
}
</script>
<style></style>
