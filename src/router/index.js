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
      path: '/restpassword',
      name: 'restpassword',
      component: RestPassword
    },
    // 重置登录密码说明
    {
      path: '/restpasswordtext',
      name: 'restpasswordtext',
      component: RestPasswordText
    },
    // 邮箱验证页面
    {
      path: '/mailboxvalidation',
      name: 'mailboxvalidation',
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
      path: '/setpassword',
      name: 'setpassword',
      component: SetPassword
    },
    // 我的页面--修改支付密码页面
    {
      path: '/modifypassword',
      name: 'modifypassword',
      component: ModifyPassword
    },
    // 我的页面--开启手机验证页面
    {
      path: '/openmobileverification',
      name: 'openmobileverification',
      component: OpenMobileVerification
    },
    // 我的页面--关闭手机验证
    {
      path: '/closemobileverification',
      name: 'closemobileverification',
      component: CloseMobileVerification
    },
    // 我的页面--开启谷歌验证页面
    {
      path: '/opengoogleverification',
      name: 'opengoogleverification',
      component: OpenGoogleVerification
    },
    // 我的页面--关闭谷歌验证页面
    {
      path: '/closegoogleverification',
      name: 'closegoogleverification',
      component: CloseGoogleVerification
    },
    // 我的页面--关闭所有
    {
      path: '/closeall',
      name: 'closeall',
      component: CloseAll
    }
  ]
})
