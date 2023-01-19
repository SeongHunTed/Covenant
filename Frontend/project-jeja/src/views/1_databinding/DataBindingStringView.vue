<template>
    <div>
        <h1>Hello {{userName}}</h1>
        <p>{{message}}</p>
    </div>
</template>
<script>
export default {
  data() {
    return {
      userName: 'jin',
      message: 'Welcoome 박 진',
      arr: [],
      obj: {}
    }
  }
}
</script>
<style scoped>
.text-red{
    color: red;
}
</style>
