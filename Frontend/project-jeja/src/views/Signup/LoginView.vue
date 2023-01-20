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
        <button>로그인</button>
    </div>
</template>
<script>
// import { mapActions } from 'vuex'
export default {
  name: 'LoginView',
  components: {},
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    // ...mapActions(['login']),
    logIn() {
      const email = this.email
      const password = this.password

      const payload = {
        email, password
      }

      this.$store.dispatch('logIn', payload)
    }

  }
}
</script>
