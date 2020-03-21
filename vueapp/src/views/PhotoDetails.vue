<template>
  <div>
    <v-touch v-on:swipeleft="onSwipeLeft">
      <div id="photobg" :style="{backgroundImage: `url(${photoList[index].src})`}"></div>
    </v-touch>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Vue  from 'vue'
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
export default {
  data () {
    return {
      index: this.$route.query.index
    }
  },
  computed: {
    ...mapState(['photoList'])
  },
  methods: {
    onSwipeLeft() {
      this.index++
    }
  }
}
</script>

<style lang="scss" scoped>
  #photobg{
    position: absolute;
    top: 1rem;
    bottom: 1rem;
    left: 0;
    right: 0;
    background-color: #000;
    background-size: contain;
    background-repeat: no-repeat;
  }
</style>