<template>
  <div class="exchange-assets">
    <el-form ref="form" label-width="100px" :label-position="labelPosition" class="exchange-assets-from">
      <div class="exchange-assets-title">
          <h2>资产>提币地址管理</h2>
          <div class="exchange-assets-line"></div>
      </div>
      <div class="exchange-assets-address-alert">
          <el-alert  description="为保证资产安全，请勿泄露手机验证码、登录密码、谷歌验证码、支付密码给任何人" title="" type="warning" show-icon  :closable="false"></el-alert>
        </div>
      <div class="exchange-assets-from-select fr">
          <select>
              <option value="">选择币种</option>
              <option value="">BTC</option>
              <option value="">USDT</option>
              <option value="">ETH</option>
          </select>
          <el-popover width="300" placement="left" trigger="click">
            <span>币种:</span>
            <select class="exchange-assets-from-pop-select">
                <option value="">USDT</option>
                <option value="">ETC</option>
                <option value="">EOS</option>
                <option value="">BTH</option>
                <option value="">ETH</option>
            </select><br>
              <span>备注:</span><input type="text" class="exchange-assets-from-pop-rem"><br>
              <span>提币地址:</span><input type="text" placeholder="请输入提币地址" class="exchange-assets-from-pop-input"><br>
              <el-button type="primary" size="small" class="exchange-assets-from-btn" @click="success">确定</el-button>
              <el-button type="primary" size="mini" slot="reference">添加</el-button>
        </el-popover>
      </div>
      <div class="exchange-assets-address-list">
        <span>地址列表</span>
        <div class="exchange-assets-line"></div>
        <div class="exchange-assets-address-table">
            <el-table :data="tableData">
                <el-table-column prop="currency" label="币种" width="100"></el-table-column>
                <el-table-column  prop="address" label="提币地址" width="400"></el-table-column>
                <el-table-column prop="remarks" label="备注"></el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="del">删除</el-button>
              </template>
            </el-table-column>
            </el-table>
        </div>
      </div>
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
        currency: 'USDT',
        address: '3L6Rywf5tmUNyu7drW9kiRSnDdZUD5Sk7d',
        remarks: 'USDT优先使用该地址'
      }, {
        currency: 'USDT',
        address: '3L6Rywf5tmUNyu7drW9kiRSnDdZUD5Sk7d',
        remarks: 'USDT优先使用该地址'
      }]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    success () {
      this.$message({
        message: '添加成功',
        type: 'success'
      })
    },
    del () {
      this.$message('删除成功')
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
    margin-bottom: 10px;
  }
  .exchange-assets-from-select select{
    height: 26px;
    margin-right: 30px;
  }
  .exchange-assets-address-alert{
    margin-bottom: 30px;
  }
  .exchange-assets-address-table{
    margin-top: 20px;
  }
  .exchange-assets-from-select button{
    width: 80px;
  }
  .exchange-assets-from-pop-select{
    width: 200px;
    height: 30px;
    margin-left: 26px;
  }
  .exchange-assets-from-pop-input{
    width: 200px;
    height: 25px;
    margin:30px 0 0 10px;
  }
  .exchange-assets-from-pop-rem{
    width: 200px;
    height: 25px;
    margin:30px 0 0 30px;
  }
  .exchange-assets-from-btn{
    width: 200px;
    margin-top: 30px;
    margin-left: 60px;
  }
</style>
