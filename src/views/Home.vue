<template>
  <div id='home'>
    <div class="line-light" :class="{ 'line-light-move': move }">
      <div class="line"></div>
      <div class="light"></div>
    </div>
    <div class="turn-on-light">
      <button class="open-btn" @click="openLight">打开灯</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    openLight() {
      this.move = true
      setTimeout(() => {
        this.$router.push('/music')
      },3800)
    }
  },
  data() {
    return {
       move: false
    }
  }
}
</script>

<style lang="less">
  @keyframes move {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-440px);
    }
  }

  #home {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: #181818;
    .line-light-move {
      animation: move linear 3.8s;
    }
    .line-light {
      .line {
        position: relative;
        margin-top: 183px;
        height:  262px;
        // 引用图片使用别名，也需要加'~'
        background: url('~@assets/img/home/line.png') no-repeat;
        background-size: 100% 100%;
        &::after {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: -26px;
          background-color: #fff;
          width: 6px;
          height: 26px;
        }
      }
      .light {
        width: 262px;
        height: 331px;
        margin: 26px auto;
        background: url('~@assets/img/home/light.png') no-repeat;
        background-size: 100% 100%;
      }
    }
    .turn-on-light {
      height: 128px;
      margin-top: 580px;
      text-align: center;
      line-height: 128px;
      .open-btn {
        width: 501px;
        height: 128px;
        background:#F6CC5A;
        color: #fff;
        font-size: 45px;
        border-radius: 64px;
      }
    }
  }
</style>