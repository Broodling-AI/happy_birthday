<template>
  <div id='wish'>
    <div class="container">
      <div class="cxq"></div>
      <p class="happy-birthday">生日快乐！</p>
    </div>
    <div class="cirle1" v-if="show"></div>
    <div class="cirle2" v-if="show"></div>
    <div class="cirle3" v-if="show"></div>
    <div class="cirle4" v-if="show"></div>
    <div class="cirle5" v-if="show"></div> 
  </div>
</template>

<script>
export default {
  name: 'Wish',
  data() {
    return {
      show: false
    }
  },
  created() {
    let _this = this
    setTimeout(() => {
      _this.show = true
    },5400)
  }
}
</script>

<style lang="less">
  @keyframes appear1{
    from {
      opacity: 0;
      transform: rotateZ(0deg);
    }
    to {
      opacity: 1;
      transform: rotateZ(360deg);
    }
  }
  @keyframes appear2{
    from {
      opacity: 0;
      transform: rotateY(0deg);
    }
    to {
      opacity: 1;
      transform: rotateY(-360deg);
    }
  }
  @keyframes expaand {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    50% {
      opacity: 1;
      transform: scale(2);
    }
    100% {
      opacity: 1;
       transform: scale(1);
    }
  }
  @keyframes scale1 {
    from {
      transform: translateY(-50%) scale(0);
      opacity: 0;
    }
    to {
      transform: translateY(-50%) scale(1);
      opacity: 1;
    }
  }
  @keyframes scale2 {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes together {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  #wish {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: #F1EAFB;
    .container {
      position: relative;
      height: 100%;
      z-index: 10;
      .cxq {
        position: relative;
        width: 550px;
        height: 550px;
        margin: 540px auto 77px;
        background: url('~@assets/img/wish/person_img.png');
        opacity: 0;
        animation: appear1 1.7s linear forwards;
        &::before {
          position: absolute;
          // left: 157px;
          // top: -62px;
          left: 100px;
          top: -155px;
          opacity: 0;
          animation: appear2 .8s linear 2S forwards;
          content: '';
          width: 170px;
          height: 200px;
          background: url('~@assets/img/wish/hat.png');
        }
      }
      .happy-birthday {
        text-align: center;
        font-size: 100px;
        font-weight: 700;
        color: #8c68d8;
        opacity: 0;
        animation: expaand 2.2s linear 3.2s forwards;
      }
    }
   
    div[class^='cirle'] {
      position: absolute;
    }
    .cirle1 {
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1080px;
      height: 1080px;
      background-color: #d4c6f3;
      border-radius: 540px;
      animation: scale1 5.8s linear infinite alternate;
    }
    .cirle2 {
      top: 0%;
      width: 750px;
      height: 750px;
      background-color:  #F5DEB3;
      border-radius: 375px;
      animation: scale2  2s linear  infinite alternate
    }
    .cirle3 {
      bottom: 0;
      width: 750px;
      height: 750px;
      background-color:#E5D8F6;
      border-radius: 375px;
      animation: together ease 2s .4s infinite alternate
    }
    .cirle4 {
      left: 48%;
      top: 15%;
      width: 500px;
      height: 500px;
      background-color: #99D8AE;
      border-radius: 250px;
      animation: together  2s linear .6s infinite alternate
    }
    .cirle5 {
      left: 40%;
      top: 55%;
      width: 600px;
      height: 600px;
      background-color: #74a8ec ;
      border-radius: 300px;
      animation: together ease-in-out 2s 1s infinite alternate
    }
  }
</style>