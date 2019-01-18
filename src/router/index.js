import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
// 用于测试页面
import cs from '@/components/Cs/cs'
// 主页
import Home from '@/pages/home/Home'
// 登录页面
import Login from '@/pages/login/Login'
// 重置登录密码表单
import RestPassword from '@/pages/login/rest-password/RestPassword'
// 重置登录密码文本
import RestPasswordText from '@/pages/login/rest-password-text/RestPasswordText'
// 注册页面
import Register from '@/pages/register/Register'
// 邮箱验证页面
import MailboxValidation from '@/pages/Register/mailbox-validation/MailboxValidation'
// 我的页面
import Mine from '@/pages/mine/Mine'
// 我的页面--修改密码页面
import Modify from '@/pages/mine/modify/Modify'
// 我的页面--设置支付密码页面
import SetPassword from '@/pages/mine/set-password/SetPassword'
// 我的页面--修改支付密码页面
import ModifyPassword from '@/pages/mine/modify-password/ModifyPassword'
// 我的页面--开启手机验证
import OpenMobileVerification from '@/pages/mine/open-mobile-verification/OpenMobileVerification'
// 我的页面--关闭手机验证
import CloseMobileVerification from '@/pages/mine/close-mobile-verification/CloseMobileVerification'
// 我的页面--开启谷歌验证
import OpenGoogleVerification from '@/pages/mine/open-google-verification/OpenGoogleVerification'
// 我的页面--关闭谷歌验证
import CloseGoogleVerification from '@/pages/mine/close-google-verification/CloseGoogleVerification'
// 我的页面--关闭所有
import CloseAll from '@/pages/mine/close-all/CloseAll'
// 资产页面
import Assets from '@/pages/assets/Assets'
// 资产页面--提币明细
import MentionDetails from '@/pages/assets/mention-details/MentionDetails'
// 资产页面--提币地址
import MoneyWithdrawalAddress from '@/pages/assets/money-withdrawal-address/MoneyWithdrawalAddress'
// 资产页面--提币
import WithdrawMoney from '@/pages/assets/withdraw-money/WithdrawMoney'
// 资产页面--充币
import CoinCharging from '@/pages/assets/Coin-charging/CoinCharging'
// 币币交易页面
import CurrencyTrading from '@/pages/currency-trading/CurrencyTrading'
// 委托单管理页面
import OrderForm from '@/pages/order-form/OrderForm'
Vue.use(Router)
Vue.use(Vuex)
export default new Router({
  routes: [
    {
      path: '/cs',
      name: 'cs',
      component: cs
    },
    // 主页面
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    // 登录页面
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // 注册页面
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    // 重置登录密码表单
    {
      path: '/rest-password',
      name: 'rest-password',
      component: RestPassword
    },
    // 重置登录密码说明
    {
      path: '/rest-password-text',
      name: 'rest-password-text',
      component: RestPasswordText
    },
    // 邮箱验证页面
    {
      path: '/mailbox-validation',
      name: 'mailbox-validation',
      component: MailboxValidation
    },
    // 我的页面
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    // 我的页面--修改密码页面
    {
      path: '/modify',
      name: 'modify',
      component: Modify
    },
    // 我的页面--设置支付密码页面
    {
      path: '/set-password',
      name: 'set-password',
      component: SetPassword
    },
    // 我的页面--修改支付密码页面
    {
      path: '/modify-password',
      name: 'modify-password',
      component: ModifyPassword
    },
    // 我的页面--开启手机验证页面
    {
      path: '/open-mobile-verification',
      name: 'open-mobile-verification',
      component: OpenMobileVerification
    },
    // 我的页面--关闭手机验证
    {
      path: '/close-mobile-verification',
      name: 'close-mobile-verification',
      component: CloseMobileVerification
    },
    // 我的页面--开启谷歌验证页面
    {
      path: '/open-google-verification',
      name: 'open-google-verification',
      component: OpenGoogleVerification
    },
    // 我的页面--关闭谷歌验证页面
    {
      path: '/close-google-verification',
      name: 'close-google-verification',
      component: CloseGoogleVerification
    },
    // 我的页面--关闭所有
    {
      path: '/closeall',
      name: 'closeall',
      component: CloseAll
    },
    // 资产页面
    {
      path: '/assets',
      name: 'assets',
      component: Assets
    },
    // 资产页面--提币明细
    {
      path: '/mention-details',
      name: 'mention-details',
      component: MentionDetails
    },
    // 资产页面--提币地址
    {
      path: '/money-withdrawal-address',
      name: 'money-withdrawal-address',
      component: MoneyWithdrawalAddress
    },
    // 资产页面--提币
    {
      path: '/withdraw-money',
      name: 'withdraw-money',
      component: WithdrawMoney
    },
    // 资产页面--充币
    {
      path: '/coin-charging',
      name: 'coin-charging',
      component: CoinCharging
    },
    // 币币交易
    {
      path: '/currency-trading',
      name: 'currency-trading',
      component: CurrencyTrading
    },
    // 委托单页面
    {
      path: '/order-form',
      name: 'order-form',
      component: OrderForm
    }
  ]
})
