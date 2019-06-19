import { LOGIN, LOADING } from '../constants/types'
// 是否登录
function verifyLogin (user) {
  return {
    type: LOGIN,
    ...user
  }
}

function isloading (isShow) {
  return {
    type: LOADING,
    isShow
  }
}

export {
  verifyLogin,
  isloading
}