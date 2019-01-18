<template>
 <div class="recharge-rate">
   <div class="recharge-rate-title">
     <h3>公告中心>新手帮助</h3>
     <el-button type="primary" size="mini">问题反馈</el-button>
   </div>
   <div class="recharge-rate-explain">
     <h2>交易所服务费说明</h2>
      <ul>
        <li>
          <img src="../../../assets/Images/head-pic.png" alt="">
          <span>张三</span>
          <p>2018-12-12</p>
        </li>
      </ul>
   </div>
   <div class="recharge-rate-content">
     <h3>1.交易费率</h3>
     <span>
        所有交易收取0.2%交易手续费。（扣除收取到的资产)
        交易手续费率由我司依据市场制定，有变动会提前公告
        具体交易费率请查看
      <router-link to="rate-standard">《交易费率表》</router-link>
     </span>
     <h3>2.提币费率</h3>
     <span>各币种提币时收取的提币手续费各不相同<br>
       请参考：<router-link to="rate-standard">《提币费率表》</router-link>
    </span>
    <h3>3.充币费率</h3>
    <span>免费</span>
   </div>
 </div>
</template>
<script></script>
<style lang="scss">
    @import '../../../assets/scss/global';
</style>
