<template>
  <div id="photo">
    <img v-for="(item, index) in photoList" :key="item.src" :src="item.src" alt="" @click="goDetails(index)">
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      list: []
    }
  },
  computed: {
    ...mapState(['photoList'])
  },
  methods: {
    ...mapMutations(['setPhotoList']),
    goDetails(index) {
      this.$router.push({
        name: 'PhotoDetails',
        query: {
          index
        }
      })
    }
  },
  created () {
    axios.get('/data/photodata.json')
      .then(res => {
        console.log(res)
        this.setPhotoList(res.data.photoData)
        // this.list = res.data.photoData
      })
      .catch(err=> {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
  #photo{
    img{
      width: 50%;
    }
  }
</style>