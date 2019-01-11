<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>
<script>
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
export default {
  data () {
    return {
    }
  },
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  methods: {
    // 是否显示头部
    // public_header: function (bool) {
    //   this.header_show = false
    // }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  body{
    background-color: #F2F2F2;
    /* width: 980;
    height: 100%;
    background: url(assets/Images/bj1.jpg) no-repeat; */
  }
  .left{
    float: left;
  }
  .right{
    float: right;
  }
</style>
