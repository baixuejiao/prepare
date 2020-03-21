<template>
  <div>
    <h1>课程分类</h1>
    <div>
      <router-link to="/course/fe">web全栈</router-link>
      <router-link to="/course/rd">后端编程</router-link>
    </div>
    <div>
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>