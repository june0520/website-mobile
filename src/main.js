// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/js/fontsize.js'
import 'mint-ui/lib/style.css'
import { Toast } from 'mint-ui';
import axios from './assets/Util/util.js'
import VueI18n from 'vue-i18n'


// 这里需要注册使用语言包
Vue.use(VueI18n)
Vue.locale = () => {}

// 自己写的语言包，并封装成对象
const messages = {
  'zh_CN': require('@/assets/language/zh_CN'),   // 中文语言包
  'en_US': require('@/assets/language/en_US'),   // 英文语言包
  'zh_CT': require('@/assets/language/zh_CT')    // 繁体语言包
}
// 设置参数，创建 Vuei18n 的实例。需要将他挂载全局的所有组件上
const i18n = new VueI18n({
  // set locale 本地存储记录当前选中的语言是哪一种/默认的是哪种语言
  locale: localStorage.getItem("language") || "zh_CN", 
  messages // set locale messages,在构造器中配置这个语言包
})

Vue.prototype.$toast = Toast;
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
