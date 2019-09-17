<template lang="pug">
  div
    h1 {{ msg }}
    button.btn.btn-success(data-toggle="modal", data-target="#exampleModal") Demo
    #exampleModal.modal.fade
      .modal-dialog(role="document")
        .modal-content
          .modal-header
            h5.modal-title Modal Title
            button.close(data-dismiss="modal")
              span &times;
          .modal-body
            p hello!hello!
          .modal-footer
            button.btn.btn-success save
            button.btn.bth-secondary(data-dismiss="modal") cancel
    br

    <b-btn v-b-modal.modal1>Launch demo modal</b-btn>
    <b-modal id="modal1" title="Bootstrap-Vue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
    br

    input#path-input(v-model="path")
    button(@click="mockGet(path)") MOCKGET
    button(@click="get(path)") GET
    button(@click="mistakeGet(path)") MistakeGet
    button(@click="mockAndGet(path)") MOCK & GET
    button(@click="mockAndGetAsync(path)") MOCK & GET by async/await
    br

    input#data-input(v-model="data")
    button(@click="mockpost(path)") MOCKPOST
    button(@click="post(path)") POST
    br

    button(@click="mockjs") Mock All
    button(@click="login") Login
</template>

<script>
import { axios as $axios } from '@/js/async'
import { mockjs as $mockjs } from '@/js/mock'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Pug / Stylus / Axios',
      path: '/users',
      data: [
        { id: 1, name: 'John Smith' },
        { id: 2, name: 'John Cena' },
        { id: 3, name: 'Bob Smith' }
      ]
    }
  },
  methods: {
    mockGet: function (path) {
      this.$log.info(`丟假資料囉到`, `/users`)
      // $axios.mockget(`/users`)
      var mock = new MockAdapter(axios)
      mock.onGet(path).reply(200, {
        users: [
          { id: 1, name: 'John AA' },
          { id: 2, name: 'John Cena' },
          { id: 3, name: 'Bob Smith' }
        ]
      })
    },
    get: function () {
      this.$log.info(`來抓看看`, `/users`)
      $axios.get(`/users`)
        .then((res) => {
          console.log(res)
          return res
        })
        // // 這邊是從 return Promise.reject(err) 來的
        // .catch((err) => {
        //   console.log(`直接執行get出錯`, err)
        // })
        .finally((res) => {
          console.log(res)
        })
    },
    mistakeGet: function (path) {
      this.$log.info(`故意抓不到`)
      $axios.mistakeGet(path)
      // // 封裝故意失敗之後 就不會有response傳回來惹
      // .then((res) => {
      //   console.log(`mistake`, res)
      // })
      // catch 同樣也是抓不到der
      // .catch((err) => {
      //   console.log(err)
      // })
    },
    mockAndGet: function (path) {
      this.$log.info(`一步驟的丟和抓 就利用promise來排順序`)
      this.$log.info(`但其實也不用排了 Google JS事件佇列`)
      this.mockGet(path)
      new Promise(function (resolve, reject) {
        console.log(this) // undefined
        // mock.onGet(path).reply(200, {
        //   users: [
        //     { id: 1, name: 'John AA' },
        //     { id: 2, name: 'John Cena' },
        //     { id: 3, name: 'Bob Smith' }
        //   ]
        // })
        resolve(`我回被傳給then使用~`)
      }).then((res) => {
        console.log(res)
        $axios.get(path)
      })
    },
    mockAndGetAsync: async function (path) {
      const a = await function () { return `qwe` }
      let b = await 5 * 7
      b = 10
      const c = await b + 20
      console.log(a)
      console.log(c)
    },
    mockpost: function (path) {
      this.$log.info(`建立Post資料`)
      // $axios.mockpost(`/users`)
      var mock = new MockAdapter(axios)
      mock.onPost(path).reply(200, {
        users: [
          { id: 1, name: 'Pop Smith' },
          { id: 2, name: 'Pop Cena' },
          { id: 3, name: 'Pop Smith' }
        ]
      })
    },
    post: function (path) {
      this.$log.info(`試試POST`)
      $axios.post(path)
    },
    mockjs: function (path) {
      this.$log.info(`搞了半天的Mockjs 來測試看看唄`, `一次Mock全部`)
      // $axios.mockget(path)
      var mock = new MockAdapter(axios)
      mock.onGet(path).reply(200, {
        users: [
          { id: 1, name: 'John AA' },
          { id: 2, name: 'John Cena' },
          { id: 3, name: 'Bob Smith' }
        ]
      })
      $mockjs.login()
      $mockjs.getUserList()
      $mockjs.deleteUser()
      $mockjs.deleteMoreUsers()
      $mockjs.editUser()
      $mockjs.newUser()
    },
    login: function () {
      this.$log.info(`試著接別人的API`)
      $axios.post('/loginUser', {
        userName: 'admin',
        password: '123456'
      })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
  #input
    color #666666
  #enter
    // height 5vh
    // width 10vw
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$vue-color: #42b983;
h1 {
  color: $vue-color;
}
</style>
