import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import store from '@/store'

// const rejectAuthUser = (to, from, next) => {
//   if (store.state.isLogin === true) {
//     alert('이미 로그인을 하였습니다.')
//     next('/')
//   } else {
//     next()
//   } 로그인했을때 로그인 클릭 막기
// }

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () => import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingStringView.vue')
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    component: () => import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingHtmlView.vue')
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInputView',
    component: () => import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingInputView.vue')
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelectView',
    component: () => import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingSelectView.vue')
  },
  {
    path: '/signup',
    name: 'SignUpView',
    component: () => import(/* webpackChunkName: "databinding" */ '../views/Signup/SignUpview.vue')
  },
  {
    path: '/accounts/login',
    name: 'LoginView',
    component: () => import(/* webpackChnkName: "databinding" */ '../views/Signup/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
