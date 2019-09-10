// loginUser.js
import MockData from 'mockjs'
let Random = MockData.Random
const loginUser = [ // 登录用户库
  {
    id: 1,
    userName: 'admin',
    password: '123456',
    avatar: 'https://xxxx.jpg',
    name: '王某某'
  }
]
const users = [] // 用户列表

for (let i = 0; i < 66; i++) {
  users.push(MockData.mock({
    id: Random.guid(),
    name: Random.cname(),
    addr: MockData.mock('@county(true)'),
    'age|18-60': 1,
    birth: Random.date(),
    sex: Random.integer(0, 1)
  }))
}
export { loginUser, users }
