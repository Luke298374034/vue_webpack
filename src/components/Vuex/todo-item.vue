<template>
  <li>
    <div v-if="!updateMode">
      <!-- <label>
        <input
          type="checkbox"
          :checked="item.done"
          @change="toggleTodo( item.key )">
          {{ item.content }}
      </label> -->
      <custom-checkbox :item="item" @toggleTodo="toggleTodo" />
      <button class="btn btn-xs btn-primary" @click="showEditMode">
        <i class="far fa-edit"></i>
      </button>
      <button class="btn btn-xs btn-danger" @click="deleteTodo( item.key )">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
    <div v-if="updateMode" >
      <input
        class="edit-input"
        v-focus="updateMode"
        placeholder="edit Todo.."
        :value="item.content"
        @keyup.enter="actionEdit"
        @blur="cancelEdit"
        @keyup.esc="cancelEdit"/>
    </div>
  </li>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'
import { mapActions } from 'vuex'
import customCheckbox from './custom-checkbox.vue'

export default {
  props: {
    item: Object
  },
  components: {
    customCheckbox
  },
  data () {
    return {
      updateMode: false // 修改模式預設值
    }
  },
  /*
    此 directives 是參考作者的 code
    主要功能是切換模式之後 focus input 功能
    value 為 updateMode
    $nextTick 功能是：上個動作完成後，才執行裡面包含的程式。
    之後會寫一篇關於自訂：Vue Directive
  */
  directives: {
    focus (el, { value }, { context }) {
      if (value) {
        context.$nextTick(() => {
          el.focus()
        })
      }
    }
  },
  methods: {
    ...mapActions([
      'toggleTodo',
      'deleteTodo',
      'updateTodo'
    ]),
    showEditMode () {
      this.updateMode = true
    },
    actionEdit (e) {
      const userChange = e.target.value.trim()
      this.$log.info('userChange', this.item.key, userChange)
      this.updateTodo({
        key: this.item.key,
        change: userChange
      })
      this.updateMode = false
    },
    cancelEdit (e) {
      e.target.value = this.item.title
      this.updateMode = false
    }
  }
}
</script>

<style>
  .edit-input{
    line-height: 1em;
  }
</style>
