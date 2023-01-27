<template>
    <div class="contain">
        <h1>제자광성교회</h1>
        <h2>COVENANT 청년부</h2>
        <p>환영합니다 ^^</p>
        <form @submit.prevent="submitForm">
            <div>
                <label for="ID">ID</label>
                <input type="text" id="ID" v-model="Id" />
            </div>
            <div>
                <label for="name">이름</label>
                <input type="text" id="name" v-model="name" />
            </div>
            <div>
                <label for="password">비밀번호</label>
                <input type="password" id="password" v-model="pw" />
            </div>
            <div>
                <label for="passwordConfirm">비밀번호 확인</label>
                <input type="password" id="passwordConfirm" v-model="pwConfirm" />
            </div>
            <div>
              <label for="phon-num">휴대폰번호를 입력해주세요</label>
              <input type="number" id="phon-num" v-model="phoneNum" />
            </div>
            <div>
              <label for="birth">생일을 입력해주세요</label>
              <input type="date" id="birth" v-model="birthDay" />
            </div>
            <div>
                <select name="" id="">
                    <option value="">내가 속한 셀</option>
                    <option value="" :key="cell.code" v-for="cell in cells">{{cell.title}}</option>
                </select>
            </div>
            <button type="submit">회원가입</button>
        </form>
        <router-link :to="{ name: 'LoginView' }"><button class="btn">로그인</button></router-link>
    </div>
</template>

<script>
export default {
  components: {},
  name: 'SignUpview',
  data() {
    return {
      Id: '',
      name: '',
      pw: '',
      pwConfirm: '',
      phonNum: '',
      birthDay: '',
      cells: [
        { title: '1셀', code: '1' },
        { title: '2셀', code: '2' },
        { title: '3셀', code: '3' },
        { title: '4셀', code: '4' },
        { title: '5셀', code: '5' }
      ]
    }
  },
  methods: {
    subitForm() {
      console.log('dd')
    },
    signUp() {
      const Id = this.Id
      const name = this.name
      const pw = this.pw
      const pwConfirm = this.pwConfirm
      const phoneNum = this.phonNum
      const birthDay = this.birthDay
      const cells = this.cells
      const payload = {
        Id,
        name,
        pw,
        pwConfirm,
        phoneNum,
        birthDay,
        cells
      }
      this.$store.dispatch('signUp', payload)
    }
  }
}
</script>
<style scoped>

</style>
