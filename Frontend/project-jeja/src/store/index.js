import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    allUsers: [
      { id: 1, name: 'jin', email: 'jin@naver.com', password: '123456' }
    ],
    isLogin: false,
    isloginError: false
  },
  getters: {
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
    }
  },
  actions: {
    // 로그인 시도
    login({ state, commit }, loginObj) {
      let selectedUser = null
      state.allUsers.forEach(user => {
        if (user.email === loginObj.email) selectedUser = user
      })
      selectedUser === null
        ? alert('입력하신 이메일이 없습니다.')
        : selectedUser.password !== loginObj.password
          ? alert('이메일과 비밀번호가 일치하지 않습니다.')
          : alert('로그인이 완료되었습니다')
          router.push({ name: 'home' })
    }
  },
  modules: {
  }

})
