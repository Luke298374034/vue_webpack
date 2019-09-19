// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLogger from 'vuejs-logger'
import VueI18n from 'vue-i18n'
import en from './i18n/en.json' // 存放英文翻譯
import tw from './i18n/tw.json' // 存放繁體中文翻譯

import BootstrapVue from 'bootstrap-vue'

const isProduction = process.env.NODE_ENV === 'production'
const options = {
  isEnabled: true,
  logLevel: isProduction ? 'error' : 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '|',
  showConsoleColors: true
}

Vue.config.productionTip = false

Vue.use(VueLogger, options)
Vue.use(VueI18n)

Vue.use(BootstrapVue)

/* test */
Vue.directive('test', {
  bind: function (el, binding, vnode) {
    var s = JSON.stringify
    el.innerHTML =
      'name: ' + s(binding.name) + '<br>' +
      'value type: ' + typeof binding.value + '<br>' +
      'value: ' + binding.value + '<br>' +
      'expression: ' + s(binding.expression) + '<br>' +
      'argument: ' + s(binding.arg) + '<br>' +
      'modifiers: ' + s(binding.modifiers) + '<br>' +
      'vnode keys: ' + Object.keys(vnode).join(', ')
  }
})

/* custom toggle password */
function togglePassword (val) {
  return val ? 'text' : 'password'
}
Vue.directive('toggle-password', {
  bind (el, binding) {
    el.type = togglePassword(binding.value)
  },
  update (el, binding) {
    el.type = togglePassword(binding.value)
  }
})

/* i18n */
const locales = {
  en: en,
  tw: tw
}
// set lang from state
// lang 對應的是 locales 的 key 目前有：en, tw
Vue.config.lang = store.state.lang // 從 state 獲取預設語言設定。

// set locales
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // components: { App },
  // template: '<App/>',

  render: h => h(App)
})
