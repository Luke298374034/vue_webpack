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

    <b-btn v-b-modal.modal1>Launch demo modal</b-btn>
    <b-modal id="modal1" title="Bootstrap-Vue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>

    input#input
    button#enter(@click="click") 打給MOCK
</template>

<script>
import { _test } from '@/js/test'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Pug / Scss / BootStrap / jQuery'
    }
  },
  methods: {
    click: function () {
      // console`.log(`in click`)
      var T = _test().M()
      console.log(T)

      var M = _test.M
      console.log(M)

      var A = _test.A
      console.log(A)

      // var axios = require('axios')
      // var MockAdapter = require('axios-mock-adapter')
      // var mock = new MockAdapter(axios)

      // console.log(`begin M`)
      // mock.onGet('/users').reply(200, {
      //   users: [
      //     { id: 1, name: 'John Smith' }
      //   ]
      // })

      // console.log(`begin A`)
      // axios.get('/users')
      //   .then(function (response) {
      //     console.log(response.data)
      //   })
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
