<template>
  <div id="movie">
    <ul id="movie-wrapper">
      <li v-for="obj in movieList" :key="obj.id" class="movie-list" @click="goDetails(obj.id)">
        <img class="movie-list-img" :src="obj.images.medium" alt="">
        <div class="movie-list-info">
          <h4>{{obj.title}}</h4>
          <!-- <p>上映日期：{{obj.}}</p> -->
          <p> 导演： <span v-for="item in obj.directors" :key="item.id">{{item.name}}</span> </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      movieList: []
    }
  },
  created () {
    this.getList();

    window.onscroll = () => {
      let top = document.documentElement.scrollTop;
      let height = document.documentElement.clientHeight;
      let tall = document.documentElement.scrollHeight

      if(tall == top + height) {
        this.getList()
      }
    }
    
  },
  methods: {
    getList() {
      // 域名 端口 协议
      axios.get( `https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/top250?start=${this.movieList.length}&count=10`)
        .then( res => {
          console.log(res.data)
          this.movieList = [...this.movieList, ...res.data.subjects]
        })
        .catch( err => {
          console.log(err)
        })
    },
    goDetails(id) {
      this.$router.push({
        name: 'Details',
        query: {
          id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  #movie{
    background: #fff;
    .movie-list{
      display: flex;
      padding: .2rem .4rem;
      position: relative;

      &::after{
        content: '';
        display: block;
        border: 1px solid #ccc;
        position: absolute;
        bottom: 0;
        left: .2rem;
        right: .2rem;
        transform: scaleY(.5);
      }

      .movie-list-img{
        width: 2rem;
      }
      .movie-list-info{
        flex: 1;
        padding-left: .2rem;
      }
    }
  }
</style>