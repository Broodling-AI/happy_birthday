<template>
  <div id='message' :class=" {'disappear': disappear} ">
    <div class="ribbon"></div>
    <div class="message"></div>
    <button class="open-message" @click="openCover">打开信封</button>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      disappear: false
    }
  },
  methods: {
    openCover() {
      this.disappear = true
      let _this = this
      setTimeout(() => {
        _this.$router.push('/content')
      },2000)
    }
  }
}
</script>

<style lang="less">
@keyframes disappear {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

  .disappear {
    animation: disappear 2.3s linear forwards;
  }
  #message {
    position: relative;
    overflow: hidden;
    width: 100%;
     height: 100%;
    text-align: center;
    background: url('~@assets/img/message/bg_message.png');
    .ribbon {
      height: 962px;
      margin-top: 320px;
      background: url('~@assets/img/message/ribbon.png') -130px 0;
      background-size: 124% 100% !important;
    }
    .message {
      position: absolute;
      top: 680px;
      left: 210px;
      width: 656px;
      height: 476px;
      background: url('~@assets/img/message/cover.png');
    }
    .open-message {
      margin-top: 200px;
      width: 501px;
      height: 128px;
      background-color: #84ADDF;
      color: #fff;
      font-size: 45px;
      border-radius: 64px;
    }
  }
</style>