<template>
    <div>
        <div>
            <label for="Id">ID를 입력해주세요.</label>
            <input type="text" id="Id" v-model="Id" />
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
      Id: '',
      password: ''
    }
  },
  methods: {
    // ...mapActions(['login']),
    logIn() {
      const Id = this.Id
      const password = this.password

      const payload = {
        Id, password
      }

      this.$store.dispatch('logIn', payload)
    }

  }
}
</script>
