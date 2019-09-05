import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/components/Main'
import Firebase from '@/components/Firebase'

import proj1114 from '@/components/Proj1114/proj1114'
import count from '@/components/Proj1114/count'
import todoVuex from '@/components/Proj1114/todoVuex'
import shop from '@/components/Proj1114/shop'
import cart from '@/components/Proj1114/cart'
import open1999 from '@/components/Proj1114/open1999'

import ooxx from '@/components/Playground/ooxx'
import playground from '@/components/Playground/playground'
import calculator from '@/components/Playground/calculator'
import toDoList from '@/components/Playground/toDoList'

import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/HelloWorld2'

Vue.use(VueRouter)

// nested router
// component內必須再有一個Router-view來選擇畫面
const common = {
  template: `<router-view />`
}

export default new VueRouter({
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
      path: '/Proj1114',
      name: 'Proj1114654654',
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
        }
      ]
    },
    {
      path: '/Playground',
      name: 'Yee',
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
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HelloWorld2',
      name: 'HelloWorld2',
      component: HelloWorld2
    }
  ]
})
