<template>
  <div id='music'>
   <div class="lights">
     <div class="lights-line"></div>
     <div class="lights-light">
       <div :class="'light'+(index+1)" v-for="(item,index) in lights" :key="index">
         <!-- 
           1、img、css等资源类文件借助了webpack的css-loader,img-loader等插件，理论上都需要加上'~'
           2、webpack的url-load貌似不支持动态(路径包含变量)解析路径，所以需要借助require函数动态解析路径
           3、require函数默认从根目录开始查找，不需要加'~' -->
         <img :src="require('@assets/img/music/'+item+'-light.png')">
       </div>
     </div>
   </div>
   <div class="play-music">
     <button class="play-music-btn" @click="playMusic">播放音乐</button>
   </div>
   
  </div>
</template>

<script>
export default {
  name: 'Music',
  data() {
    return {
      lights: ['yellow','pink','green','orange-red','purple','blue']
    }
  },
  methods: {
    playMusic() {
      // 通知父组件开始播放音乐
      this.$emit('play')
      setTimeout(() => {
          this.$router.push('/cake')
      },1200);
    }
  }
}
</script>

<style lang="less">
  #music {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-top: 120px;
    background: url('~@assets/img/music/bg_music.png') no-repeat;
    background-size: 100% 100%;
    .lights {
      width: 100%;
      height: 236px;
      &-line {
        height: 8px;
        background-color: #fff;
      }
      &-light {
        display: flex;
        height: 228px;
        padding: 0 33px;
        .light1,
        .light2,
        .light3,
        .light4,
        .light5,
        .light6 {
          flex: 1;
          position: relative;
          img {
            margin-top: 36px;
            width: 157px;
            height: 199px;
          }
          &::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 0%;
            width: 5px;
            height: 36px;
            background-color: #fff;
            transform: translateX(-50%);
          }
        }
        div[class^='light']:nth-child(-n+5) {
          margin-right: 14px;
        }
      }
    }
    .play-music {
      overflow: hidden;
      flex: 1;
      text-align: center;
      line-height: 128px;
      &-btn {
        width: 501px;
        height: 128px;
        margin-top: 1000px;
        background-color: #fff;
        color: #FFBA00;
        font-size: 45px;
        border: none;
        border-radius: 64px;
      }
    }
  }
</style>