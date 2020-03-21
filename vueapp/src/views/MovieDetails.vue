<template>
  <div id="details">

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      
    }
  },
  methods: {
    
  },
  created () {
    axios.get(`https://douban.uieee.com/v2/movie/subject/${this.$route.query.id}`)
      .then(res => {
        console.log(res)
      })
      .catch( err => {
        console.log(err)
      } 
    )
  }
}
</script>

<style lang="scss" scoped>

</style>