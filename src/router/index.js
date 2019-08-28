import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Main from '@/components/Main'
import Firebase from '@/components/Firebase'
import count from '@/components/Proj1114/count'
import todoVuex from '@/components/Proj1114/todoVuex'
import ooxx from '@/components/Playground/ooxx'
import calculator from '@/components/Playground/calculator'
import toDoList from '@/components/Playground/toDoList'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/HelloWorld2'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

// nested router
// component內必須再有一個Router-view來選擇畫面
const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      index: true,
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
      name: 'Proj1114',
      component: User,
      children: [
        {
          path: 'count',
          name: '計數器Vuex',
          component: count
        },
        {
          path: 'todoVuex',
          name: 'todoVuex',
          component: todoVuex
        }
      ]
    },
    {
      path: '/Playground',
      name: '小玩Yee',
      component: User,
      children: [
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
