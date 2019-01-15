<template>
  <div class="exchange-assets">
    <el-form ref="form" label-width="100px" :label-position="labelPosition" class="exchange-assets-from">
      <div class="exchange-assets-title">
          <h2>资产>充提明细</h2>
          <!-- <div class="exchange-assets-line"></div> -->
      </div>
      <div class="exchange-assets-from-select">
          <span>状态:</span>
        <select>
              <option value="">全部</option>
              <option value="">成功</option>
              <option value="">失败</option>
              <option value="">确认中</option>
              <option value="">处理中</option>
          </select>
          <span>币种:</span>
          <select>
              <option value="">全部</option>
              <option value="">成功</option>
              <option value="">失败</option>
              <option value="">确认中</option>
              <option value="">处理中</option>
          </select>
          <el-button type="primary" size="mini">搜索</el-button>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick" class="exchange-assets-from-tabs">
          <el-tab-pane label="用户管理" name="first">
            <el-table :data="tableData">
              <el-table-column prop="date" label="时间"></el-table-column>
              <el-table-column  prop="name" label="币种"></el-table-column>
              <el-table-column prop="address" label="数量"></el-table-column>
              <el-table-column prop="address" label="状态"></el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="配置管理" name="second">
              <el-table :data="tableData">
                <el-table-column prop="date" label="时间"></el-table-column>
                <el-table-column  prop="name" label="币种"></el-table-column>
                <el-table-column prop="address" label="数量"></el-table-column>
                <el-table-column  prop="name" label="手续费"></el-table-column>
                <el-table-column prop="address" label="状态"></el-table-column>
              </el-table>
          </el-tab-pane>
      </el-tabs>
  </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first',
      tableData: [{
        date: 'BTC',
        name: '1.23569874',
        address: '1.00000000'
      }, {
        date: 'USDT',
        name: '99,365.12',
        address: '0.12000000'
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
<style>
  .exchange-assets-from{
    margin:30px 50px 0px 50px;
  }
  .exchange-assets{
    width: 900px;
    height: 630px;
    background-color: #fff;
    margin:20px auto;
    overflow: hidden;
  }
  .exchange-assets-title {
    margin-bottom: 30px;
}
  .exchange-assets-from-select{
    margin-left: 490px;
  }
  .exchange-assets-from-select select{
    height: 26px;
  }
  .exchange-assets-from-select button{
   margin-left: 30px;
  }
</style>
