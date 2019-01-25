<template>
<div class="recharge-rate">
  <div class="notice-center-problem-title">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/notice-center' }">公告中心</el-breadcrumb-item>
      <el-breadcrumb-item>新手帮助</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="notice-center-problem-line"></div>
  </div>
  <div class="recharge-rate-standard">
    <h3>费率标准</h3>
    <template>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="交易费率" name="first">
          <el-table
            :data="tableData"
            style="width: 100%">
          <el-table-column
            prop="currency"
            label="币种"
            width="180">
          </el-table-column>
          <el-table-column
            prop="procedures"
            label="提币手续">
          </el-table-column>
        </el-table>
        </el-tab-pane>
        <el-tab-pane label="提币费率" name="second">
          <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="currency"
            label="币种"
            width="180">
          </el-table-column>
          <el-table-column
            prop="mininum"
            label="提币最小量"
            width="180">
          </el-table-column>
          <el-table-column
            prop="procedures"
            label="提币手续">
          </el-table-column>
        </el-table>
        </el-tab-pane>
      </el-tabs>
    </template>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first',
      tableData: [{
        currency: 'USDT',
        procedures: '0.2%',
        mininum: '100'
      }]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang="scss">
    @import '../../../assets/scss/global';
</style>
