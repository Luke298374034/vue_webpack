import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'

import Main from '@/components/Main'
import Firebase from '@/components/Firebase'

import proj1114 from '@/components/Vuex/proj1114'
import count from '@/components/Vuex/count'
import todoVuex from '@/components/Vuex/todoVuex'
import shop from '@/components/Vuex/shop'
import cart from '@/components/Vuex/cart'
import open1999 from '@/components/Vuex/open1999'
import login from '@/components/Vuex/login'

import ooxx from '@/components/Playground/ooxx'
import playground from '@/components/Playground/playground'
import calculator from '@/components/Playground/calculator'
import toDoList from '@/components/Playground/toDoList'

import async from '@/components/Async/async'

import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/HelloWorld2'
import hello from '@/components/hello'

Vue.use(VueRouter)

// nested router
// component內必須再有一個Router-view來選擇畫面
// 其實就是Router-view再包一個Router-view
const common = {
  template: `<div style="border:gray solid 1px"> 這裡是Common唷 也是一個可以用來做子母畫面的地方
                  但我我覺得如是NavBar就直接寫在Index了吧
              <router-view style="border:blue solid 1px"/>
            </div>`
}

const router = new VueRouter({
  // 這行是為了網址不要有HashTag
  mode: 'history',
  routes: [
    {
      _index: true,
      path: '/',
      name: '嘦巭深兲嫑跑',
      component: Main
    },
    {
      path: '/Firebase',
      name: 'Firebase',
      component: Firebase
    },
    {
      path: '/Vuex',
      component: common,
      children: [
        {
          path: '',
          name: 'Proj1114',
          component: proj1114
        },
        {
          path: 'count',
          name: '計數器Vuex',
          component: count
        },
        {
          path: 'todoVuex',
          name: 'todoVuex',
          component: todoVuex
        },
        {
          path: 'shop',
          name: '商城',
          component: shop
        },
        {
          path: 'cart',
          name: '購物車',
          component: cart
        },
        {
          path: 'open1999',
          name: 'open1999',
          component: open1999
        },
        {
          path: 'login',
          name: '登入',
          component: login
        }
      ]
    },
    {
      path: '/Playground',
      // name: 'Yee',
      component: common,
      children: [
        {
          path: '',
          name: '小玩Yee',
          component: playground
        },
        {
          path: 'ooxx',
          name: 'ooxx',
          component: ooxx
        },
        {
          path: 'calculator',
          name: 'Windows計算機',
          component: calculator
        },
        {
          path: 'toDoList',
          name: '待辦事項',
          component: toDoList
        }
      ]
    },
    {
      path: '/Async/async',
      name: 'Async',
      component: async
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HelloWorld2',
      name: 'HelloWorld2',
      component: HelloWorld2
    },
    {
      path: '/hello',
      name: '哈囉',
      component: hello,
      meta: { requiresAuth: true } // 需驗證
    },
    {
      path: '/multi',
      name: '多重畫面',
      components: {ViewLeft: login, ViewRight: hello}
    }
  ]
})

// 頁面轉跳驗證
router.beforeEach((to, from, next) => {
  // 如果 router 轉跳的頁面需要驗證 requiresAuth: true
  console.log('to=', to.fullPath, '| from=', from.fullPath)
  if (to.matched.some(record => {
    console.log(record.name, record.meta.requiresAuth)
    return record.meta.requiresAuth
  })) {
    // 如果沒有 token
    console.log('token?', store.state.token)
    if (store.state.token === '' || store.state.token === undefined) {
      // 轉跳到 login page
      next({ path: '/Vuex/login' })
    } else {
      next() // 往下繼續執行
    }
  } else {
    next() // 往下繼續執行
  }
})

export default router
