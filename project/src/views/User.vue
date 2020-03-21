<template>
  <div>
    <h1>用户详情</h1>
    {{$route.params.id}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      params: this.$route.params
    }
  }
}
</script>

<style>

</style>