<template>
  <div>
    <ul>
      <li v-for="obj in list" :key="obj.id" @click="goDetails(obj.id)">
        <img :src="obj.bg" alt="">
      </li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    getList() {
      axios.get('/data/musiclist.json')
        .then(res => {
          console.log(res)
          this.list = res.data.albums
        })
        .catch(err => {
          console.log(err)
        })
    },
    goDetails(id) {
      this.$router.push({
        name: 'MusicDetails',
        query: {
          id
        }
      })
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
  li{
    width: 50%;
    float: left;
  }
</style>