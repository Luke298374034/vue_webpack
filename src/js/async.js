// eslint-disable-next-line
const axios = (() => {
  var axios = require('axios')
  var MockAdapter = require('axios-mock-adapter')
  var mock = new MockAdapter(axios)

  // Mock any GET request to /users
  // arguments for reply are (status, data, headers)
  const _mockget = function (path) {
    mock.onGet(path).reply(200, {
      users: [
        { id: 1, name: 'John Smith' },
        { id: 2, name: 'John Cena' },
        { id: 3, name: 'Bob Smith' }
      ]
    })
  }

  const _get = function (path) {
    return axios.get(path)
      .then((res) => {
        console.log(`in async get`, res)
        res.path = `1 -> `
        return res
      })
      .then((res) => {
        console.log(`in async get 2`, res)
        res.path += `2 -> `
        return res
      })
      .catch((err) => {
        console.error(`in async get error`, err)
        // // 還是可以return Promise 回去
        // return Promise.reject(err)
      })
      // // 一般來說 封裝應該不會用到 finally 應該會是從外面加
      // .finally((res) => {
      //   console.log(`in finally`, res)
      //   return res
      // })
  }

  const _mistakeGet = function () {
    return axios.get('/users')
      .then((res) => {
        console.log(`in async mistake get`, res)
        res.path = `A -> `
        return res
      })
      .then((res) => {
        throw new Error(`in async mistake get error path: ${res.path}error`)
        // // 但是這邊 在 throw new Error 之後 就無法再return了
        // return Promise.reject(`傳回錯誤`)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const _mockpost = function (path) {
    mock.onPost(path).reply(200, {
      users: [
        { id: 1, name: 'Pop Smith' },
        { id: 2, name: 'Pop Cena' },
        { id: 3, name: 'Pop Smith' }
      ]
    })
  }

  const _post = function () {
    return axios.post('/users', {})
      .then((res) => {
        console.log(`in async post`, res)
        return res
      })
      .catch((err) => {
        console.error(err)
      })
  }
  return {
    mockget: _mockget,
    get: _get,
    mistakeGet: _mistakeGet,
    mockpost: _mockpost,
    post: _post
  }
})()

export {
  axios
}
