<template>
  <div>
    <aplayer autoplay v-if="list.length>0"
    :music="list[0]"
    :list = "list"
/>
  </div>
</template>

<script>
import Aplayer from 'vue-aplayer'
import axios from 'axios'
export default {
  data () {
    return {
      list: []
    }
  },
  components: {
    Aplayer
  },
  created () {
    axios.get('/data/musicdata.json')
      .then(res => {
        console.log(res)
        res.data.musicData.forEach(value => {
          value.pic = value.musicImgSrc
          value.artist = value.author
        })
        this.list = res.data.musicData
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style>

</style>