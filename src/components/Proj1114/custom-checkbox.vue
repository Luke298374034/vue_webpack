<template>
  <span class="squaredFour">
    <input
      type="checkbox"
      :id="getID"
      :checked="item.done"
      @change="handleChange" />
    <!-- <label :for="getID" class="checkbox-icon"></label> -->
    <label :for="getID">{{ item.content }}</label>
  </span>
</template>

<script>
export default {
  props: {
    item: Object
  },
  computed: {
    getID () {
      // 為了解決 input 與 label 對應的 id
      // 暫時解法.. 不知道有沒有更簡單的方法哩..
      // 使用 ES6 String Template
      // ES5: "custom_" + Math.floor(Math.random() * 9999).toString();
      return `custom_${Math.floor(Math.random() * 9999)}`
    }
  },
  methods: {
    handleChange ($event) {
      // $emit 向上傳遞的 value 直接打包成 object
      this.$emit('toggleTodo', {
        key: this.item.key,
        // checked(done) 直接使用 chackbox 狀態
        checked: $event.target.checked
      })
    }
  }
}
</script>
