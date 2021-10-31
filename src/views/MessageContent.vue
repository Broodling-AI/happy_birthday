<template>
  <div id='message-content'>
    <div class="ribbon"></div>
    <div class="content">
      <h2 class="title">To Loser:</h2>
      <div class="celeration-content">
        <p>每个人的青春都不一样，有的疯狂，</p>
        <p>有的纯粹。但每个人的青春又是一样</p>
        <p>的，投入去爱，投入去拼，投入去忧</p>
        <p>愁 ，投入去证明自己。</p>
        <p>不要让未来的自己失望。</p>
        <p>加油！</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageContent',
  mounted() {
    let _this = this;
    setTimeout(() => {
      _this.$router.push('/wish')
    },16000)
  }
}
</script>

<style lang="less">
@keyframes appear{
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes together {
  from {
    width: 0;
  }
  to {
    width: 486px;
  }
}

#message-content {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  text-align: center;
  background: url('~@assets/img/message/bg_message.png');
  opacity: 0;
  animation: appear 2.3s linear forwards;
  .ribbon {
    height: 962px;
    margin-top: 320px;
    background: url('~@assets/img/message/ribbon.png') -130px 0;
    background-size: 124% 100% !important;
  }
  .content {
    position: absolute;
    top: 530px;
    left: 50%;
    transform: translateX(-50%);
    width: 755px;
    height: 818px;
    background: url('~@assets/img/message/opened_cover.png');
    .title {
      position: absolute;
      left: 133px;
      top: 185px;
      font-size: 45px;
    }
    .celeration-content {
      overflow: hidden;
      position: absolute;
      left: 132px;
      top: 274px;
      width: 486px;
      height: 265px;
      text-align: center;
      font-size: 30px;
      p {
        width: 0%;
        overflow: hidden;
        white-space: nowrap;
        &:nth-child(1) {
          animation: together 3s steps(16) 2.3s forwards;
        }
        &:nth-child(2) {
          animation: together 3s steps(16) 5.3s forwards;
        }
        &:nth-child(3) {
          animation: together 3s steps(16) 8.3s forwards;
        }
        &:nth-child(4) {
          margin-left: 108px;
          text-align: left;
          animation: together 3s steps(10) 11.3s forwards;
        }
        &:nth-child(5) {
          margin-left: 85px;
          text-align: left;
          animation: together 3s steps(11) 13s forwards;
        }
        &:last-child {
          margin-left: 205px;
          text-align: left;
          margin-top: 15px;
          font-size: 40px;
          font-weight: 700;
          animation: together 1s steps(8) 15s forwards;
        }
      }
    }
  }
}
</style>