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
  import { widget as TvWidget } from '../../static/tradeview/charting_library/charting_library.min.js'
  import FeedBase from "../datafeed"
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
  mounted () {
    const thisVue = this
    // thisVue.getChartData();//todo: do odkomentowania na feedzie
    // if(window.localStorage.getItem('chart_settings')) //todo: do sprawdzenia w bardziej zaawansowanym stanie
    // thisVue.saved_chart = JSON.parse(window.localStorage.getItem('chart_settings'));
    thisVue.feed = thisVue.createFeed()
    TradingView.onready(function (configurationData) {
      thisVue.chart = window.tvWidget = new TradingView.widget({
        fullscreen: true,
        autosize: true,
        symbol: thisVue.currency1 + ':' + thisVue.currency2,
        // container_id: 'chart_container',
        datafeed: thisVue.feed,
        library_path: '../../../static1/custom_scripts/chart_main',
        locale: 'en',
        timezone: 'Etc/UTC', // todo: ustawianie timezone'a po strefie usera
        charts_storage_api_version: '1.1',
        client_id: 'tradingview.com',
        user_id: 'public_user_id',
        debug: true,
        // loading_screen:{ backgroundColor: '#000000',foregroundColor: '#000000', }//todo:do it
        interval: '60',
        // timeframe:'',//todo: na koncu
        toolbar_bg: '#20334d',
        // saved_data: thisVue.savedData,
        allow_symbol_change: true,
        time_frames: [
          {text: '1y', resolution: '1W'},
          {text: '6m', resolution: '3D'},
          {text: '3m', resolution: '1D'},
          {text: '1m', resolution: '1D'},
          {text: '1w', resolution: '30'},
          {text: '3d', resolution: '30'},
          {text: '1d', resolution: '30'},
          {text: '6h', resolution: '15'},
          {text: '1h', resolution: '1'}],
        drawings_access: {
          type: 'black',
          // tools: [{name: 'Regression Trend'}]//todo: moje
          tools: [{name: 'Trend Line', grayed: true}, {name: 'Trend Angle', grayed: true}] // todo: bb
        },
        disabled_features: [
          'header_symbol_search',
          'header_interval_dialog_button',
          'show_interval_dialog_on_key_press',
          'symbol_search_hot_key',
          'study_dialog_search_control',
          'display_market_status',
          'header_compare',
          'edit_buttons_in_legend',
          'symbol_info',
          'border_around_the_chart',
          'main_series_scale_menu',
          'star_some_intervals_by_default',
          'datasource_copypaste',
          'right_bar_stays_on_scroll',
          'context_menus',
          'go_to_date',
          'compare_symbol',
          'border_around_the_chart',
          'timezone_menu',
          // 'header_resolutions',//todo: przetestowac
          // 'control_bar',//todo: przetestowac
          // 'edit_buttons_in_legend',//todo: przetestowac
          'remove_library_container_border'
        ],
        enabled_features: [
          'dont_show_boolean_study_arguments',
          'use_localstorage_for_settings',
          'remove_library_container_border',
          'save_chart_properties_to_local_storage',
          'side_toolbar_in_fullscreen_mode',
          'hide_last_na_study_output',
          'constraint_dialogs_movement'// todo: nie do końca jestem pewien
        ],
        studies_overrides: {
          'volume.volume.color.0': '#fe4761',
          'volume.volume.color.1': '#3fcfb4',
          'volume.volume.transparency': 75
        },
        overrides: {
          'symbolWatermarkProperties.color': 'rgba(0,0,0, 0)',
          'paneProperties.background': '#20334d',
          'paneProperties.vertGridProperties.color': '#344568',
          'paneProperties.horzGridProperties.color': '#344568',
          'paneProperties.crossHairProperties.color': '#58637a',
          'paneProperties.crossHairProperties.style': 2,
          'mainSeriesProperties.style': 9,
          'mainSeriesProperties.showCountdown': false,
          'scalesProperties.showSeriesLastValue': true,
          'mainSeriesProperties.visible': false,
          'mainSeriesProperties.showPriceLine': false,
          'mainSeriesProperties.priceLineWidth': 1,
          'mainSeriesProperties.lockScale': false,
          'mainSeriesProperties.minTick': 'default',
          'mainSeriesProperties.extendedHours': false,
          'volumePaneSize': 'tiny',
          editorFontsList: ['Lato', 'Arial', 'Verdana', 'Courier New', 'Times New Roman'],
          'paneProperties.topMargin': 5,
          'paneProperties.bottomMargin': 5,
          'paneProperties.leftAxisProperties.autoScale': true,
          'paneProperties.leftAxisProperties.autoScaleDisabled': false,
          'paneProperties.leftAxisProperties.percentage': false,
          'paneProperties.leftAxisProperties.percentageDisabled': false,
          'paneProperties.leftAxisProperties.log': false,
          'paneProperties.leftAxisProperties.logDisabled': false,
          'paneProperties.leftAxisProperties.alignLabels': true,
          // 'paneProperties.legendProperties.showStudyArguments': true,
          'paneProperties.legendProperties.showStudyTitles': true,
          'paneProperties.legendProperties.showStudyValues': true,
          'paneProperties.legendProperties.showSeriesTitle': true,
          'paneProperties.legendProperties.showSeriesOHLC': true,
          'scalesProperties.showLeftScale': false,
          'scalesProperties.showRightScale': true,
          'scalesProperties.backgroundColor': '#20334d',
          'scalesProperties.lineColor': '#46587b',
          'scalesProperties.textColor': '#8f98ad',
          'scalesProperties.scaleSeriesOnly': false,
          'mainSeriesProperties.priceAxisProperties.autoScale': true,
          'mainSeriesProperties.priceAxisProperties.autoScaleDisabled': false,
          'mainSeriesProperties.priceAxisProperties.percentage': false,
          'mainSeriesProperties.priceAxisProperties.percentageDisabled': false,
          'mainSeriesProperties.priceAxisProperties.log': false,
          'mainSeriesProperties.priceAxisProperties.logDisabled': false,
          'mainSeriesProperties.candleStyle.upColor': '#3fcfb4',
          'mainSeriesProperties.candleStyle.downColor': '#fe4761',
          'mainSeriesProperties.candleStyle.drawWick': true,
          'mainSeriesProperties.candleStyle.drawBorder': true,
          'mainSeriesProperties.candleStyle.borderColor': '#3fcfb4',
          'mainSeriesProperties.candleStyle.borderUpColor': '#3fcfb4',
          'mainSeriesProperties.candleStyle.borderDownColor': '#fe4761',
          'mainSeriesProperties.candleStyle.wickColor': '#737375',
          'mainSeriesProperties.candleStyle.wickUpColor': '#3fcfb4',
          'mainSeriesProperties.candleStyle.wickDownColor': '#fe4761',
          'mainSeriesProperties.candleStyle.barColorsOnPrevClose': false,
          'mainSeriesProperties.hollowCandleStyle.upColor': '#3fcfb4',
          'mainSeriesProperties.hollowCandleStyle.downColor': '#fe4761',
          'mainSeriesProperties.hollowCandleStyle.drawWick': true,
          'mainSeriesProperties.hollowCandleStyle.drawBorder': true,
          'mainSeriesProperties.hollowCandleStyle.borderColor': '#3fcfb4',
          'mainSeriesProperties.hollowCandleStyle.borderUpColor': '#3fcfb4',
          'mainSeriesProperties.hollowCandleStyle.borderDownColor': '#fe4761',
          'mainSeriesProperties.hollowCandleStyle.wickColor': '#737375',
          'mainSeriesProperties.hollowCandleStyle.wickUpColor': '#3fcfb4',
          'mainSeriesProperties.hollowCandleStyle.wickDownColor': '#fe4761',
          'mainSeriesProperties.haStyle.upColor': '#3fcfb4',
          'mainSeriesProperties.haStyle.downColor': '#fe4761',
          'mainSeriesProperties.haStyle.drawWick': true,
          'mainSeriesProperties.haStyle.drawBorder': true,
          'mainSeriesProperties.haStyle.borderColor': '#3fcfb4',
          'mainSeriesProperties.haStyle.borderUpColor': '#3fcfb4',
          'mainSeriesProperties.haStyle.borderDownColor': '#fe4761',
          'mainSeriesProperties.haStyle.wickColor': '#737375',
          'mainSeriesProperties.haStyle.wickUpColor': '#3fcfb4',
          'mainSeriesProperties.haStyle.wickDownColor': '#fe4761',
          'mainSeriesProperties.haStyle.barColorsOnPrevClose': false,
          'mainSeriesProperties.barStyle.upColor': '#3fcfb4',
          'mainSeriesProperties.barStyle.downColor': '#fe4761',
          'mainSeriesProperties.barStyle.barColorsOnPrevClose': false,
          'mainSeriesProperties.barStyle.dontDrawOpen': false,
          'mainSeriesProperties.lineStyle.color': '#0cbef3',
          'mainSeriesProperties.lineStyle.linestyle': 0,
          'mainSeriesProperties.lineStyle.linewidth': 1,
          'mainSeriesProperties.lineStyle.priceSource': 'close',
          'mainSeriesProperties.areaStyle.color1': '#0cbef3',
          'mainSeriesProperties.areaStyle.color2': '#0098c4',
          'mainSeriesProperties.areaStyle.linecolor': '#0cbef3',
          'mainSeriesProperties.areaStyle.linestyle': 0,
          'mainSeriesProperties.areaStyle.linewidth': 1,
          'mainSeriesProperties.areaStyle.priceSource': 'close',
          'mainSeriesProperties.areaStyle.transparency': 80
        },
        custom_css_url: 'chart.css'
      })
    })
  },
  methods: {
    jumpPage () {
      this.$router.push('/home')
      this.$router.go(0)
    },
    getChartData: function () {
      console.log('GET CHART DATA')
      _this = this
      this.$http.get('/api/getChartData', this.parseToSend({ pair: this.currentPair.code }))
        .then(response => {
          console.log('GET CHART DATA', response.body)
          response.body.forEach((order => {
            _this.$data.bars.push({
              close: Number(order.close),
              open: Number(order.open),
              high: Number(order.high),
              low: Number(order.low),
              volume: Number(order.volume),
              time: Number(order.time)
            })
          }))
          console.log(_this.$data.bars)
          this.log('@@@', response.body)
          // this.$data.bars = response.body;
          // this.$data.activeOffers = response.body;
          // Events.$emit('active-offers', response.body);
        }, err => {
          this.log('err', err)
        })
    },
    changePair: function () {
      let thisVue = this
      if (this.chart && this.feed) {
        this.feed._fireEvent('pair_change')
        this.chart.activeChart().resetData()
        this.chart.activeChart().setSymbol(this.currency1 + ':' + this.currency2, function () {
          console.log('GOWNO :: proba zmiany', thisVue.currency1, thisVue.currency2)
        })
      }
    },
    createFeed: function () {
      let thisVue = this
      let Datafeed = {}

      Datafeed.DataPulseUpdater = function (datafeed, updateFrequency) {
        this._datafeed = datafeed
        this._subscribers = {}

        this._requestsPending = 0
        var that = this

        var update = function () {
          if (that._requestsPending > 0) {
            return
          }

          for (var listenerGUID in that._subscribers) {
            var subscriptionRecord = that._subscribers[listenerGUID]
            var resolution = subscriptionRecord.resolution

            var datesRangeRight = parseInt((new Date().valueOf()) / 1000)

            // BEWARE: please note we really need 2 bars, not the only last one
            // see the explanation below. `10` is the `large enough` value to work around holidays
            var datesRangeLeft = datesRangeRight - that.periodLengthSeconds(resolution, 10)

            that._requestsPending++

            (function (_subscriptionRecord) { // eslint-disable-line
              that._datafeed.getBars(_subscriptionRecord.symbolInfo, resolution, datesRangeLeft, datesRangeRight, function (bars) {
                that._requestsPending--

                // means the subscription was cancelled while waiting for data
                if (!that._subscribers.hasOwnProperty(listenerGUID)) {
                  return
                }

                if (bars.length === 0) {
                  return
                }

                var lastBar = bars[bars.length - 1]
                if (!isNaN(_subscriptionRecord.lastBarTime) && lastBar.time < _subscriptionRecord.lastBarTime) {
                  return
                }

                var subscribers = _subscriptionRecord.listeners

                // BEWARE: this one isn't working when first update comes and this update makes a new bar. In this case
                // _subscriptionRecord.lastBarTime = NaN
                var isNewBar = !isNaN(_subscriptionRecord.lastBarTime) && lastBar.time > _subscriptionRecord.lastBarTime

                // Pulse updating may miss some trades data (ie, if pulse period = 10 secods and new bar is started 5 seconds later after the last update, the
                // old bar's last 5 seconds trades will be lost). Thus, at fist we should broadcast old bar updates when it's ready.
                if (isNewBar) {
                  if (bars.length < 2) {
                    throw new Error('Not enough bars in history for proper pulse update. Need at least 2.')
                  }

                  var previousBar = bars[bars.length - 2]
                  for (var i = 0; i < subscribers.length; ++i) {
                    subscribers[i](previousBar)
                  }
                }

                _subscriptionRecord.lastBarTime = lastBar.time

                for (var i = 0; i < subscribers.length; ++i) {
                  subscribers[i](lastBar)
                }
              },
              function () {
                that._requestsPending--
              })
            })(subscriptionRecord)
          }
        }

        if (typeof updateFrequency !== 'undefined' && updateFrequency > 0) {
          setInterval(update, updateFrequency)
        }
      }

      Datafeed.DataPulseUpdater.prototype.periodLengthSeconds = function (resolution, requiredPeriodsCount) {
        var daysCount = 0

        if (resolution === 'D') {
          daysCount = requiredPeriodsCount
        } else if (resolution === 'M') {
          daysCount = 31 * requiredPeriodsCount
        } else if (resolution === 'W') {
          daysCount = 7 * requiredPeriodsCoun
        } else {
          daysCount = requiredPeriodsCount * resolution / (24 * 60)
        }

        return daysCount * 24 * 60 * 60
      }

      Datafeed.DataPulseUpdater.prototype.subscribeDataListener = function (symbolInfo, resolution, newDataCallback, listenerGUID) {
        this._datafeed._logMessage('Subscribing ' + listenerGUID)

        if (!this._subscribers.hasOwnProperty(listenerGUID)) {
          this._subscribers[listenerGUID] = {
            symbolInfo: symbolInfo,
            resolution: resolution,
            lastBarTime: NaN,
            listeners: []
          }
        }

        this._subscribers[listenerGUID].listeners.push(newDataCallback)
      }

      Datafeed.DataPulseUpdater.prototype.unsubscribeDataListener = function (listenerGUID) {
        this._datafeed._logMessage('Unsubscribing ' + listenerGUID)
        delete this._subscribers[listenerGUID]
      }

      Datafeed.Container = function (updateFrequency) {
        this._configuration = {
          supports_search: false,
          supports_group_request: false,
          supported_resolutions: ['1', '3', '5', '15', '30', '60', '120', '240', '360', '720', '1D', '3D', '1W', '1M'],
          supports_marks: true,
          supports_timescale_marks: true,
          exchanges: ['myExchange']
        }

        this._barsPulseUpdater = new Datafeed.DataPulseUpdater(this, updateFrequency || 10 * 1000)
        // this._quotesPulseUpdater = new Datafeed.QuotesPulseUpdater(this);

        this._enableLogging = true
        this._callbacks = {}
        this._initializationFinished = true
        this._fireEvent('initialized')
        this._fireEvent('configuration_ready')
      }

      Datafeed.Container.prototype._fireEvent = function (event, argument) {
        if (this._callbacks.hasOwnProperty(event)) {
          var callbacksChain = this._callbacks[event]
          for (var i = 0; i < callbacksChain.length; ++i) {
            callbacksChain[i](argument)
          }

          this._callbacks[event] = []
        }
      }

      Datafeed.Container.prototype._logMessage = function (message) {
        if (this._enableLogging) {
          var now = new Date()
          console.log('CHART LOGS: ' + now.toLocaleTimeString() + '.' + now.getMilliseconds() + '> ' + message)
        }
      }
      Datafeed.Container.prototype.on = function (event, callback) {
        if (!this._callbacks.hasOwnProperty(event)) {
          this._callbacks[event] = []
        }

        this._callbacks[event].push(callback)
        return this
      }
      Datafeed.Container.prototype.onReady = function (callback) {
        let that = this
        if (this._configuration) {
          setTimeout(function () {
            callback(that._configuration)
          }, 0)
        } else {
          this.on('configuration_ready', function () {
            callback(that._configuration)
          })
        }
      }

      Datafeed.Container.prototype.resolveSymbol = function (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) {
        this._logMessage('GOWNO :: resolve symbol ' + symbolName)
        Promise.resolve().then(() => {
          function adjustScale () {
            if (thisVue.last_price > 1000) {
              return 100
            } else {
              return 100000000
            }
          }
          this._logMessage('GOWNO :: onResultReady inject' + thisVue.currency1 + ':' + thisVue.currency2)
          onSymbolResolvedCallback({
            'name': thisVue.currency1 + ':' + thisVue.currency2,
            'timezone': 'Europe/Warsaw',
            'pricescale': adjustScale(),
            'minmov': 1,
            'minmov2': 0,
            'ticker': thisVue.currency1 + ':' + thisVue.currency2,
            'description': '',
            'session': '24x7',
            'type': 'bitcoin',
            'exchange-traded': 'myExchange',
            'exchange-listed': 'myExchange',
            'has_intraday': true,
            'intraday_multipliers': ['60'], // It is an array containing intraday resolutions (in minutes) the datafeed wants to build by itself. E.g., if the datafeed reported he supports resolutions ['1', '5', '15'], but in fact it has only 1 minute bars for symbol X, it should set intraday_multipliers of X = [1]. This will make Charting Library to build 5 and 15 resolutions by itself.
            'has_weekly_and_monthly': false,
            'has_no_volume': false,
            'regular_session': '24x7'
          })
        })
      }

      Datafeed.Container.prototype.getBars = function (symbolInfo, resolution, rangeStartDate, rangeEndDate, onDataCallback, onErrorCallback) {
        if (rangeStartDate > 0 && (rangeStartDate + '').length > 10) {
          throw new Error(['Got a JS time instead of Unix one.', rangeStartDate, rangeEndDate])
        }
        onDataCallback([], { noData: true })
        // onDataCallback(bars, { noData: true , nextTime: data.nb || data.nextTime });
      }
      Datafeed.Container.prototype.subscribeBars = function (symbolInfo, resolution, onRealtimeCallback, listenerGUID, onResetCacheNeededCallback) {
        thisVue.bars.forEach(function (bar) { // in subscribeBars
          onRealtimeCallback(bar)
        })
        this.on('pair_change', function () {
          onResetCacheNeededCallback()
        })
        // this._barsPulseUpdater.subscribeDataListener(symbolInfo, resolution, onRealtimeCallback, listenerGUID, onResetCacheNeededCallback);
      }
      Datafeed.Container.prototype.unsubscribeBars = function (listenerGUID) {
        this._barsPulseUpdater.unsubscribeDataListener(listenerGUID)
      }
      return new Datafeed.Container()
    },
    adjustChart: function () {
      let chartIframe = $('#chart_container').find('iframe')
      // let chartTop = chartIframe.contents().find('.header-chart-panel')
      let chartTopContainer = chartIframe.contents().find('.header-chart-panel-content')
      let chartBbottom = chartIframe.contents().find('.date-range-wrapper')
      chartBbottom.appendTo(chartTopContainer)
    }
  },
  watch: {
    pair: function (newVal, oldVal) {
      this.currency1 = newVal[0]
      this.currency2 = newVal[1]
      this.changePair()
    }
  },
  // methods: {
  //   jumpPage () {
  //     this.$router.push('/home')
  //     this.$router.go(0)
  //   }
  // }
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
