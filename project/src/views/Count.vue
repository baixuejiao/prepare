<template>
  <div>
    <h1>计数器</h1>
    <p> count: {{ $store.state.count }} </p>
    <p> count: {{ count }} </p>
    <p> sum: {{sum}} </p>
    <button @click="$store.commit('add', 4)">+1</button>
    <button @click="addFun(3)">+1</button>
  </div>
</template>

<script>

import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['sum'])
  },
  methods: {
    ...mapMutations(['add']),
    ...mapActions(['addFun'])
  }
}
</script>

<style>

</style>