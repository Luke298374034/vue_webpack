<template>
  <div id="app">
    <header></header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <template v-for="(item, index) in routes">
        <!-- type.I -->
        <router-link v-if="item.index" :key="index" :to="{path:item.path}" v-text="item.name" class="navbar-brand"/>
        <!-- type.II -->
        <div v-else :key="index" class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <!-- type.A -->
            <li v-if="!item.children" :key="index" class="nav-item">
              <router-link :to="{path:item.path}" v-text="item.name" class="nav-link"/>
            </li>
            <!-- type.B -->
            <li v-else-if="item.children" :key="index" class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-text="item.name"></a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" v-for="(subitem, index) in item.children" :key="index" :to="{path:item.path + '/' + subitem.path}" v-text="subitem.name"/>
              </div>
            </li>
          </ul>
        </div>
      </template>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>
    <router-view/>
    <footer></footer>
  </div>
</template>

<script>
import router from './router/index'
export default {
  name: 'App',
  data: function () {
    return {
      routes: router.options.routes,
      title: {
        name: '嘦巭深兲嫑跑',
        site: 'Main'
      }
    }
  },
  mounted: function () {
    console.log(`routes`)
    console.log(router.options.routes)
  }
}
</script>

<style lang="scss">
// 因為bootstrap會借用到jQuery, 所以這邊採用bootstrap-vue
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, 'Microsoft YaHei', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.test {
  color: #FFFFFF;
}
a {
  color: #fff;
}
a:hover {
  color: #999;
}

nav {
  text-align: left;
}
</style>
