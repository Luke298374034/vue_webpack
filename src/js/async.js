// eslint-disable-next-line
const async = (() => {
  var axios = require('axios')
  var MockAdapter = require('axios-mock-adapter')
  var mock = new MockAdapter(axios)

  // Mock any GET request to /users
  // arguments for reply are (status, data, headers)
  const _mock = function () {
    mock.onGet('/users').reply(200, {
      users: [
        { id: 1, name: 'John Smith' }
      ]
    })
  }

  const _get = function () {
    return axios.get('/users')
      .then(function (response) {
        // console.log(response.data)
        // return response
      })
      .catch(function (error) {
        console.error(error)
      })
    // return `sfasfjl`
  }

  return {
    mock: _mock,
    get: _get
  }
})()

export {
  async
}
