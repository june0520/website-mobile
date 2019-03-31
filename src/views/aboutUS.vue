<template>
    <div class="header-container">
        <vue-header :imgUrl='src'></vue-header>
        <section class="introduction clearfix">
          <div class="f0"></div>
          <div class="bgc-black"></div>
          <div class="sanjiao">
            <img src="../assets/images/green-shape.png" alt="">
            <img src="../assets/images/green-shape.png" alt="">
            <img src="../assets/images/green-shape.png" alt="">
          </div>
          <span class="greenline"></span>
          <img src="../assets/images/icon-add.png" alt="" class="icon-add">
          <img src="../assets/images/page1-2.jpg" alt="" class="page1-img">
          <p class="introduction-content">{{$t('index.in_2003')}}</p>
        </section>
        <section class="range">
          <div class="content-wrap">
            <p class="range-content">
              {{$t('index.mainly_service')}}</p>
            <p class="range-content" >{{$t('index.Bj_contact_windows')}}<br>{{$t('index.Head_office')}}</p>
            <img src="../assets/images/icon-bigshape.png" alt="" class="range-icon">
          </div>
          <p class="contact">{{$t('index.need_further')}}</p>
          <button class="btn" @click="$router.push('/contact')">{{$t('index.I_need_consultations')}}<img src="../assets/images/shap-right.png" alt="" class="contact-icon"></button>
        </section>

  </div>
</template>

<script>
import vueHeader from "../components/header"
export default {
  data () {
    return {
        src: require('../assets/images/about.png')
    }
  },
  methods: {
  },
  components: {
      vueHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.introduction {
  width: 100%;
  height: 26.68rem;
  position: relative;
  // height: 100vh;
  .f0 {
    height: 100%;
    width: 76.7%;
    background-color: #f0f0f0;
  }
  .bgc-black {
    position: absolute;
    top:3.68rem;
    right: 0;
    width: 50%;
    height: 9rem;
    background-color: #1f202a;
  }
  .sanjiao {
    position: absolute;
    top:1.46rem;
    left: 0.6rem;
    width: 0.28rem;
    height: 1.16rem;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    img {
      width: 0.28rem;
      height: 0.25rem;
    }
  }
  .greenline {
    position: absolute;
    top: 0;
    right: 1.2rem;
    height: 4.9rem;
    border-right: 1px solid #2eaf9e;
  }
  .icon-add {
    position: absolute;
    top: 3.96rem;
    right: 0.33rem;
    width: 0.6rem;
    height: 0.6rem;
  }
  .page1-img {
    position: absolute;
    top: 4.9rem;
    left: 50%;
    margin-left: -6.9rem;
    width: 13.8rem;
    height: 9rem;
  }
  .introduction-content {
    position: absolute;
    top: 16rem;
    left: 0.6rem;
    width: 10rem;
    font-size: .4rem;
    color: #333;
    line-height: .8rem;
    font-family: "PingFangSC";
  }
}
.range {
  width: 100%;
  height: 26.68rem;
  position: relative;
  // height: 100vh;
  background: url(../assets/images/page1-3-1.jpg) no-repeat;
  background-size: cover;
  .content-wrap {
    position: absolute;
    top:  1.2rem;
    right: 0.6rem;
    width: 7.9rem;
    height: 11rem;
    background-color: rgba(0,0,0,.5);
    padding: 0.87rem 0.6rem 0 0.7rem;
    box-sizing: border-box;
    p {
      margin-top: 0.4rem;
      font-size: 0.46rem;
      line-height: 0.8rem;
      color: #fff;
    }
    .range-icon {
      position: absolute;
      top: 0;
      right:1.4rem;
      width: 3.86rem;
      height: 1.67rem;
     }
  }
  .red-car-rect {
    position: absolute;
    top: 8.08rem;
    left:1.8rem;
    width: 4rem;
    height: 11.38rem;
  }
  .contact {
    position: absolute;
    bottom: 4.25rem;
    left: 0.6rem;
    line-height: 0.8rem;
    font-size: 0.44rem;
    color: #fff;
    padding-right: 1rem;
  }
  .btn {
    position: absolute;
    bottom: 2.48rem;
    left:0.6rem;
    width: 3.55rem;
    height: 0.88rem;
    background-color: #3dae9e;
    border: 0;
    padding: 0;
    font-size: .36rem;
    color: #fff;
    text-align: left;
    text-indent: 0.68rem;
    letter-spacing: 1px;
    line-height: .88rem;
    .contact-icon {
        width: 0.18rem;
        height: 0.22rem;
        margin-left: 0.1rem;
        vertical-align: middle;
    }

  }

}
.clearfix:before,.clearfix:after {
    content: '';
    display: table;
}
.clearfix:after {
    clear: both;
}

</style>

 