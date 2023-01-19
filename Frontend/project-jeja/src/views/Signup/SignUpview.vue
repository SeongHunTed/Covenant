<template>
    <div class="contain">
        <h1>제자광성교회</h1>
        <h2>COVENANT 청년부</h2>
        <p>환영합니다 ^^</p>
        <form @submit.prevent="submitForm">
            <div>
                <label for="email">E-mail</label>
                <input type="text" id="email" v-model="email" />
            </div>
            <div>
                <label for="name">이름</label>
                <input type="text" id="name" v-model="name" />
            </div>
            <div>
                <label for="password">비밀번호</label>
                <input type="text" id="password" v-model="pw" />
            </div>
            <div>
                <label for="passwordConfirm">비밀번호 확인</label>
                <input type="text" id="passwordConfirm" v-model="pwConfirm" />
            </div>
            <div>
                <select name="" id="">
                    <option value="">내가 속한 셀</option>
                    <option value="" :key="cell.code" v-for="cell in cells">{{cell.title}}</option>
                </select>
            </div>
            <button type="submit">확인</button>
        </form>
    </div>
</template>

<script>
export default {
  components: {},
  name: 'SignUpview',
  data() {
    return {
      email: '',
      name: '',
      pw: '',
      pwConfirm: '',
      cells: [
        { title: '1셀', code: '1' },
        { title: '2셀', code: '2' },
        { title: '3셀', code: '3' },
        { title: '4셀', code: '4' },
        { title: '5셀', code: '5' }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    subitForm() {
      console.log('dd')
    },
    signUp() {
      const email = this.email
      const name = this.name
      const pw = this.pw
      const pwConfirm = this.pwConfirm

      const payload = {
        email,
        name,
        pw,
        pwConfirm
      }
      this.$store.dispatch('signUp', payload)
    }
  }
}
</script>
<style scoped>

</style>
