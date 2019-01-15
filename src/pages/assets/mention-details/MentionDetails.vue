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
              <el-table-column prop="number" label="数量"></el-table-column>
              <el-table-column prop="state" label="状态"></el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="配置管理" name="second">
              <el-table :data="tableData">
                <el-table-column prop="date" label="时间"></el-table-column>
                <el-table-column  prop="name" label="币种"></el-table-column>
                <el-table-column prop="number" label="数量"></el-table-column>
                <el-table-column  prop="service" label="手续费"></el-table-column>
                <el-table-column prop="state" label="状态"></el-table-column>
              </el-table>
          </el-tab-pane>
      </el-tabs>
      <!-- 分页部分 -->
      <app-paging></app-paging>
  </el-form>
  </div>
</template>
<script>
import paging from '../../../components/public/paging/Paging'
export default {
  data () {
    return {
      activeName: 'first',
      tableData: [{
        date: '2019-1-15 12:12:12',
        name: 'USDT',
        state: '成功',
        number: '1.000000',
        service: '0.00001'
      }, {
        date: '2019-1-15 12:12:12',
        name: 'USDT',
        state: '成功',
        number: '1.000000',
        service: '0.00001'
      }]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  },
  components: {
    'app-paging': paging
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
    margin-left: 460px;
  }
  .exchange-assets-from-select select{
    height: 26px;
    margin-right: 30px;
  }
  .exchange-assets-paging{
  margin-top: 200px;
  text-align: center;
  }
</style>
