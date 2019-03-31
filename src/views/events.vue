<template>
  <div class="events-container">
        <vue-header :imgUrl='src' :widthNum="width"></vue-header>
        <section class="meeting clearfix">
            <div class="content-wrap">
                <img src="../assets/images/index-yinhao.png" alt="" class="yinhao">
                <p class="content">{{$t('index.organize_property')}}</p>
                <button class="btn special" @click="$router.push('/contact')">{{$t('index.Contact_Us')}}<img src="../assets/images/shap-right.png" alt="" class="contact-icon"></button>
            </div>
            <img src="../assets/images/page3-rect.png" alt="" class="rect1">
            <p class="Your_Session">{{$t('index.Customizing_Your_Session')}}</p>
            <img src="../assets/images/green-yinhao.png" alt="" class="green-yinhao">
        </section>
        <div v-for="(act, n) in actArr" :key="n">
            <section class="part-one clearfix" :class="(n%3+1) == 1?'part-one': (n%3+1) == 2?'part-two':'part-three'">
                <div :class="'bgc-rect'+(n%3+1)" v-if="n%3+1 != 3"></div>
                <!-- 第一格式  装饰 -->
                <div class="part-one-pic-wrap" v-if="n%3+1 == 1">
                    <span class="right-line"></span>
                    <img :src="act.url_id_arr[0].url" alt="" class="part-one-pic">
                </div>
                <!-- 第二格式  装饰 -->
                <img :src="act.url_id_arr[0].url" alt="" class="part-two-pic" v-if="n%3+1 == 2">
                <!-- 第三格式  装饰 -->
                <div class="img-wrap"  v-if="n%3+1 == 3">
                    <img src="../assets/images/page3-rect-2.png" alt="" class="part-three-rect">
                    <img :src="act.url_id_arr[0].url" alt="" class="part-three-pic">
                    <span class="line"></span>
                </div>
                <!-- 标题 1|2 -->
                <div class="title" v-if="n%3+1 != 3">
                    <h2>{{act.title}}</h2>
                    <span class="part-three-line" v-if="n%3+1 == 3"></span>
                </div>
                <div class="part-content" v-if="n%3+1 != 3">
                    <p>{{act.content}}</p>
                </div>
                <!-- 标题 3 -->
                <div class="content-wrap" v-if="n%3+1 == 3">
                    <div class="title">
                        <h2>{{act.title}}</h2>
                    </div>
                    <div class="part-content">
                        <p>{{act.content}}</p>
                    </div>
                </div>
            </section>
        </div>
        <!-- <section class="part-two">
            <div class="bgc-rect2"></div>
            <img src="../assets/images/page3-2.jpg" alt="" class="part-two-pic">
            <div class="title">
                <h2>标题海外房产咨询2</h2>
                <span></span>
            </div>
            <div class="part-content">
                <p>不论您是用于自住或投资，我们与英国最高品质最大的开发商合作，旨在提供海外房产咨询、高质量的客户服务，并提供我们专业的建议，确保您的投资回报和享有卓越的客户体验。</p>
                <p>不论您是用于自住或投资，我们与英国最高品质最大的开发商合作，旨在提供海外房产咨询、高质量的客户服务，并提供我们专业的建议，确保您的投资回报和享有卓越的客户体验。</p>
            </div>
        </section>
        <section class="part-three">
            <div class="img-wrap">
                <img src="../assets/images/page3-rect-2.png" alt="" class="part-three-rect">
                <img src="../assets/images/page3-3.jpg" alt="" class="part-three-pic">
                <span class="line"></span>
            </div>
            <div class="content-wrap">
                <div class="title">
                    <h2>标题海外房产咨询3</h2>
                </div>
                <div class="part-content">
                    <p>不论您是用于自住或投资，我们与英国最高品质最大的开发商合作，旨在提供海外房产咨询、高质量的客户服务，并提供我们专业的建议，确保您的投资回报和享有卓越的客户体验。</p>
                    <p>不论您是用于自住或投资，我们与英国最高品质最大的开发商合作，旨在提供海外房产咨询、高质量的客户服务，并提供我们专业的建议，确保您的投资回报和享有卓越的客户体验。</p>
                </div>
            </div>
        </section> -->
  </div>
</template>

<script>
import vueHeader from "../components/header"
export default {
  data () {
    return {
        src: require('../assets/images/events.png'),
        width:'8.61rem',
        actArr: []
    }
  },
    created() {
        let lang = localStorage.getItem("language")
        console.log('lang', lang)

        let headersLang = 'zh-CN'
        if(lang) {
            if(lang == 'en_US'){
                headersLang = 'en'
            } else if (lang == 'zh_CT'){
                headersLang = 'zh-CT'
            } 
        }
        console.log('headersLang', headersLang)
        this.$axios.get('https://bondedsite.vmh5.com/front/act?page=1',
            {
                headers:{
                    "Accept-Language": headersLang,
                    "Content-Type":"application/x-www-form-urlencoded"
                }
            })
        .then(function(res){
            let ret = res.data
            if(ret.error == 0) {
                this.actArr = ret.data.data
                console.log(this.actArr)
            }
        }.bind(this))
    },
  components: {
      vueHeader
  }

} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.events-container {
    .meeting {
        width: 100%;
        // height: 26.68rem;
        position: relative;
        height: 100vh;
        background-color: #f0f0f0;
        .content-wrap {
            position: absolute;
            top: 1.3rem;;
            left: 0.6rem;
            width: 80%;
            height: 75%;
            background-color: #fff;
            padding: 0.6rem;
            box-sizing: border-box;
            z-index: 99;
            .yinhao {
                position: absolute;
                top: 12.7%;
                left: 0.6rem;
                width: 1.19rem;
                height: 0.91rem; 
            }
            .content {
                position: absolute;
                top: 27.5%;
                left: 0.6rem;
                width: 89%;
                font-size: 0.44rem;
                color: #333;
                line-height: 0.8rem;
                font-family: "PingFangSC";
            }
            .btn {
                position: absolute;
                top: 66.3%;
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
        .rect1 {
            position: absolute;
            bottom: 13.5%;
            right: 4%;
            width: 4rem;
            height: 11.38rem;
            z-index: 1;
        }
        .Your_Session {
            position: absolute;
            top: 17.4rem;
            width: 14rem;
            z-index: 1;
            transform: rotate(90deg);
            letter-spacing: 1rem;
            margin-left: 6.3rem;
            color: #3dae9e;
            font-size: .44rem;
        }
        .green-yinhao {
            position: absolute;
            bottom: 1.7rem;
            right: 0.6rem;
            width: 1.19rem;
            height: 0.91rem; 
        } 
    }
    .part-one {
        width: 100%;
        height: 25.5rem;
        position: relative;
        .bgc-rect1 {
            margin-top: 3.8rem;
            float:right;
            width: 46%;
            height: 31.8%;
            background-color: #1f202a;
        }
        .part-one-pic-wrap {
            position: absolute;
            top: 17.25%;
            left: 50%;
            transform: translateX(-50%);
            width: 92%;
            height: 27%;
            .part-one-pic {
                width: 100%;
                height: auto;
                z-index: 2;
            }
            .right-line {
                position: absolute;
                top: -3.17rem;
                right: 1.2rem;; 
                width: 1px;
                height: 4rem;
                background-color: #1f202a;
            }
            .left-line {
                position: absolute;
                bottom: -2.73rem;
                left: 1.2rem;; 
                width: 1px;
                height: 4rem;
                background-color: #1f202a; 
            }
        } 
 
        .title {
            margin: 14.7rem 0 0 1.2rem;;
            h2 {
                font-size: 0.54rem;
                height: 1.4rem;
                line-height: .9rem;
                color: #333;
                font-family: "PingFangSC";
                padding-bottom: .4rem;

            }     
            span {
                display: inline-block;
                width: 0.9rem;
                height: 0.1rem;
                background-color: #3dae9e;
             } 
        }
        .part-content {
            margin: 0.85rem 0 0 1.2rem;
            width: 82%;
            p {
                margin-bottom: 0.4rem;
                line-height: 0.8rem;
                color: #333;
                font-family: "PingFangSC";
                font-size:0.44rem;
                font-family: "PingFangSC";

            }
        }

    }
    .part-two {
        width: 100%;
        height: 29rem;
        position: relative;
        .bgc-rect2 {
            width: 50%;
            height: 40%;
            background-color: #1f202a;
        }
        .part-two-pic {
            position: absolute;
            top: 1.8rem;
            left: 0;
            width: 100%;
            height: 32%;
        }
        .title {
            margin: 1.78rem 0 0 1.2rem;;
            h2 {
                font-size: 0.54rem;
                height: 1.1rem;
                color: #333;
                font-family: "PingFangSC";
            }     
            span {
                display: inline-block;
                width: 0.9rem;
                height: 0.1rem;
                background-color: #3dae9e;
             } 
        }
        .part-content {
            margin: 0.85rem 0 0 1.2rem;
            width: 82%;
            p {
                margin-bottom: 0.4rem;
                line-height: 0.8rem;
                color: #333;
                font-family: "PingFangSC";
                font-size:0.44rem;
            }
        }
    }
    .part-three {
        width: 100%;
        height: 25.48rem;
        position: relative;
        .img-wrap {
            position: absolute;
            right: 0;
            top: 0;
            width: 96%;
            height: 27%;
            .part-three-pic {
                margin-left: 0.6rem;
                width: 13.8rem;
                height: 100%;
                margin-top: -5.2rem;
            }  
            .part-three-rect {
                width: 5.2rem;
                height: 6.4rem;
            }  
            .line {
                position: absolute;
                right: 1.8rem;
                top: -2.6rem;;
                width: 1px;
                height: 4rem;
                background-color: #1f202a;
            }    
        }
        .content-wrap {
            float: right;
            width: 13.8rem;
            height: 63.2%;
            margin-top: 8.1rem;
            background-color: #f0f0f0;
            .title {
                margin: 1.6rem 0 0 0.6rem;;
            h2 {
                font-size: 0.54rem;
                height: 1.1rem;
                color: #333;
                font-family: "PingFangSC";
            }     
            span {
                display: inline-block;
                width: 0.9rem;
                height: 0.1rem;
                background-color: #3dae9e;
                }  
            }
            .part-content {
                margin: 0.85rem 0 0 0.6rem;
                width: 82%;
                p {
                    margin-bottom: 0.4rem;
                    line-height: 0.8rem;
                    color: #333;
                    font-family: "PingFangSC";
                    font-size:0.44rem;
                }
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
