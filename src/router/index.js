import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Main from '@/components/Main'
import Firebase from '@/components/Firebase'
import ooxx from '@/components/Playground/ooxx'
import calculator from '@/components/Playground/calculator'
import toDoList from '@/components/Playground/toDoList'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/HelloWorld2'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Firebase',
      name: 'Firebase',
      component: Firebase
    },
    {
      path: '/Playground/ooxx',
      name: 'Playground/ooxx',
      component: ooxx
    },
    {
      path: '/Playground/calculator',
      name: 'Playground/calculator',
      component: calculator
    },
    {
      path: '/Playground/toDoList',
      name: 'Playground/toDoList',
      component: toDoList
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
