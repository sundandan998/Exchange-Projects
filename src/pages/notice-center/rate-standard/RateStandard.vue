<template>
<div class="recharge-rate">
  <div class="recharge-rate-title">
    <h3>公告中心>新手帮助</h3>
    <el-button type="primary" size="mini">问题反馈</el-button>
  </div>
  <div class="recharge-rate-standard">
    <h3>费率标准</h3>
    <template>
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="交易费率" name="first">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
        </el-table>
        </el-tab-pane>
        <el-tab-pane label="提币费率" name="second">
          <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
        </el-tab-pane>
      </el-tabs>
    </template>
  </div>
</div>
</template>
<script></script>
<style lang="scss">
    @import '../../../assets/scss/global';
</style>
