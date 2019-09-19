<template>
  <div id="login">
    <!-- <img src="static/img/ironman2017.jpg" class="responsive-img"> -->
    <div class="container">
      <div class="form-signin">
        <h2 class="form-signin-heading">Please sign in</h2>
        <label for="email" class="sr-only">Email address</label>
        <input
          v-model="email"
          type="email"
          id="email"
          class="form-control"
          placeholder="Email address" required autofocus />
        <label for="inputPassword" class="sr-only">Password</label>
        <!-- 2. 在 password input 上面使用 v-toggle-password 帶入 checkbox 的 value -->
        <input
          v-model="password"
          v-toggle-password="togglePassword"
          @keyup.enter="login"
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password" required />
        <button
          class="btn btn-lg btn-primary btn-block"
          type="submit"
          @click="login">
          Sign in
        </button>
        <!-- EMPHASIS 如何製作顯示密碼-->
        <!-- 1. check box 雙向綁定[布林] -->
        <div class="squaredFour" style="margin: 20px 10px;">
          <input
            type="checkbox"
            v-model="togglePassword"
            id="togglePassword" />
          <label for="togglePassword" class="checkbox-icon"></label>
          <label for="togglePassword">顯示密碼</label>
        </div>

        <!-- 在 tag 內容，外面一樣使用 {{ }} -->
        <h2>{{ $t("Please_sign_in") }}</h2>
        <!-- 在 attribute 上使用 -->
        <!-- :placeholder="$t('Email_address')" -->
        <!-- 記得使用 v-bind: 不然不會更新 -->
        <input
          type="checkbox"
          v-model="lang"
          :true-value="'tw'"
          :false-value="'en'"
          @change="setLanguage(lang)"
          id="slideThree" />
        <label for="slideThree"></label>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      email: 'vue_vuex2@ironman2017.tw',
      password: '',
      togglePassword: false,
      lang: this.$store.state.lang // get lang 預設值 `en`
    }
  },
  methods: {
    login () {
    // 因為 action 包裝了 Promise 所以可以使用 then 和 catch 來接收非同步回傳狀態
      this.$store.dispatch('actionLogin', {
        email: this.email,
        password: this.password
      })
        .then(() => { // 接收 resolve
          console.log('3. get Promise resolve')
          setTimeout(() => {
            // 使用 $router.push 轉跳到 hello Page
            this.$router.push('/hello')
          }, 500)
        })
        .catch((err) => { // 接收 reject
          console.log(`error get Promise reject!`, err)
        })
    },
    setLanguage (lang) {
      this.$store.dispatch('setLanguage', lang)
    }
  }
}
</script>
