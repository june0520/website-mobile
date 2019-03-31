<template>
  <div class="project-container">
        <vue-header :imgUrl='src'></vue-header>
        <section class="house">
            <div class="title">
                <img src="../assets/images/-01.png" alt="" class="num">
                <h2>{{$t('index.Find_a_Property')}}</h2>
                <img src="../assets/images/icon-right2.png" alt="" class="icon-right">
            </div>
            <div class="content-wrap clearfix">
                <div class="content">
                    <img src="../assets/images/green-yinhao.png" alt="" class="icon-green">
                    <p class="text">{{$t('index.Whether_you')}}</p>
                </div>
                <div class="greenline"></div>
            </div>
        </section>
        <section class="tax">
            <div class="title clearfix">
                <img src="../assets/images/-02.png" alt="" class="num">
                <h2>{{$t('index.Tax_Return_Service')}}</h2>
                <img src="../assets/images/icon-right2.png" alt="" class="icon-right">
            </div>
            <ul class="content">
                <li><p>{{$t('index.will_1')}}</p></li>
                <li><p>{{$t('index.will_2')}}</p></li>
                <li><p>{{$t('index.will_3')}}</p></li>
                <li><p>{{$t('index.will_4')}}</p></li>
            </ul>

        </section>
        <section class="loan clearfix">
            <div class="rect">
                <img src="../assets/images/page2-rect.png" alt="">
            </div>
            <div class="title">
                <img src="../assets/images/-03.png" alt="" class="num">
                <h2>{{$t('index.Mortgage_Intermediary_Service')}}</h2>
                <img src="../assets/images/icon-right2.png" alt="" class="icon-right">
            </div>
            <div class="rect-bgc"></div>
            <div class="content">
                <p>{{$t('index.We_specialize')}}</p>
                        <img src="..//assets/images/icon-white.png" alt="" class="icon-white">
            </div>

        </section>
  </div>
</template>

<script>
import vueHeader from "../components/header"
export default {
  data () {
    return {
        src: require('../assets/images/project.png')
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
.project-container {
    .house {
        width: 100%;
        // height: 26.68rem;
        position: relative;
        height: 100vh;
        overflow: hidden;
        .title {
            position: relative;
            margin: 1.6rem 0 0 0.6rem;
            width: 6.9rem;
            height: 2rem;
            border-bottom: 1px solid #2eaf9e;
            .num {
                width: 1.64rem;
                height: 0.75rem;
            }
            h2 {
                display: inline-block;
                margin-left: 1.76rem;
                color: #333;
                font-size: .54rem;
                font-weight: 700;
                font-family: "PingFangSC";
            }
            .icon-right {
                position:absolute;
                bottom: 0;;
                right: 0;;
                width: 0.39rem;
                height: 0.39rem;
            }
        }
        .content-wrap {
            margin-top: 1.01rem;
            width: 92%;
            height: 82.4%;
            background: url(../assets/images/page2-1.jpg) no-repeat;
            background-size: cover;
            overflow: visible;
            position: relative;
            .content {
                margin: 1.2rem 0 0 24.64%;
                padding: 3.16rem 0.6rem 0 0.75rem;
                box-sizing: border-box;
                width: 75.3%;
                height: 87.2%;
                background-color: rgba(0,0,0,.6);
                .icon-green {
                    width: 1.2rem;
                    height: 0.9rem;
                }
                .text {
                    margin-top: 3.16rem;
                    line-height: 0.8rem;
                    font-size: 0.42rem;
                    color: #fff;
                    font-family: "PingFangSC";

                }
            }
            .greenline {
                position: absolute;
                bottom: 0;
                right: -0.58rem;
                width: 0.6rem;
                height: 97.4%;
                background-color:#2eaf9e;
            }
        }
    }
    .tax {
        width: 100%;
        height: 22.2rem;
        position: relative;
        overflow: hidden;
        .title {
            float:right;
            position: relative;
            margin: 1.6rem 0.6rem 0 0;
            width: 6.9rem;
            height: 2rem;
            border-bottom: 1px solid #2eaf9e;
            .num {
                width: 1.87rem;
                height: 0.75rem;
            }
            h2 {
                display: inline-block;
                margin-left: 1.53rem;
                color: #333;
                font-size: .54rem;
                font-weight: 700;
                font-family: "PingFangSC";

            }
            .icon-right {
                position:absolute;
                bottom: 0;;
                right: 0;;
                width: 0.39rem;
                height: 0.39rem;
            }
        }
        .content {
            float:right;
            margin-top: 1.1rem;
            width: 96%;
            height: 78.8%;
            background: url(../assets/images/page2-2.jpg) no-repeat;
            background-size: cover;
            padding:21% 0.9rem 0 8.2%;
            box-sizing: border-box;

            li {
                margin-top: 0.6rem;
                padding-left: 0.8rem;
                background: url(../assets/images/icon-green-right.png)  0px 6px no-repeat;
                background-size: 0.24rem 0.28rem;
                p {
                    font-size: 0.44rem;;
                    color: #fff;
                    line-height: 0.8rem;
                }
            }
        }
    }
    .loan {
        width: 100%;
        height: 31.14rem;
        position: relative;
        
        .rect {
            width: 6rem;
            height: 100%;
            background: #f0f0f0;
            position: absolute;
            top: 0;
            right: 0;
            img {
                width: 1rem;
                height: 6.48rem;
            }
        } 
        .title {
            position: relative;
            margin: 6rem 0 0 0.6rem;
            width: 6.9rem;
            height: 2rem;
            border-bottom: 1px solid #2eaf9e;
            .num {
                width: 1.88rem;
                height: 0.75rem;
            }
            h2 {
                display: inline-block;
                margin-left: 1.54rem;
                color: #333;
                font-size: .54rem;
                font-weight: 700;
                font-family: "PingFangSC";
            }
            .icon-right {
                position:absolute;
                bottom: 0;;
                right: 0;;
                width: 0.39rem;  
                height: 0.39rem;
            }
        }
        .rect-bgc {
            margin-top: 2.06rem;
            width: 60%;
            height: 34%;
            background-color: #1f202a;
        }
        .content {
            position: absolute;
            bottom: 0.8rem;
            left: 50%;
            transform: translateX(-50%);
            width: 13.8rem;
            height: 19.61rem;
            background: url(../assets/images/page2-3.jpg) no-repeat;
            background-size: cover;
            padding: 0 0.6rem;
            box-sizing: border-box;
            p {
                margin-top: 12.2rem;
                font-size: 0.44rem;
                color: #fff;
                line-height: 0.8rem;
            }
            .icon-white {
                position: absolute;
                bottom: 0.55rem;
                right: 0.6rem;
                height: 1.77rem;
                width: 1.77rem;
            }

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
