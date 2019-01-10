import Vue from 'vue'
import Router from 'vue-router'
// 公共头部
import header from '@/components/header/Header'

// import AfterHeader from '@/components/after-header/AfterHeader'
// 公共底部
import footer from '@/components/footer/Footer'
// 用于测试页面
import cs from '@/components/Cs/cs'
// 主页
import home from '@/pages/home/Home'
// 登录页面
import Login from '@/pages/login/Login'
// 重置登录密码表单
import RestPassword from '@/pages/login/rest-password/RestPassword'
// 重置登录密码文本
import RestPasswordText from '@/pages/login/rest-password-text/RestPasswordText'
// 注册页面
import register from '@/pages/register/Register'
// 邮箱验证页面
import MailboxValidation from '@/pages/Register/mailbox-validation/MailboxValidation'
Vue.use(Router)
export default new Router({
  routes: [
    // 公共头部
    {
      path: '/header',
      name: 'header',
      component: header
    },
    // {
    //   path: '/header',
    //   name: 'header',
    //   component: AfterHeader
    // },
    // 公共底部
    {
      path: '/footer',
      name: 'footer',
      component: footer
    },
    {
      path: '/cs',
      name: 'cs',
      component: cs
    },
    // 主页面
    {
      path: '/home',
      name: 'home',
      component: home
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
      component: register
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
    }
  ]
})
