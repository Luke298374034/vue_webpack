<template>
  <div class="hello container">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

      <h1>{{ msg }}</h1>

      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
        </div>
      </div>

      <h1>{{ msg }}</h1>

      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <div class="media" v-for="item in messages" :key="item.username">
      <img src="http://lorempixel.com/100/100/" class="align-self-start mr-3" alt="...">
      <div class="media-body">
        <h5 class="mt-0">{{item.username}}</h5>
      </div>
    </div>
    <div class="media">
      <img src="http://lorempixel.com/100/100/" class="align-self-end mr-3" alt="...">
      <div class="media-body">
        <h5 class="mt-0">Bottom-aligned media</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld2',
  data () {
    return {
      msg: 'HelloWorld2',
      messages: [
        {
          username: 'test',
          message: 'test'
        },
        {
          username: 'test2',
          message: 'test2'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
