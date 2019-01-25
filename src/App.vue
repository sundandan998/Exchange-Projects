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
  methods: {
  },
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>
<style lang="scss" type="text">
  *{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color:#fff;
  }
  body{
    background-color: #F2F2F2;
  }
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
</style>
