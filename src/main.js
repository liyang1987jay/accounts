// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// root component
import App from './App'
// 页面顶部进度条
// import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import axios from 'axios'
Vue.use(ElementUI)
Vue.use(axios)
// router
Vue.use(VueRouter)
import routes from './router/index'
const router = new VueRouter({
  routes
})
/* router.beforeEach((to, from, next) => {
  window.scroll(0, 0)
  if (to.path !== '/login') {
    next('/login')
  } else {
    if (to.path === '/login') {
      next({
        path: '/user/list'
      })
    } else {
      NProgress.start()
      next()
    }
  }
})
router.afterEach(transition => {
  NProgress.done()
}) */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
