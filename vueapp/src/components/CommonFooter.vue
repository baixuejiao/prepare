<template>
  <footer class="footer">
    <!-- <router-link to="/">电影</router-link>
    <router-link to="/music">音乐</router-link>
    <router-link to="/book">图书</router-link> -->
    <router-link v-for="item in menuList" :to="item.path" :key="item.path">{{item.name}}</router-link>

  </footer>
</template>

<script>
export default {
  data () {
    return {
      menuList: [
        {
          name: '电影',
          path: '/movie',
          bgColor: '#ff0000'
        },
        {
          name: '音乐',
          path: '/music',
          bgColor: '#ff00ff'
        },
        {
          name: '书籍',
          path: '/book',
          bgColor: '#ff33ff'
        },
        {
          name: '图片',
          path: '/photo',
          bgColor: '#ff8907'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer{
    display: flex;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: red;
    position: fixed;
    bottom: 0;

    a{
      flex: 1;
      text-align: center;
      color: #000;
    }
    .router-link-exact-active{
      color: #fff;
    }
  }
</style>