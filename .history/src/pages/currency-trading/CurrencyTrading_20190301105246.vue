<template>
  <el-container class='currency-trading-page'>
    <el-container>
      <el-aside width='305px' class='coin-aside'>
        <div class='coin-aside-top'>
          <div class='coin-aside-top-title'>
            <h3>市场</h3>
            <img src='../../assets/Images/start.png' alt=''>
            <el-button size='mini' type='primary'>自选</el-button>
            <el-button size='mini' type='primary'>USDT</el-button>
            <el-button size='mini' type='primary'>XRP</el-button>
            <el-button size='mini' type='primary'>EOS</el-button>
            <div class='coin-aside-line'></div>
          </div>
          <div class='coin-aside-top-search'>
            <input type='text' placeholder='请输入币种简称'>
            <img src='../../assets/Images/Search.png' alt=''>
          </div>
            <el-table :data='tableData1' height='150' class='coin-aside-back'>
              <el-table-column prop='market' sortable label='市场' width='100'>
              </el-table-column>
              <el-table-column prop='price' label='最新价' width='105'>
              </el-table-column>
              <el-table-column prop='ups' label='24H涨跌' width='100'>
              </el-table-column>
            </el-table>
        </div>
        <div class='coin-aside-bottom'>
          <div class='coin-aside-bottom-title'>
            <h3>最新成交</h3>
          </div>
          <el-table :data='tableData1' height='150'>
            <el-table-column prop='market' label='价格(USDT)' width='100'>
            </el-table-column>
            <el-table-column prop='price' label='数量(BTC)' width='105'>
            </el-table-column>
            <el-table-column prop='ups' label='时间' width='100'>
            </el-table-column>
          </el-table>
        </div>
      </el-aside>
      <el-main>
        <div class='coin-main-top'>
          <div class='coin-main-top-img'>
            <img src='../../assets/Images/moon-b.png' alt='' @click='jumpPage'>
            <img src='../../assets/Images/sun.png' alt=''>
          </div>
   
        </div>
        <div class='coin-main-bottom'>
          <el-tabs type='border-card'>
            <el-tab-pane label='限价'>
              <div class='coin-main-bottom-left fl'>
                  <h3>买入</h3>
                  <!-- <h4>可用6.6523 USDT</h4> -->
                  <span>买入价:</span> <input type='text'>&nbsp;<span>USDT</span><br>
                  <span>买入量:</span> <input type='text'>&nbsp;   <span>BTC</span>
                  <ul>
                    <li>25%</li>
                    <li>50%</li>
                    <li>75%</li>
                    <li>100%</li>
                  </ul>
                  <p>交易额: 6.66666666 USDT</p>
                  <p>手续费: 0.02 BTC</p>
                  <el-button type='success'>买入</el-button>
              </div>
              <div class='coin-main-line'></div>
              <div class='coin-main-bottom-right fr'>
                  <h3>卖出</h3>
                  <!-- <h4>可用6.6523 BTC</h4> -->
                  <span>卖出价:</span> <input type='text'>&nbsp;<span>USDT</span><br>
                  <span>卖出量:</span> <input type='text'>&nbsp;<span>BTC</span>
                  <ul>
                    <li>25%</li>
                    <li>50%</li>
                    <li>75%</li>
                    <li>100%</li>
                  </ul>
                  <p>交易额: 6.66666666 USDT</p>
                  <p>手续费: 0.02 BTC</p>
                  <el-button type='danger'>卖出</el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label='市价'>
                <div class='coin-main-bottom-left fl'>
                    <h3>买入</h3>
                    <!-- <h4>可用6.6523 USDT</h4> -->
                    <span>买出价:</span> <span>市价</span><br>
                    <span>买入量:</span> <input type='text'> <span>BTC</span>
                    <ul>
                      <li>25%</li>
                      <li>50%</li>
                      <li>75%</li>
                      <li>100%</li>
                    </ul>
                    <p>交易额: 6.66666666 USDT</p>
                    <p>手续费: 0.02 BTC</p>
                    <el-button type='success'>买入</el-button>
                </div>
                <div class='coin-main-line'></div>
                <div class='coin-main-bottom-right fr'>
                    <h3>卖出</h3>
                    <!-- <h4>可用6.6523 BTC</h4> -->
                    <span>卖出价:</span> <span>市价</span><br>
                    <span>卖出量:</span> <input type='text'> <span>BTC</span>
                    <ul>
                      <li>25%</li>
                      <li>50%</li>
                      <li>75%</li>
                      <li>100%</li>
                    </ul>
                    <p>交易额: 6.66666666 USDT</p>
                    <p>手续费: 0.02 BTC</p>
                    <el-button type='danger'>卖出</el-button>
                </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-main>
      <el-aside width='310px' class='coin-aside'>
        <div class='coin-aside-right-top'>
        <div id= "trade-view"></div>
          <div class='coin-aside-top-title'>
            <h3>最新成交</h3>
          </div>
          <el-table :data='tableData1' height='150'>
            <el-table-column prop='market' label='价格(USDT)' width='100'>
            </el-table-column>
            <el-table-column prop='price' label='数量(BTC)' width='105'>
            </el-table-column>
            <el-table-column prop='ups' label='累计' width='100'>
            </el-table-column>
          </el-table>
        </div>
        <div class='coin-aside-right-bottom'>
          <el-table :data='tableData1' height='150'>
            <el-table-column prop='market' label='价格(USDT)' width='100'>
            </el-table-column>
            <el-table-column prop='price' label='数量(BTC)' width='105'>
            </el-table-column>
            <el-table-column prop='ups' label='累计' width='100'>
            </el-table-column>
          </el-table>
        </div>
      </el-aside>
    </el-container>
    <el-footer>
      <div class='coin-footer'>
        <h3>当前委托</h3>
          <el-table :data='tableData' class='exchange-table'>
            <el-table-column prop='date' label='委托时间' width='180'></el-table-column>
            <el-table-column prop='pairs' label='交易对' width='180'></el-table-column>
            <el-table-column prop='direction' label='方向' width='120'></el-table-column>
            <el-table-column prop='type' label='类型' width='120'></el-table-column>
            <el-table-column prop='price' label='价格' width='120'></el-table-column>
            <el-table-column prop='number' label='数量' width='120'></el-table-column>
            <el-table-column prop='total' label='委托总额' width='180'></el-table-column>
            <el-table-column prop='complate' label='已成交数量' width='180'></el-table-column>
            <el-table-column prop='ncomplate' label='未成交数量' width='180'></el-table-column>
            <el-table-column
            fixed='right'
            label='操作'
            width='100'>
            <template slot-scope='scope'>
              <el-button type='text' size='small'>撤单</el-button>
            </template>
          </el-table-column>
          </el-table>
          <template>
              <h3>历史委托(近7天)</h3>
              <router-link to='/order-form' class='coin-entrust'>所有委托</router-link>
          </template>
          <el-table :data='tableData' class='exchange-table'>
            <el-table-column prop='date' label='委托时间' width='180'></el-table-column>
            <el-table-column prop='pairs' label='交易对' width='180'></el-table-column>
            <el-table-column prop='direction' label='方向' width='120'></el-table-column>
            <el-table-column prop='type' label='类型' width='120'></el-table-column>
            <el-table-column prop='price' label='价格' width='120'></el-table-column>
            <el-table-column prop='number' label='数量' width='120'></el-table-column>
            <el-table-column prop='complate' label='已成交数量' width='180'></el-table-column>
            <el-table-column prop='ncomplate' label='未成交数量' width='180'></el-table-column>
            <el-table-column prop='state' label='状态' width='120'></el-table-column>
            <el-table-column
            fixed='right'
            label='操作'
            width='100'>
            <template slot-scope='scope'>
              <el-button type='text' size='small'>撤单</el-button>
            </template>
          </el-table-column>
          </el-table>
        </div>
    </el-footer>
  </el-container>
</template>
<script>
  import { widget as TvWidget } from '../../../static/charting_library/charting_library.min'
  import FeedBase from '../../datafeed'
export default {
  // name: 'HelloWorld',
  data () {
    return {
      value10: 0,
      currency1: 'USD',
      currency2: 'BTC',
      saved_chart: null,
      chart: null,
      feed: null,
      last_price: 1234.2365,
      widget: null,
        //socket: new socket(),
        //datafeeds: new datafeeds(this),
        symbol: null,
        interval: null,
        cacheData: {},
        lastTime: null,
        getBarTimer: null,
        isLoading: true,
      tableData1: [{
        market: 'BTC/USDT',
        price: '3,977.96',
        ups: '+0.94%'
      },
      {
        market: 'BTC/USDT',
        price: '3,977.96',
        ups: '+0.94%'
      },
      {
        market: 'BTC/USDT',
        price: '3,977.96',
        ups: '+0.94%'
      }
      ],
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
  mounted() {
    let index_market = 'BTC/USDT'
    // 进入页面 默认展示的产品周期
    let index_activeCycle = '1'
    this.widget = new TvWidget({
      symbol: index_market,
      interval: index_activeCycle,
      // fullscreen: true,
      container_id: 'trade-view',
      datafeed: new FeedBase(),
      library_path: '/static/tradeview/charting_library/',
      disabled_features: ['header_symbol_search'],
      enabled_features: [],
      timezone: 'Asia/Shanghai',
      locale: 'zh',
      debug: false
    })
  },
  methods: {
    jumpPage () {
      this.$router.push('/home')
      this.$router.go(0)
    }
  }
}
</script>
<style lang='scss'>
  h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  @import '../../assets/scss/global'
</style>
