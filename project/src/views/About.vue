<template>
  <!-- <div class="about">
    <h1>This is an about page</h1>
  </div> -->
  <div>
    <button @click="goBack">前进</button>
    <button @click="goForward">后退</button>
    <button @click="goHome">点击跳转</button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.back()
      this.$router.go(-1)
    },
    goForward() {
      this.$router.forward()
      this.$router.go(1)
    },
    goHome() {
      this.$router.push({
        name: 'Home',
        params: {
          a: 1
        }
      })
    }
  }
}
</script>

<style>

</style>
