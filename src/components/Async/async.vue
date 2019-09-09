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

    input#input
    button(@click="mock") MOCK
    button(@click="get") GET
    button(@click="mockAndGet") MOCK & GET
</template>

<script>
import { async } from '@/js/async'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Pug / Stylus / Axios'
    }
  },
  methods: {
    mock: function () {
      this.$log.info(`丟假資料囉`)
      async.mock()
    },
    get: function () {
      this.$log.info(`來抓看看`)
      var a = async.get()
      this.$log.info(a)
      a.then((response) => {
        console.log(response)
      })
        .catch((err) => {
          console.log(err)
        })
    },
    mockAndGet: function () {
      this.$log.info(`一步驟的丟和抓`)
      async.mock()
      async.get()
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
