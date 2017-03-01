import {
  Login
} from '../components/'

module.exports = [{
  path: '/',
  redirect: to => {
    return 'login'
  }
}, {
  path: '/login',
  component: Login
}]
