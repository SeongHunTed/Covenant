<template>
    <div>
        <div>
            <label for="id">E-mail을 입력해주세요.</label>
            <input type="text" id="email" v-model="email" />
        </div>
        <div>
            <label for="password">password를 입력해주세요.</label>
            <input type="password" id="pw" v-model="password" />
        </div>
        <button @click="login({
            email,
            password
        })">로그인</button>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  components: {},
  data() {
    return {
      email: '',
      password: ''
      // DB를 몰라 일단함
    //   allUsers: [
    //     { id: 1, name: 'jin', email: 'jin@naver.com', password: '123456' }
    //   ]



    }
  },
  computed: {
    ...mapState(['isLogin', 'isLoginError'])
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    ...mapActions(['login'])
    // login() {
    // 전체 유저에서 해당 이메일로 유저를 찾는다.
    //   let selectedUser = null
    //   this.allUsers.forEach(user => {
    //     if (user.email === this.email) selectedUser = user
    //   })
    //   selectedUser === null
    //     ? alert('입력하신 이메일이 없습니다.')
    //     : selectedUser.password !== this.password
    //       ? alert('이메일과 비밀번호가 일치하지 않습니다.')
    //       : alert('로그인이 완료되었습니다')
    // }
    // 그유저의 비밀번호와 입력된 비밀번호를 비교한다.
  }
}
</script>
