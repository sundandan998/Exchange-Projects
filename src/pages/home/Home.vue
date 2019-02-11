<template>
  <el-container class="currency-trading-black">
    <el-container>
      <el-aside width="310px">
        <div class="coin-aside-b-top">
            <div class="coin-aside-b-top-title">
              <h3>市场</h3>
              <img src="../../assets/Images/start.png" alt="">
              <el-button size="mini" type="primary">自选</el-button>
              <el-button size="mini" type="primary">USDT</el-button>
              <el-button size="mini" type="primary">XRP</el-button>
              <el-button size="mini" type="primary">EOS</el-button>
              <div class="coin-aside-b-line"></div>
            </div>
            <div class="coin-aside-b-top-search">
              <input type="text" placeholder="请输入币种简称">
              <img src="../../assets/Images/Search.png" alt="">
            </div>
            <div class="coin-aside-b-top-data">
                <span>市场</span>
                <span>最新价</span>
                <span>24H涨跌</span>
            <div class="coin-aside-b-line"></div>
            <div class="coin-aside-b-slider fr">
              <el-slider v-model="value10" vertical height="100px"></el-slider>
            </div>
              <p>
                <img src="../../assets/Images/start1.png" alt="">
                <ul>
                  <li>BTC/USDT</li>
                  <li>3939.55 </li>
                  <li>+0.94%</li>
                </ul>
              </p>
              <p>
                <img src="../../assets/Images/start1.png" alt="">
                <ul>
                  <li>EOS/USDT</li>
                  <li>2.69612</li>
                  <li>+0.87%</li>
                </ul>
              </p>
              <p>
                <img src="../../assets/Images/start1.png" alt="">
                <ul>
                  <li>ETH/USDT</li>
                  <li>128.475</li>
                  <li>+0.87%</li>
                </ul>
              </p>
            </div>
          </div>
          <div class="coin-aside-b-bottom">
            <div class="coin-aside-b-bottom-title">
              <h3>最新成交</h3>
            </div>
            <div class="coin-aside-b-bottom-data">
                <span>价格(USDT)</span>
                <span>数量(BTC)</span>
                <span>时间</span>
            <div class="coin-aside-b-line"></div>
            <div class="coin-aside-b-slider fr">
              <el-slider v-model="value10" vertical height="100px"></el-slider>
            </div>
              <p>
                <img src="../../assets/Images/start1.png" alt="">
                <ul>
                  <li>BTC/USDT</li>
                  <li>3939.55 </li>
                  <li>+0.94%</li>
                </ul>
              </p>
              <p>
                <img src="../../assets/Images/start1.png" alt="">
                <ul>
                  <li>EOS/USDT</li>
                  <li>2.69612</li>
                  <li>+0.87%</li>
                </ul>
              </p>
              <p>
                <img src="../../assets/Images/start1.png" alt="">
                <ul>
                  <li>ETH/USDT</li>
                  <li>128.475</li>
                  <li>+0.87%</li>
                </ul>
              </p>
            </div>
          </div>
      </el-aside>
      <el-main>
        <div class="coin-main-top">
            <div class="coin-main-top-img">
              <img src="../../assets/Images/moon.png" alt="">
              <router-link to="currency-trading">
                  <img src="../../assets/Images/sun-w.png" alt="">
              </router-link>
            </div>
          <img src="../../assets/Images/kb.png" alt="">
        </div>
        <div>
          <el-tabs type="border-card" class="coin-main-bottom-b">
            <el-tab-pane label="限价">
              <div class="coin-main-bottom-left fl">
                  <h3>买入</h3>
                  <h4>可用6.6523 USDT</h4>
                  <span>买入价:</span> <input type="text"> USDT<br>
                  <span>买入量:</span> <input type="text"> BTC
                  <ul>
                    <li>25%</li>
                    <li>50%</li>
                    <li>75%</li>
                    <li>100%</li>
                  </ul>
                  <p>交易额: 6.66666666 USDT</p>
                  <p>手续费: 0.02 BTC</p>
                  <el-button type="success">买入</el-button>
              </div>
              <div class="coin-main-line"></div>
              <div class="coin-main-bottom-right fr">
                  <h3>卖出</h3>
                  <h4>可用6.6523 BTC</h4>
                  <span>卖出价:</span> <input type="text"> USDT<br>
                  <span>卖出量:</span> <input type="text"> BTC
                  <ul>
                    <li>25%</li>
                    <li>50%</li>
                    <li>75%</li>
                    <li>100%</li>
                  </ul>
                  <p>交易额: 6.66666666 USDT</p>
                  <p>手续费: 0.02 BTC</p>
                  <el-button type="danger">卖出</el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="市价">
                <div class="coin-main-bottom-left fl">
                    <h3>买入</h3>
                    <h4>可用6.6523 USDT</h4>
                    <span>买出价:</span> 市价 <br>
                    <span>买入量:</span> <input type="text"> BTC
                    <ul>
                      <li>25%</li>
                      <li>50%</li>
                      <li>75%</li>
                      <li>100%</li>
                    </ul>
                    <p>交易额: 6.66666666 USDT</p>
                    <p>手续费: 0.02 BTC</p>
                    <el-button type="success">买入</el-button>
                </div>
                <div class="coin-main-line"></div>
                <div class="coin-main-bottom-right fr">
                    <h3>卖出</h3>
                    <h4>可用6.6523 BTC</h4>
                    <span>卖出价:</span> 市价<br>
                    <span>卖出量:</span> <input type="text"> BTC
                    <ul>
                      <li>25%</li>
                      <li>50%</li>
                      <li>75%</li>
                      <li>100%</li>
                    </ul>
                    <p>交易额: 6.66666666 USDT</p>
                    <p>手续费: 0.02 BTC</p>
                    <el-button type="danger">卖出</el-button>
                </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-main>
      <el-aside width="310px">
        <div class="coin-aside-b-right">
          <div class="coin-aside-b-right-title">
            <h3>买卖盘</h3>
          </div>
          <div class="coin-aside-b-right-data">
              <span>价格</span>
              <span>数量</span>
              <span>累计</span>
            <div class="coin-aside-b-line"></div>
              <p>
                <ul>
                  <li>BTC/USDT</li>
                  <li>3939.55 </li>
                  <li>+0.94%</li>
                </ul>
              </p>
              <p>
                <ul>
                  <li>EOS/USDT</li>
                  <li>2.69612</li>
                  <li>+0.87%</li>
                </ul>
              </p>
              <p>
                <ul>
                  <li>ETH/USDT</li>
                  <li>128.475</li>
                  <li>+0.87%</li>
                </ul>
              </p>
              <div class="coin-aside-b-line"></div>
              <h3>3942.92</h3>
              <div class="coin-aside-b-line"></div>
              <p>
                <ul>
                  <li>BTC/USDT</li>
                  <li>3939.55 </li>
                  <li>+0.94%</li>
                </ul>
              </p>
              <p>
                <ul>
                  <li>EOS/USDT</li>
                  <li>2.69612</li>
                  <li>+0.87%</li>
                </ul>
              </p>
              <p>
                <ul>
                  <li>ETH/USDT</li>
                  <li>128.475</li>
                  <li>+0.87%</li>
                </ul>
              </p>
          </div>
        </div>
      </el-aside>
    </el-container>
    <el-footer>
      <div class="coin-footer-black">
        <div class="teslist">
          <button @click="methods1">显示console</button>
        </div>
        <h3>当前委托</h3>
          <el-table :data="tableData" :row-style="tableRowStyle" :header-cell-style="tableHeaderColor">
            <el-table-column prop="date" label="委托时间" width="180"></el-table-column>
            <el-table-column prop="pairs" label="交易对" width="180"></el-table-column>
            <el-table-column prop="direction" label="方向" width="120"></el-table-column>
            <el-table-column prop="type" label="类型" width="120"></el-table-column>
            <el-table-column prop="price" label="价格" width="120"></el-table-column>
            <el-table-column prop="number" label="数量" width="120"></el-table-column>
            <el-table-column prop="total" label="委托总额" width="180"></el-table-column>
            <el-table-column prop="complate" label="已成交数量" width="180"></el-table-column>
            <el-table-column prop="ncomplate" label="未成交数量" width="180"></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button type="text" size="small">撤单</el-button>
            </template>
            </el-table-column>
          </el-table>
          <template>
              <h3>历史委托(近7天)</h3>
              <router-link to="/order-form" class="coin-entrust">所有委托</router-link>
          </template>
          <el-table :data="tableData" :row-style="tableRowStyle" :header-cell-style="tableHeaderColor">
            <el-table-column prop="date" label="委托时间" width="180"></el-table-column>
            <el-table-column prop="pairs" label="交易对" width="180"></el-table-column>
            <el-table-column prop="direction" label="方向" width="120"></el-table-column>
            <el-table-column prop="type" label="类型" width="120"></el-table-column>
            <el-table-column prop="price" label="价格" width="120"></el-table-column>
            <el-table-column prop="number" label="数量" width="120"></el-table-column>
            <el-table-column prop="complate" label="已成交数量" width="180"></el-table-column>
            <el-table-column prop="ncomplate" label="未成交数量" width="180"></el-table-column>
            <el-table-column prop="state" label="状态" width="120"></el-table-column>
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
    </el-footer>
  </el-container>

</template>
<script>
import {realconsole} from '../currency-trading/js/1'
export default {
  data () {
    return {
      value10: 0,
      tableData: [{
        date: '2016-05-02',
        pairs: 'BTC/USDT',
        direction: '买入',
        type: '币币',
        price: '3,977.96',
        number: '1.0000',
        total: '3,977.96',
        complate: '0.100',
        ncomplate: '0.9000',
        state: '已完成'
      },
      {
        date: '2016-05-02',
        pairs: 'BTC/USDT',
        direction: '买入',
        type: '币币',
        price: '3,977.96',
        number: '1.0000',
        total: '3,977.96',
        complate: '0.100',
        ncomplate: '0.9000',
        state: '已完成'
      }]
    }
  },
  methods: {
    methods1: function () {
      realconsole()
    },
    // 修改table tr行的背景色
    tableRowStyle ({ row, rowIndex }) {
      return 'background-color: #000; color:#fff;'
    },
    // 修改table header的背景色
    tableHeaderColor ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background-color:#000;color: #fff;'
      }
    }
  }
}
</script>
<style>
.currency-trading-black{
  background-color: #000;
}
.el-aside {
  background-color: #000;
  padding-left: 5px;
  color:#fff;
}
.coin-aside-b-top-title{
  margin:5px 0px 10px 0px;
}
.coin-aside-b-top-title h3{
    margin-bottom: 10px;
    font-weight: 400;
}
.coin-aside-b-line{
  width: 300px;
  height: 1px;
  margin-top: 10px;
  background-color: #000;
  overflow: hidden;
}
.coin-aside-b-top-search input{
  width: 260px;
  height: 30px;
  text-indent: 1em;
  font-size: 12px;
}
.coin-aside-b-top-search img{
  height: 25px;
  position: relative;
  top: 10px;
}
.coin-aside-b-top-data{
  margin:10px 0 20px 0;
}
.coin-aside-b-top-data span{
  margin: 10px 55px 10px 0;
  font-size: 12px;
}
.coin-aside-b-top-data p{
  display: -webkit-inline-box;
}
.coin-aside-b-top-data img{
  position: relative;
  top: 10px;
}
.coin-main-bottom-b{
  background-color: #000;
  color:#fff;
  border:0;
}
.coin-aside-b-top-data li{
  float: left;
  margin: 10px 13px 0px 12px;
  font-size: 12px;
}
.coin-aside-b-slider{
  margin-top: 10px;
}
.coin-aside-b-bottom-title h3{
  font-weight: normal;
}
.coin-aside-b-bottom-data{
  margin:10px 0 50px 0;
}
.coin-aside-b-bottom-data span{
  margin: 10px 40px 10px 0;
  font-size: 12px;
}
.coin-aside-b-bottom-data p{
  display: -webkit-inline-box;
}
.coin-aside-b-bottom-data img{
  position: relative;
  top: 10px;
}
.coin-aside-b-bottom-data li{
  float: left;
  margin: 10px 22px 0px 10px;
  font-size: 12px;
}
.coin-main-top img{
  width: 860px;
  height: 300px;
}
.coin-main-top-img img{
  width: 20px;
  height: 20px;
}
.coin-main-bottom-left h4{
    color:red;
    margin:10px 0 10px 0;
    font-weight: 400;
    font-size: 14px;
}
.coin-main-bottom-left span{
    font-size: 12px;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
  color: #409EFF;
  /* background-color: #000; */
}
.coin-main-bottom-left p{
    margin:10px 10px 10px 5px;
    font-size: 12px;
}
.coin-main-bottom-left input{
    width: 280px;
    height: 25px;
    margin:10px 0 10px 0;
}
.coin-main-bottom-left ul{
    margin-left: 59px;
}
.coin-main-bottom-left ul li{
    float: left;
    border: 1px solid #ccc;
    font-size: 12px;
    margin:0 50px 20px 0;
}
.coin-main-bottom-left button{
    width: 380px;
}
.currency-trading-black
.coin-main-line{
  height: 260px;
  width: 1px;
  background-color: #000;
  float: left;
  margin-left: 18px;
}
.coin-main-bottom-right h4{
    color:red;
    margin:10px 0 10px 0;
    font-weight: 400;
    font-size: 14px;
}
.coin-main-bottom-right span{
    font-size: 12px;
}
.coin-main-bottom-right p{
    margin:10px 10px 10px 5px;
    font-size: 12px;
}
.coin-main-bottom-right input{
    width: 280px;
    height: 25px;
    margin:10px 0 10px 0;
}
.coin-main-bottom-right ul{
    margin-left: 59px;
}
.coin-main-bottom-right ul li{
    float: left;
    border: 1px solid #ccc;
    font-size: 12px;
    margin:0 50px 20px 0;
}
.coin-main-bottom-right button{
    width: 380px;
}
.coin-aside-b-right-title h3{
  font-weight: normal;
}
.coin-aside-b-right-data{
  margin:10px 0 50px 0;
}
.coin-aside-b-right-data span{
  margin: 10px 60px 0px 8px;
  font-size: 12px;
}
  .coin-aside-b-right-data p{
  display: -webkit-inline-box;
}
.coin-aside-b-right-data li{
  float: left;
  margin: 10px 36px 0px 8px;
  font-size:12px;
}
.coin-aside-b-right-data h3{
  color:red;
  text-align: center;
  line-height: 35px;
  margin-top: 5px;
}
.coin-footer-black{
  width: 1519px;
  margin-left: -20px;
  background-color: #000;
}
.coin-footer-black h3{
  float: left;
  margin:10px 0 10px 0;
  color:#fff;
}
.coin-entrust{
  float: right;
  margin:10px 60px 0 0;
  font-size:14px;
  color:#409EFF;
}
.coin-main-bottom-b>.el-tabs__header{
  width: 860px;
  height: 38px;
  margin:-1px 0 -1px 0;
  background-color: #000;
  color:#fff;
  /* border-bottom:0; */
}
.coin-footer-black .el-table tr:hover>td{
  background-color:#000;
}
</style>
