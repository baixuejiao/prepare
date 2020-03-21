<template>
  <div id="app">
    <CommonHeader/>
    <div id="container">
      <router-view/>
    </div>
    <CommonFooter/>
  </div>
</template>
<script>

import CommonHeader from '@/components/CommonHeader.vue'
import CommonFooter from '@/components/CommonFooter.vue'


export default {
  components: {
    CommonHeader,
    CommonFooter
  }
}
</script>
<style lang="scss">
#container{
  margin: 50px 0;
}
</style>
