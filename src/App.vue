<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link :to="{name:title.site}" v-text="title.name" class="navbar-brand"/>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-for="(item, index) in path" :key="index" v-if="!item.subpath">
            <router-link :to="{name:item.site}" v-text="item.site" class="nav-link"/>
          </li>

          <li class="nav-item dropdown" v-for="(item, index) in path" :key="index" v-if="item.subpath">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-text="item.site"></a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" v-for="(subitem, index) in item.subpath" :key="index" :to="{name:item.site + '/' + subitem}" v-text="subitem"/>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      title: {
        name: '嘦巭深兲嫑跑',
        site: 'Main'
      },
      path: [
        {
          site: 'Firebase'
        },
        {
          site: 'count'
        },
        {
          site: 'todoVuex'
        },
        {
          site: 'Playground',
          subpath: ['ooxx', 'calculator', 'toDoList']
        },
        {
          site: 'HelloWorld'
        },
        {
          site: 'HelloWorld2'
        }
      ]
    }
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
