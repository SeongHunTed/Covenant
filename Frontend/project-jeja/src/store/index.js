import { createStore } from 'vuex'
import router from '../router'
import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000'

export default createStore({
  state: {
    email: '',
    password: '',
    token: '',

    isLogin: false,
    isloginError: false
  },
  mutations: {
    // 로그인 성공했을때,
    loginsSuccess(state) {
      state.isLogin = true
      state.isloginError = false
    },
    // 로그인이 실패했을때
    loginError(state) {
      state.isLogin = false
      state.isloginError = true
    },

    SAVE_TOKEN(state, token) {
      state.token = token
    },
    SAVE_USER_INFO(state, userInfo) {
      state.token = userInfo.token
      state.email = userInfo.email
    }
  },
  actions: {
    logIn(context, payload) {
      const email = payload.email
      const password = payload.password
      axios({
        method: 'post',
        url: `${API_URL}/accounts/login/`,
        data: {
          email, password
        }
      })
        .then(res => {
          context.commit('SAVE_TOKEN', res.data.key)
          context.commit('SAVE_USER_INFO', {
            userToken: res.data.key,
            email
          })
          router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    signUp(context, payload) {
      const email = payload.email
      const pw = payload.pw
      const pwConfirm = payload.pwConfirm
      const phoneNum = payload.phoneNum
      const birthDay = payload.birthDay
      const cells = payload.cells

      axios({
        method: 'post',
        url: `${API_URL}/accounts/signup/`,
        data: {
          email, pw, pwConfirm, phoneNum, birthDay, cells
        }
      })
        .then(res => {
          context.commit('SAVE_TOKEN', res.data.key)
          router.push({ name: 'LogInView' })
        })
        .catch(err => {
          console.log(err)
          alert('입력 양식을 준수해주세요.')
        })
    }
  },
  getters: {
    getEmail(state) {
      console.log(state.email)
      return state.email
    }
  }

})
