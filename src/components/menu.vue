<template>
  <div class="menu-container">
    <div class="nar" @click="flag=!flag">
      <span></span>
      <span></span>
      <span></span>
      <transition appear>
        <ul class="list" v-show="flag" >
          <li @click.stop="jump('index')">{{$t('index.index')}}</li>
          <li @click.stop="jump('aboutus')">{{$t('index.About_Us')}}</li>
          <li @click.stop="jump('project')">{{$t('index.Product_Service')}}</li>
          <li @click.stop="jump('events')">{{$t('index.Latest_News')}}</li>
          <li @click.stop="jump('contact')">{{$t('index.Contact_Us')}}</li>
        </ul>      
      </transition>

    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      flag: false
    }
  },
  methods: {
    jump(url){
      this.$router.push({name: url})
      this.flag = false
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  .nar {
    position: relative;
      width: 0.8rem;
      height: 0.6rem;
      display:flex;
      flex-wrap: wrap;
      align-content: space-between;
      span {
          width: 100%;
          border-bottom: 2px solid #fff;
      }
  }
  .list {
    position: absolute;
    top: 1.2rem;
    right: 0rem;
    width: 5rem;
    background-color:rgba(0,0,0,.6);
    border-radius: 0.09rem;
    z-index: 999;
    li {
      width: 4.4rem;
      height: 1.58rem;
      max-width: 187px;
      max-height: 60px;
      border-bottom: 1px solid rgba(255,255,255,.2);
      text-indent: 0.62rem;
      font-size: 0.4rem;
      color: #fff;
      line-height: 1.58rem;
      font-family: "PingFangSC";
    }
  }
  .v-enter,
  .v-leave-to {
    width: 0;
    opacity: 0;
  }
  .v-enter-active,
  .v-leave-active {
    transition: all .5s ease;
  }

</style>
