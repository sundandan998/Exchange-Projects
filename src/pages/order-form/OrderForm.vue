<template>
  <div class="order-form">
    <div class="order-form-title">
        <h3>委托单管理</h3>
        <div class="order-form-line"></div>
    </div>
    <div class="order-form-tabs">
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          <div class="order-form-tabs-title">
            <span>交易对:</span>
            <select>
              <option value="">BTC</option>
              <option value="">EOS</option>
            </select>
            <span class="order-form-usdt">/</span>
            <select >
              <option value="">USDT</option>
            </select>
            <span>方向</span>
            <select>
              <option value="">买入</option>
              <option value="">卖出</option>
            </select>
            <span>委托单号</span> <input type="text">
            <el-button size="mini" type="primary">搜索</el-button>
            <el-button size="mini" type="primary">重置</el-button>
          </div>
          <div class="order-form-tabs-table">
              <el-table :data="tableData">
                  <el-table-column prop="oddnum" label="委托单号" width="130"></el-table-column>
                  <el-table-column prop="date" label="提交时间" width="150"></el-table-column>
                  <el-table-column prop="pairs" label="交易对" width="100"></el-table-column>
                  <el-table-column prop="direction" label="方向" width="80"></el-table-column>
                  <el-table-column prop="type" label="类型" width="80"></el-table-column>
                  <el-table-column prop="price" label="委托价格" width="110"></el-table-column>
                  <el-table-column prop="number" label="委托数量" width="90"></el-table-column>
                  <el-table-column prop="complate" label="已成交数量" width="130"></el-table-column>
                  <el-table-column prop="ncomplate" label="未成交数量" width="130"></el-table-column>
                  <el-table-column
                  fixed="right"
                  label="操作"
                  width="100">
                  <template slot-scope="scope">
                    <el-button type="text" size="small">撤单</el-button>
                  </template>
                </el-table-column>
              </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">
            <div class="order-form-tabs-configure-title">
                <span>交易对:</span>
                <select>
                  <option value="">BTC</option>
                  <option value="">EOS</option>
                </select>
                <span class="order-form-configure-usdt">/</span>
                <select >
                  <option value="">USDT</option>
                </select>
                <span>方向</span>
                <select>
                  <option value="">买入</option>
                  <option value="">卖出</option>
                </select>
                <span>状态:</span>
                <select>
                  <option value="">全部</option>
                  <option value="">已成交</option>
                  <option value="">部分成交</option>
                </select>
                <span>委托单号</span> <input type="text">
                <span>交易时间</span> <input type="text">
                <el-button size="mini" type="primary">搜索</el-button>
                <el-button size="mini" type="primary">重置</el-button>
              </div>
              <div class="order-form-tabs-table">
                <el-table :data="tableData">
                    <el-table-column prop="oddnum" label="委托单号" width="130"></el-table-column>
                    <el-table-column prop="date" label="提交时间" width="150"></el-table-column>
                    <el-table-column prop="pairs" label="交易对" width="100"></el-table-column>
                    <el-table-column prop="direction" label="方向" width="80"></el-table-column>
                    <el-table-column prop="type" label="类型" width="80"></el-table-column>
                    <el-table-column prop="price" label="委托价格" width="110"></el-table-column>
                    <el-table-column prop="number" label="委托数量" width="90"></el-table-column>
                    <el-table-column prop="state" label="状态" width="80"></el-table-column>
                    <el-table-column prop="ncomplate" label="成交数量" width="80"></el-table-column>
                    <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                    <template slot-scope="scope">
                      <el-button type="text" size="small">撤单</el-button>
                    </template>
                  </el-table-column>
                  <el-table-column prop="ncomplate" label="手续费" width="80"></el-table-column>
                </el-table>
              </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName2: 'first',
      value10: 0,
      tableData: [{
        oddnum: '20181212110',
        date: '2016-05-02',
        pairs: 'BTC/USDT',
        direction: '买入',
        type: '币币',
        price: '3,977.96',
        number: '1.0000',
        complate: '0.100',
        ncomplate: '0.9000',
        state: '已完成'
      }
      ]}
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang="scss">
    @import '../../assets/scss/global';
</style>
