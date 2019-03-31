<template>
  <div id="app">
    <transition>
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
      let localLang = localStorage.getItem("language")
      if(localLang == 'en_US') {
          document.body.classList.add('english')
      }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
.v-enter,
.v-leave-to {
  height: 0;
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
}
</style>
<style lang="less">
.english {
  * {
    letter-spacing: 0!important;
  }
  .about-part2-content,  
  .service1-content,
  .content-wrap
  {
    text-align: justify!important;
  }
  .slogan-content {
    width: 7rem!important;
    text-align: justify!important;

  }
  .index-container .slogan2 h1 {
    margin-top: 4rem!important;
    height: 5rem!important;
  }
  .about-contain, .introduction {
    height: 30rem!important;
    text-align: justify!important;
  }
  .introduction {
    height: 32rem!important;
  }
  .service1-title {
    width: 4.6rem!important;
    line-height: .9rem!important;
  }
  .service1-content {
    width: 13rem!important;
  }
  .index-container .service2 .item-list {
    padding-top: 7.4rem!important;
  }
  .item-list li {
    height: auto!important;
  }
  .service3-content-wrap h2 {
    width: 9rem!important;
    margin: 7.9rem 0 0 4rem!important;
  }
  .contact-content {
    margin-top: 1rem!important;
    
  }
  .contact-title-wrap button, .range .btn {
      width: 6rem!important;
  }
  .contactInfo {
    margin-top: 2rem!important;
  }
  .chuangkou {
    width: 90%!important;
    line-height: .8rem!important;
  }
  .list li {
    width: 100%!important;
    white-space:nowrap!important;
  }
  .content-wrap {
    padding: 0.87rem 0.6rem 0.7rem!important;

  }
  .house .contact-title-wrap {
    width: 7.9rem!important;
  }
  .tax .title, .house .title {
    width: 8.6rem!important;
  }
  .title h2 {
    margin-left: .4rem!important;
  }
  .loan .title {
    width: 9rem!important;
  }
  .special {
    top: 76.3%!important;
  }
  .radiobox label {
    width: 6.2rem!important;
  }
  .Your_Session {
    letter-spacing: .15rem!important;
    word-spacing: .15rem!important;
  }
}
</style>

