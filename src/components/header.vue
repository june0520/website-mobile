<template>
    <div class="header-container">
        <div class="logo">
            <h1>
                <a href="/index"></a>
            </h1>
        </div>
        <vueMenu class="vue-menu"></vueMenu>
        <img :src="imgUrl" alt="" class="title" :style="{'width': widthNum ? widthNum: '11.45rem'}">
        <p class='info'>
            <span class="name">{{$t('index.About_Us')}}</span>
            <span class="circle"></span>
            <span class="slogan">{{$t('index.Your_professional')}}</span>
        </p>
        <img src="../assets/images/mouse.png" alt="" class="mouse">
  </div>
</template>

<script>
import vueMenu from "./menu.vue"
export default {
  data () {
    return {
      flag: true
    }
  },
  methods: {
  },
  components: {
    vueMenu
  },
  props: ['imgUrl' ,"widthNum"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header-container {
    position: relative;
    width: 100%;
    // height: 26.68rem;
    height: 100vh;
    background: url(../assets/images/page1-1.jpg) no-repeat;
    background-size: cover;
    .logo a {
        display: inline-block;
        margin: .9rem 0 0 0.6rem;
        width: 7rem;
        height: 2rem;
        // background: url(../assets/images/logo.png) no-repeat;
        background-size: contain;
    }
    .vue-menu {
        position: absolute;
        top: 1.8rem;
        right: 1.2rem;
    }
    .title {
        display: block;
        margin: 5.6rem auto 0;
        width: 11.45rem;
        height: 1.63rem;
    }
    .info {
        margin: 1.32rem auto 0;
        width: 10rem;
        font-size:0;
        .name {
            font-size: 0.58rem;
            color: #fff;
        }
        .circle {
            display: inline-block;
            margin: 0 0.4rem 0 0.3rem;
            width: 0.14rem;
            height: 0.14rem;
            border-radius: 50%;
            background-color: #2eaf9e;
        }
        .slogan {
            font-size: 0.44rem;
            color: #939496;
        }
    }
    .mouse {
        position: absolute;
        bottom: .57rem;
        left: 50%;
        margin-left: -0.5rem;
        width: 1rem;
        height: 1.6rem;
    }
}
.width {
    width: 8.61rem !important;
}

</style>
