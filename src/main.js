// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
// import enLocale from 'element-ui/lib/locale/lang/en'
// import zhLocale from 'element-ui/lib/locale/lang/zh-CN's
// import locale from 'element-ui/lib/locale/lang/en'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css'
require('./mock.js')
Vue.use(ElementUI)
Vue.use(VueI18n)
// Vue.use(Element)
// Vue.config.lang = 'zh-cn'
// Vue.locale('zh-cn', zhLocale)
// Vue.locale('en', enLocale)
// Vue.use(ElementUI, { locale })
Vue.use(VueAxios, axios)
Vue.prototype.$ajax = axios
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})
