// mock.js
import {loginUser, users} from './loginUser'

// eslint-disable-next-line
const mockjs = (() => {
  let axios = require('axios')
  let MockAdapter = require('axios-mock-adapter')
  let mock = new MockAdapter(axios)
  let _users = users

  // 登录
  const _login = function () {
    mock.onPost('/loginUser').reply(config => {
    // config.data即为前端传入的参数
      let {username, password} = JSON.parse(config.data)
      return new Promise((resolve, reject) => {
        let user = null
        setTimeout(() => {
          let hasUser = loginUser.some(userItem => {
            if (userItem.userName === username && userItem.password === password) {
              user = JSON.parse(JSON.stringify(user))
              user.password = undefined
              return true
            }
          })
          if (hasUser) {
            resolve([200, {code: 200, msg: '请求成功', user}])
          } else {
            resolve([200, {code: 500, msg: '账号或密码错误'}])
          }
        }, 1000)
      })
    })
  }

  // 获取用户列表
  const _getUserList = () => {
    mock.onGet('/user/listpage').reply(config => {
      let {page, name} = config.params
      let mockUsers = _users.filter(user => {
        if (name && user.name.indexOf(name) === -1) return false
        return true
      })
      let total = mockUsers.length
      mockUsers = mockUsers.filter((u, index) => index < 20 * page && index >= 20 * (page - 1))
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            users: mockUsers
          }])
        }, 1000)
      })
    })
  }

  // 删除用户
  const _deleteUser = () => {
    mock.onGet('/user/remove').reply(config => {
      let { id } = config.params
      _users = _users.filter(u => u.id !== id)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }])
        }, 500)
      })
    })
  }

  //  批量删除用户
  const _deleteMoreUsers = () => {
    mock.onGet('/user/batchremove').reply(config => {
      let { ids } = config.params
      ids = ids.split(',')
      _users = _users.filter(u => !ids.includes(u.id))
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }])
        }, 500)
      })
    })
  }

  // 编辑用户
  const _editUser = () => {
    mock.onGet('/user/edit').reply(config => {
      let { id, name, addr, age, birth, sex } = config.params
      _users.some(u => {
        if (u.id === id) {
          u.name = name
          u.addr = addr
          u.age = age
          u.birth = birth
          u.sex = sex
          return true
        }
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '编辑成功'
          }])
        }, 500)
      })
    })
  }

  // 新增用户
  const _newUser = () => {
    mock.onGet('/user/add').reply(config => {
      let { name, addr, age, birth, sex } = config.params
      _users.push({
        name: name,
        addr: addr,
        age: age,
        birth: birth,
        sex: sex
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '新增成功'
          }])
        }, 500)
      })
    })
  }

  return {
    login: _login,
    getUserList: _getUserList,
    deleteUser: _deleteUser,
    deleteMoreUsers: _deleteMoreUsers,
    editUser: _editUser,
    newUser: _newUser
  }
})()

export {
  mockjs
}
