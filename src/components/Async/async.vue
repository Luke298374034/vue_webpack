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
    button(@click="mockget(path)") MOCKGET
    button(@click="get(path)") GET
    button(@click="mistakeGet") MistakeGet
    button(@click="mockAndGet") MOCK & GET
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
    mockget: function (path) {
      this.$log.info(`丟假資料囉到`, path)
      $axios.mockget(path)
    },
    get: function (path) {
      this.$log.info(`來抓看看`, path)
      $axios.get(path)
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
    mistakeGet: function () {
      this.$log.info(`故意抓不到`)
      $axios.mistakeGet()
      // // 封裝故意失敗之後 就不會有response傳回來惹
      // .then((res) => {
      //   console.log(`mistake`, res)
      // })
      // catch 同樣也是抓不到der
      // .catch((err) => {
      //   console.log(err)
      // })
    },
    mockAndGet: function () {
      this.$log.info(`一步驟的丟和抓 就利用promise來排順序`)
      new Promise(function (resolve, reject) {
        $axios.mock()
        resolve(`我回被傳給then使用~`)
      }).then((res) => {
        console.log(res)
        $axios.get()
      })
    },
    mockpost: function (path) {
      this.$log.info(`建立Post資料`)
      $axios.mockpost()
    },
    post: function (path) {
      this.$log.info(`試試POST`)
      $axios.post(path)
    },
    mockjs: function (path) {
      this.$log.info(`搞了半天的Mockjs 來測試看看唄`, `一次Mock全部`)
      $axios.mockget(path)
      $mockjs.login(path)
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
