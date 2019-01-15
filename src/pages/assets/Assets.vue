<template>
  <!-- 标题部分 -->
  <div class="exchange-assets">
    <el-form ref="form" label-width="100px" :label-position="labelPosition" class="exchange-assets-from">
      <div class="exchange-assets-title">
          <h2>资产</h2>
          <div class="exchange-assets-line"></div>
      </div>
      <div class="exchange-assets-total">
          <div class="exchange-assets-total-data fl">
            <span>总资产(USDT)</span>
            <p>6,66325785</p>
          </div>
          <div class="exchange-assets-total-btn fr">
             <input type="text" placeholder="请输入币种"><img src="../../assets/Images/Search.png" alt="">
             <router-link to="mention-details">
                <el-button type="primary" size="mini">充提明细</el-button>
             </router-link>
             <router-link to="money-withdrawal-address">
                <el-button type="primary" size="mini">提币地址管理</el-button>
             </router-link>
          </div>
      </div>
      <!-- 表格部分 -->
      <div class="exchange-assets-table">
          <el-table :data="tableData">
              <el-table-column prop="date" label="币种"></el-table-column>
              <el-table-column  prop="name" label="可用"></el-table-column>
              <el-table-column prop="address" label="冻结"></el-table-column>
              <el-table-column
              fixed="right"
              label="操作"
              width="100">
              <template slot-scope="scope">
                <router-link to="coin-charging">
                    <el-button type="text" size="small">充币</el-button>
                </router-link>
                  <router-link to="withdraw-money">
                    <el-button type="text" size="small">提币</el-button>
                </router-link>
              </template>
            </el-table-column>
          </el-table>
      </div>
      <!-- 分页部分 -->
     <app-paging></app-paging>
  </el-form>
  </div>
</template>
<script>
import paging from '../../components/public/paging/Paging'
export default {
  data () {
    return {
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
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
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
  .exchange-assets-line{
    width: 800px;
    height: 1px;
    background-color: #ccc;
    margin-top: 20px;
  }
  .exchange-assets-total{
    margin-top: 30px;
  }
  .exchange-assets-total-btn input{
    height: 25px;
    border-radius: 5px;
    border:none;
    border:1px solid #ccc;
  }
  .exchange-assets-total-data p{
    margin-top: 10px;
  }
  .exchange-assets-total-btn input[type="text"] {
    font-size: 12px;
    text-indent: 10px;
    margin-right: 10px;
}
.exchange-assets-table{
  margin-top: 110px;
}
.exchange-assets-total-btn img{
 position: relative;
 left: -35px;
 top: 5px;
}
</style>
