<template>
  <div class="container">
    <h1>vue & vuex Todo List example</h1>
    <hr>
    <div class="row">
      <div class="input-group col-md-12">
        <input
          type="text"
          class="form-control"
          placeholder="add Todo.."
          v-model="newTodo"
          @keyup.enter="actionAddTodo" />
        <span class="input-group-btn">
          <button class="btn btn-success" type="button" @click="actionAddTodo">
            <i class="far fa-calendar-check"></i>
          </button>
        </span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h2>Todo List</h2>
        <ul>
          <todoItem v-for="(item, index) in todoList" :item="item" :key="index"/>
        </ul>
      </div>
      <div class="col-md-6">
        <h2>Done List</h2>
        <ul >
          <li v-for="(item, index) in doneList" :key="index">
            <!-- <label>
              <input
                type="checkbox"
                :checked="item.done"
                @change="toggleTodo( item.key )">
                {{ item.content }}
            </label> -->
            <custom-checkbox :item="item" @toggleTodo="toggleTodo" />
          </li>
        </ul>
      </div>
    </div><!-- end row -->
    <pre>{{ todoList }}</pre>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import todoItem from './todo-item.vue'
import customCheckbox from './custom-checkbox.vue'

export default {
  components: {
    todoItem,
    customCheckbox
  },
  data () {
    return {
      newTodo: ''
    }
  },
  computed:
    mapGetters({
      todoList: 'getTodo',
      doneList: 'getDoneTodo'
    }),
  methods: {
    ...mapActions([
      'toggleTodo',
      'deleteTodo'
    ]),
    actionAddTodo () {
      this.$store.dispatch('addTodo', this.newTodo)
      this.newTodo = ''
    }
  }
}
</script>
