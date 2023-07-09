import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/utils/storage'
import routes from './routes'

Vue.use(VueRouter)
const whiteList = ['/hklogin', '/hkregister']
const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  const token = getToken()
  if (token) {
    next()
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/hklogin')
    }
  }
})

export default router
