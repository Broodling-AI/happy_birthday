<template>
  <div id="app" style="width:100%;height:100%">
    <router-view @play="playMusic"/> 
    <!-- 此处路径解析由原生html5标签来完成，非webpack解析，因而无需加'~' -->
    <audio class="audio" src="@assets/media/mp3/hbd.mp3"  loop="loop"></audio>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    playMusic() {
      // 因为路由跳转会导致页面刷新，所以将音频的播放放在父组件，这样路由跳转就不会影音乐的播放
      let audio = document.querySelector('.audio')
      audio.play()
    }
  }
}
</script>

<style>
  /* webpack引入样式使用别名需要以 '~别名'的形式，
     '~'作用是让webpack从根目录开始查找[webpack默认从当前路径开始查找] 
  */
  @import '~@assets/css/base.css';

</style>
