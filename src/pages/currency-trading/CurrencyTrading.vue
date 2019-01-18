<template>
  <el-container>
    <el-container>
      <el-aside width="310px">
        <div class="coin-aside-top">
            <div class="coin-aside-top-title">
              <h3>市场</h3>
              <img src="../../assets/Images/start.png" alt="">
              <el-button size="mini" type="primary">自选</el-button>
              <el-button size="mini" type="primary">USDT</el-button>
              <el-button size="mini" type="primary">XRP</el-button>
              <el-button size="mini" type="primary">EOS</el-button>
              <div class="coin-aside-line"></div>
            </div>
            <div class="coin-aside-top-search">
              <input type="text" placeholder="请输入币种简称">
              <img src="../../assets/Images/Search.png" alt="">
            </div>
            <div class="coin-aside-top-data">
                <span>市场</span>
                <span>最新价</span>
                <span>24H涨跌</span>
            <div class="coin-aside-line"></div>
            <div class="coin-aside-slider fr">
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
          <div class="coin-aside-bottom">
            <div class="coin-aside-bottom-title">
              <h3>最新成交</h3>
            </div>
            <div class="coin-aside-bottom-data">
                <span>价格(USDT)</span>
                <span>数量(BTC)</span>
                <span>时间</span>
            <div class="coin-aside-line"></div>
            <div class="coin-aside-slider fr">
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
          <img src="../../assets/Images/k.png" alt="">
        </div>
        <div class="coin-main-bottom">
          <el-tabs type="border-card">
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
        <div class="coin-aside-right">
          <div class="coin-aside-right-title">
            <h3>买卖盘</h3>
          </div>
          <div class="coin-aside-right-data">
              <span>价格</span>
              <span>数量</span>
              <span>累计</span>
            <div class="coin-aside-line"></div>
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
              <div class="coin-aside-line"></div>
              <h3>3942.92</h3>
              <div class="coin-aside-line"></div>
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
      <div class="coin-footer">
        <h3>当前委托</h3>
          <el-table :data="tableData">
            <el-table-column prop="date" label="委托时间" width="180"></el-table-column>
            <el-table-column prop="pairs" label="交易对" width="180"></el-table-column>
            <el-table-column prop="direction" label="方向" width="120"></el-table-column>
            <el-table-column prop="type" label="类型" width="120"></el-table-column>
            <el-table-column prop="price" label="价格" width="120"></el-table-column>
            <el-table-column prop="number" label="数量" width="120"></el-table-column>
            <el-table-column prop="total" label="委托总额" width="180"></el-table-column>
            <el-table-column prop="complate" label="已成交数量" width="180"></el-table-column>
            <el-table-column prop="ncomplate" label="未成交数量" width="180"></el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button type="text" size="small">撤单</el-button>
            </template>
          </el-table-column>
          </el-table>
          <template>
              <h3>历史委托(近7天)</h3>
              <router-link to="/entrust" class="coin-entrust">所有委托</router-link>
          </template>
          <el-table :data="tableData">
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
  }
}
</script>
<style lang="scss">
  @import '../../assets/scss/global';
</style>
