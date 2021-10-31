<template>
  <div id='cake'>
    <div class="t-birron"></div>
    <div class="b-birron"></div>
    <header class="header">
      <div class="flag"></div>
      <div class="l-ribbon" :class=" { 'show-l-ribbon': showLRibbon } "></div>
      <div class="r-ribbon" :class=" { 'show-r-ribbon': showRRibbon } "></div>
      <div class="celebration-text" :class="{'show-celebration-text': showCelebrationText} ">
        <div class="happy">
          <div class="h"></div>
          <div class="a"></div>
          <div class="p"></div>
          <div class="p"></div>
          <div class="y"></div>
        </div>
        <div class="birthday">
          <div class="b"></div>
          <div class="i"></div>
          <div class="r"></div>
          <div class="t"></div>
          <div class="h"></div>
          <div class="d"></div>
          <div class="a"></div>
          <div class="y"></div>
        </div>
      </div>
    </header>
       
    <div class="birthday-cake">
      <div class="fire" :class="{ 'show-fire': showFile }"></div>
      <div class="candle"></div>
      <div class="oil-one"></div>
      <div class="cake-one"></div>
      <div class="oil-two"></div>
      <div class="cake-two"></div>
      <div class="oil-three"></div>
      <div class="cake-three"></div>
      <div class="plate"></div>
    </div>
   
    <footer class="footer">
      <div class="l-ballon" :class=" { 'show-ballon': showBallon } "></div>
      <button class="light-btn" @click="lightCandle" :class="{ 'show-btn': showBtn }">点燃蜡烛</button>
      <div class="r-ballon" :class=" { 'show-ballon': showBallon } "></div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Cake',
  data() {
    return {
      showFile: false,
      showBallon: false,
      showCelebrationText: false,
      showLRibbon: false,
      showRRibbon: false,
      showBtn: false
    }
  },
  created() {
    let _this = this
    setTimeout(() => {
      _this.showBtn = true
    },12000)
  },
  methods: {
    lightCandle() {
      this.showFile = true
      this.showBallon = true
      this.showCelebrationText = true
      this.showLRibbon = true
      this.showRRibbon = true 

      setTimeout(() => {
        this.$router.push('/message')
      },6800)
    }
  }
}
</script>

<style lang="less">
  @keyframes openFlag {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
  @keyframes together {
    from {
      transform: translateY(-1165px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes appear{
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes showBallon {
    from {
      transform: translateY(800px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes roated {
    from {
      opacity: 1;
      transform: rotateY(0deg) scale(0);
    }
    to {
      opacity: 1;
      transform: rotateY(360deg) scale(1);
    }
  }
  @keyframes showLRibbon {
    from {
      margin-left: -300px;
    }
    to {
      margin-left: 25px;
    }
  }
  @keyframes showRRibbon {
    from {
      right: -30%;
    }
    to {
      right: 25px
    }
  }


  #cake {
    position: relative;
    width: 100%;
    height: 100%;
    background: url('~@assets/img/cake/bg_cake.png') no-repeat;
    background-size: 100% 100%;     
    .t-birron,
    .b-birron {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 50%;
    }
    .t-birron {
      background: url('~@assets/img/cake/t-ribbon.png') no-repeat;
    }
    .b-birron {
      top: 50%;
      background: url('~@assets/img/cake/b-ribbon.png') no-repeat;
    }
    .header {
      overflow: hidden;
      .flag {
        width: 0%;
        height: 124px;
        margin-top: 140px;
        background: url('~@assets/img/cake/flag.png') no-repeat;
        animation: openFlag 2s linear forwards;
      }
      .show-l-ribbon {
        animation: showLRibbon 1s linear 5.5s forwards;
      }
      .l-ribbon {
        width: 304px;
        height: 309px;
        background: url('~@assets/img/cake/r-ribbon.png');
        margin-left: -300px;
        margin-top: -62px;
      }
      .show-r-ribbon {
        animation: showRRibbon 1s linear 5.5s forwards;
      }
      .r-ribbon {
        position: absolute;
        width: 304px;
        height: 309px;
        background: url('~@assets/img/cake/l-ribbon.png');
        right: -30%;
        top: 166px;
      }
      .show-celebration-text {
        animation: roated 2.8s linear 2.8s forwards;
      }
      .celebration-text {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 355px;
        left: 235px;
        width: 661px;
        height: 265px;
        opacity: 0;
        .happy {
          align-self: center;
          display: flex;
          width: 497px;
          height: 152px;
          .h,
          .a,
          .p,
          .y {
            flex: 1;
            margin-right: 21px;
            background-size: 100% 80% !important;
          }
          .h {
           background: url('~@assets/img/cake/H.png') no-repeat;
          }
          .a {
            background: url('~@assets/img/cake/A.png') no-repeat;
          }
          .p {
            background: url('~@assets/img/cake/P.png') no-repeat;
          }
          .y {
            background: url('~@assets/img/cake/Y.png') no-repeat;
          }
        }
        .birthday {
          flex: 1;
          display: flex;
          margin-left: -24px;
          .b,
          .i,
          .r,
          .t,
          .h,
          .d,
          .a,
          .y {
            flex: 1;
            margin-right: 16px;
          }
          .b {
            background: url('~@assets/img/cake/B.png') no-repeat;
          }
          .i {
            background: url('~@assets/img/cake/I.png') no-repeat;
            background-size: 60% 100% !important;
            margin-right: 10px;
          }
          .r {
            background: url('~@assets/img/cake/R.png') no-repeat;
          }
          .t {
            background: url('~@assets/img/cake/T.png') no-repeat;
          }
          .h {
            background: url('~@assets/img/cake/H.png') no-repeat;
          }
          .d {
            background: url('~@assets/img/cake/D.png') no-repeat;
          }
          .a {
            background: url('~@assets/img/cake/A.png') no-repeat;
          }
          .y {
            background: url('~@assets/img/cake/Y.png') no-repeat;
            margin-right: 0;
          }
        }
      }
    }
    .birthday-cake {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: absolute;
      top: 680px;
      left: 261px;
      width: 560px;
      height: 485px;
      .show-fire {
        animation: appear 1.2s linear forwards;  
      }
      .fire {
        width: 28px;
        height: 40px;
        background: url('~@assets/img/cake/fire.png') no-repeat;
        opacity: 0;
      }
      .candle {
        width: 13px;
        height: 72px;
        background: url('~@assets/img/cake/candle.png') no-repeat;
        transform: translateY(-1165px);
        animation: together 1.2s linear 11.2s forwards;
      }
      .oil-one {
        width: 172px;
        height: 48px;
        background: url('~@assets/img/cake/oil-one.png') no-repeat;
        transform: translateY(-1165px);
        animation: together 1.1s linear 10.1s forwards; 
      }
      .cake-one {
        width: 179px;
        height: 104px;
        background: url('~@assets/img/cake/cake-one.png') no-repeat;
        transform: translateY(-1165px);
        animation: together 1.1s linear 9s forwards;
      }
      .oil-two {
        width: 244px;
        height: 48px;
        background: url('~@assets/img/cake/oil-two.png') no-repeat;
        transform: translateY(-1165px);
        animation: together 1.2s linear 7.8s forwards;
      }
      .cake-two {
        width: 257px;
        height: 104px;
        background: url('~@assets/img/cake/cake-two.png') no-repeat;
        transform: translateY(-1165px);
        animation: together 1.2s linear 6.6s forwards;
      }
      .oil-three {
        width: 344px;
        height: 71px;
        background: url('~@assets/img/cake/oil-three.png') no-repeat;
        transform: translateY(-1165px);
        animation: together 1.3s linear 5.3s forwards;
      }
      .cake-three {
        width: 347px;
        height: 118px;
        background: url('~@assets/img/cake/cake-three.png') no-repeat;
        transform: translateY(-1165px);
        animation: together 1.4s linear 3.9s forwards;
      }
      .plate {
        width: 559px;
        height: 35px;
        background: url('~@assets/img/cake/plate.png') no-repeat;
        transform: translateY(-1165px);
        animation: together 1.5s linear 2.4s forwards;
      }
    }
    .footer {
      // 相对定位以其在标准文档流中的位置为参照进行定位
      position: relative;
      top: 840px;
      z-index: 10 ;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 485px;
      padding: 0 25PX;
      .show-ballon {
        animation: showBallon 2s linear 1.5s forwards ;
      }
      .l-ballon {
        width: 208px;
        height: 483px;
        transform: translateY(800px);
        background: url('~@assets/img/cake/l-ballon.png') no-repeat;
      }
      .r-ballon {
        width: 208px;
        height: 483px;
        transform: translateY(800px);
        background: url('~@assets/img/cake/r-ballon.png') no-repeat;
      }
      .show-btn {
        animation: appear 1.2s linear forwards;  
      }
      .light-btn {
        align-self: flex-start;
        width: 501px;
        height: 128px;
        margin-top: 53px;
        background-color: #FF7573;
        font-size: 45px;
        color: #fff;
        border-radius: 64px;
        opacity: 0;
      }
    }
   }
</style>