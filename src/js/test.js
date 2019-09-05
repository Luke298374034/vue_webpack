// eslint-disable-next-line
const _test = (() => {
  var axios = require('axios')
  var MockAdapter = require('axios-mock-adapter')

  // This sets the mock adapter on the default instance
  var mock = new MockAdapter(axios)

  // Mock any GET request to /users
  // arguments for reply are (status, data, headers)
  const M = function () {
    console.log(`begin M`)
    mock.onGet('/users').reply(200, {
      users: [
        { id: 1, name: 'John Smith' }
      ]
    })
    console.log(`finish M`)
  }

  const A = axios.get('/users')
    .then(function (response) {
      console.log(response.data)
    })

  return {
    M: M,
    A: A
  }
})()

export {
  _test
}
