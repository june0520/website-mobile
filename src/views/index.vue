<template>
    <div class="index-container">
        <section class="section1">
            <div class="logo">
                <h1>
                    <a href="/index"></a>
                </h1>
            </div>
            <div class="language">
                <!-- <span>简体中文</span>
                <img src="../assets/images/icon-bottom.png" alt=""> -->
                <select name="" id="" v-model="lang" @change="changeLang">
                    <option value="zh_CN">{{$t('index.Traditional')}}</option>
                    <!-- <option value="zh_CT">{{$t('index.Mandarin')}}</option> -->
                    <!-- <option value="en_US">English</option> -->
                </select>
            </div>
            <vue-menu class='nar'></vue-menu>
            <div :class="flag?'slogan1':'slogan2'" @click="toNextPage">
                <h1 v-text="flag?$t('index.In_the_name_of_trust'):$t('index.Warmly_welcome')"></h1>
                <div class="greenline"></div>
                <h2 v-text="flag?$t('index.Your_professional'):$t('index.Sign_up')"> </h2>
            </div>
            <p class="slogan-content" :class="flag?'':'style2'" v-html="flag?$t('index.overseas_property'):$t('index.buying_processes')"></p>
            <div class="arrow">
                <div class="left-arrow" @click="flag=!flag">
                    <img :src="flag?require('../assets/images/icon-right.png'):require('../assets/images/icon-left-no.png')" alt="" >
                </div>
                <div class="right-arrow" @click="flag=!flag">
                    <img :src="flag?require('../assets/images/icon-left-no.png'):require('../assets/images/icon-right.png')" alt="">
                </div>
            </div>
            <div class="sign" @click="toNextPage">
                <a>
                    <img src="../assets/images/buttom.png" alt="">
                </a>
                <!-- <span class="sign-up">报名</span>
                <span class="sign-line"></span> -->
            </div>
            <div class="page-wrap">
                <img class="page" src="../assets/images/01.png" v-show='flag'>
                <img class="page" src="../assets/images/02.png" v-show='!flag'>
                <div class="page-count">
                    <span class="ball"></span>
                    <span class="count">/2</span>
                </div>
              
            </div>
            <div class="mouse">
                <img src="../assets/images/mouse.png" alt="">
            </div>

        </section>
        <section class="about-contain">
            <div class="about-top">
                <img src="../assets/images/index-yinhao.png" alt="" class="about-yinhao">
                <img src="../assets/images/icon-nav.png" alt="" class="about-menu">
            </div>
            <p class="about-title"><span></span>{{$t('index.About_Us')}}</p>
            <img src="../assets/images/index-1-01.jpg" alt="" class="about-pic">
            <img src="../assets/images/rect-1.png" alt="" class="about-rect">
            <p class="about-content">{{$t('index.in_2003')}}
            </p>
            <a href="#/aboutus">
                <img src="../assets/images/more.png" alt="" class="readmore">
            </a>

        </section>
        <section class="about-part2">
            <div class="about-balck"></div>
            <img src="../assets/images/index-1-02.jpg" alt="" class="about-part2-pic">
            <div class="about-part2-content">
                <p >{{$t('index.mainly_service')}}
                </p>
                <p>{{$t('index.contact_windows')}}: <br>
                {{$t('index.addr')}}</p>
             
            </div>

        </section>
        <section class="service1">
            <div class="service1-title">
                <div class="serverce1-line"></div>
                <p>{{$t('index.Our_Product_and_Service')}}</p>
                <div class="sanjiao">
                    <img src="../assets/images/Shape 155.png" alt="">
                    <img src="../assets/images/Shape 155.png" alt="">
                    <img src="../assets/images/Shape 155.png" alt="">
                </div>
            </div>
            <img src="../assets/images/rect-2.png" alt="" class="service1-rect">
            <div class="service1-content-wrap">
                <h2>
                    {{$t('index.Find_a_Property')}}
                </h2>
                <p class="service1-content">{{$t('index.Whether_you')}}</p>

            </div>

        </section>
        <section class="service2">
               <div class="service2-title">
                    <h2>
                        {{$t('index.Tax_Return_Service')}}
                    </h2>
                    <p class="service2-content">{{$t('index.We_will')}}:
                    </p>
               </div>
               <ul class="item-list">
                    <li>
                        <span class="baoshuiCircle">01</span>
                        <p class="baoshuiEach">{{$t('index.will_1')}}</p>
                    </li>
                    <li>
                        <span class="baoshuiCircle">02</span>
                        <p class="baoshuiEach">{{$t('index.will_2')}}</p>
                    </li>
                    <li>
                        <span class="baoshuiCircle">03</span>
                        <p class="baoshuiEach">{{$t('index.will_3')}}</p>
                    </li>
                    <li>
                        <span class="baoshuiCircle">04</span>
                        <p class="baoshuiEach">{{$t('index.will_4')}}</p>
                    </li>
               </ul>
        </section>
        <section class="service3">
            <div class="background"></div>
            <img src="../assets/images/rect-3.png" alt="" class="service3-rect1">
            <div class="service3-content-wrap">
                <h2>
                    {{$t('index.Mortgage_Intermediary_Service')}}
                </h2>
                <p class="service3-content">{{$t('index.We_specialize')}}</p>
            </div>
            <img src="../assets/images/rect-4.png" alt="" class="service3-rect2">
        </section>
        <section class="contact">
            <div class="contact-title-wrap">
                <p class="contact-line"></p>
                <h2>{{$t('index.Mortgage_Intermediary_Service')}}</h2>
                <p class="contact-content">{{$t('index.We_specialize')}}</p>
                    <button @click="$router.push('/contact')">{{$t('index.I_need_consultations')}}<img src="../assets/images/shap-right.png" alt="" class="contact-icon"></button>
            </div>
            <div class="contactInfo">
                <p class="chuangkou">{{$t('index.Bj_contact_windows')}}</p>
                <ul class="contactInfoList">
                    <li><span></span>{{$t('index.Head_office')}}</li>
                    <li><span></span>+86 10010</li>
                    <li><span></span></li>
                </ul>
            </div>

        </section>
    </div>
</template>
<script> 
import vueMenu from "../components/menu.vue"
export default {
    data(){
        return {
            flag: true,
            lang: 'zh_CN'
        }
    },
    created() {
        let localLang = localStorage.getItem("language")
        this.lang = localLang?localLang: 'zh_CN'
        if(localLang == 'en_US') {
            document.body.classList.add('english')
        }
    },
    methods: {
        toNextPage() {
            let url = this.flag?'/contact': '/events'
            console.log('flag', this.flag)
            this.$router.push(url)
        },
        changeLang() {
            this.$i18n.locale = this.lang
            localStorage.setItem("language", this.lang)
            if(this.lang == 'en_US') {
                document.body.classList.add('english')
            } else {
                document.body.classList.remove('english')
            }
        }
    },
    components: {
        vueMenu
    }
    
}
</script>
<style lang="less" scoped>
.index-container {
    .section1 {
        position: relative;
        width: 100%;
        // height: 26.68rem;
        height: 100vh;
        padding:  0 .6rem;
        box-sizing: border-box;
        background: url(../assets/images/background1.jpg) no-repeat;
        background-size: cover;
        .logo a {
            display: inline-block;
            margin-top: .9rem;
            width: 7rem;
            height: 2rem;
            // background: url(../assets/images/logo.png) no-repeat;
            background-size: contain;
            }
        .language { 
            position: absolute;
            top: 1.66rem;
            right: 2.42rem;
            width: 3rem;
            height: 0.9rem;
            border: 1px solid #3dae9e;
            border-radius: .44rem;
            line-height: .88rem;
            text-align: center;
            background: none;
            overflow: hidden;
            select {
                display: inline-block;
                height: 0.9rem;
                font-size: 0.36rem;
                color: #3dae9e;
                background: #fff;
                border: none;
                line-height: .09rem;
                text-align: center;
                outline: none;
                width: 100%;
            }
            img {
                margin-left: .14rem;
                width: .28rem;
                height: 0.17rem;
                }
            }
        }
        .nar {
            position: absolute;
            right: 1.2rem;
            top: 1.8rem;
        }
        .slogan1 {
            margin-top: .9rem;
            width: 10.9rem;
            height: 18rem;
            // height: 67.5%;
            // width: 73%;
            max-height: 700px;
            background: url(../assets/images/index-1.jpg) no-repeat;
            background-size: cover;
            overflow: hidden;
            h1 {
                margin: 4.74rem 0 0 .6rem;
                height: 1.6rem;
                font-size:1.2rem;
                letter-spacing: .39rem;
                font-family: "PingFangSC";
                color: #fff;
            }
            .greenline {
                margin-left: .6rem;
                width: 0.8rem;
                height: 0.12rem;
                background-color: #2eaf9e;
            }
            h2 {
                margin: .9rem 0 0 .6rem;
                font-size:.6rem;
                letter-spacing: 2.5px;
                font-family: "PingFangSC";
                color: #fff;
            }
        } 
        .slogan2 {
            margin-top: .9rem;
            width: 10.9rem;
            height: 18rem;
            // height: 67.5%;
            // width: 73%;
            max-height: 700px;
            background: url(../assets/images/index-2.jpg) no-repeat;
            background-size: cover;
            overflow: hidden;
            h1 {
                margin: 4.74rem 0 0 .6rem;
                height: 1.6rem;
                font-size:1.16rem;
                letter-spacing: .39rem;
                font-family: "PingFangSC";
                color: #fff;
            }
            .greenline {
                margin-left: .6rem;
                width: 0.8rem;
                height: 0.12rem;
                background-color: #2eaf9e;
            }
            h2 {
                margin: .9rem 0 0 .6rem;
                font-size:.6rem;
                letter-spacing: 2.5px;
                font-family: "PingFangSC";
                color: #fff;
            }
        } 
        .slogan-content {
            position: absolute;
            // bottom: 5.72rem;
            bottom: 21%;
            right:  .6rem;
            text-align:right;
            font-size: 0.38rem;
            font-family: "PingFangSC";
            color: #c0c0c0;
            line-height: 1.75;
            width: 4.4rem;
            text-indent: 1rem;
        }
        .slogan-content.style2 {
            width: 7.4rem;
            text-indent: 2rem;
        }
        .arrow {
            position: absolute;
            // top: 11.74rem;
            top: 47%;
            right: 1.2rem;
            display: flex;
            flex-wrap: wrap;
            align-content: space-between;
            width: 1.65rem;
            height: 4.1rem;
            .left-arrow,
            .right-arrow {
                width: 1.65rem;
                height: 1.65rem;
                background-color: rgba(255,255,255,.1);
                border-radius: 50%;
                line-height: 1.65rem;
                text-align: center;
                img {
                    width: 0.24rem;
                    height: .42rem;
                    vertical-align: middle;
                }
            }
        }
        .sign{
            margin-top: -1.27rem;
            img {
                width: 4.12rem;
                height: 2.54rem;
                vertical-align: middle;
                margin-left: -0.2rem;
            }
            .sign-up {
                font-size: 0.4rem;
                color: #fff;
                letter-spacing: 2px;
                font-family: "PingFangSC";
            }
            .sign-line {
                display: inline-block;
                width: 1.6rem;
                max-width: 70px;
                height: 1.5rem;
                border-bottom: 1px solid #fff;
            }
        }
        .page-wrap {
            position: absolute;
            // bottom: 2.1rem;
            bottom: 7.8%;
            right: 2.84rem;
            height: 1.58rem;
        }
        .page {
            font-size: 1.6rem;
            color: #2faf9f;
            width: 2.28rem;
            height: 1.58rem;
        }
        .page-count {
            position: absolute;
            bottom: 0rem;
            left: 2.5rem;
            height: 0.5rem;
            width: 1.4rem;
            font-size: 0;
            .ball {
                display: inline-block;
                width: 0.5rem;
                height: 0.5rem;
                background-color: #2eaf9e;
                border-radius: 50%;
                margin-right: 0.12rem;
            }
            .count {
                font-size: 0.54rem;
                color: #fff;
                letter-spacing: 2px;
            }

        }
        .mouse img {
            position: absolute;
            // bottom: .58rem;
            bottom: 2.2%;
            left: 50%;
            margin-left: -0.5rem;
            width: 1rem;
            height: 1.6rem;
        }

    .about-contain {
        position: relative;
        padding: 0 0.6rem 0 1.2rem;
        width: 100%;
        height: 26.68rem;
        // height: 100vh;
        box-sizing: border-box;
        .about-top {
            overflow: hidden;
        }
        .about-yinhao {
            position: absolute;
            top: 1.16rem;
            left: .6rem;
            width: 1.19rem;
            height: 0.91rem; 
        }
        .about-menu {
            position: absolute;
            top: 1rem;
            right: 1rem;
            width: 1.2rem;
            height: 1.2rem;
        }
        .about-title {
            margin-top: 4.1rem;
            color: #333;
            font-size: .64rem;
            font-weight: 700;
            letter-spacing: 2px;
            font-family: "PingFangSC";

            span {
                display: inline-block;
                margin-right: 0.36rem;
                width: 0.6rem;
                height: 0.12rem;
                background-color: #333;
            }
        }
        .about-pic {
            margin-top: .66rem;
            width: 13.2rem;
            height: 9rem;
        }
        .about-rect {
            position: absolute;
            top: 3.18rem;
            left: .6rem;
            width: 5.2rem;
            height: 6.4rem;
        }
        .about-content {
            margin-top: 1.56rem;
            font-size: .48rem;
            font-family: "Adobe Heiti Std";
            color: #333;
            line-height: .8rem;
            letter-spacing: 1px;
        }
        .readmore {
            margin-top: 1.3rem;
            width: 3.5rem;
            height: 0.88rem;
        }
    }
    .about-part2 {
        position: relative;
        width: 100%;
        height: 26.68rem;
        // height: 100vh;
        padding: 0 0.6rem;
        box-sizing: border-box;
        overflow: hidden;
        .about-balck {
            float: right;
            background-color: #1f202a; 
            width: 6.9rem;
            height: 16rem;
        }
        .about-part2-pic {
            position: absolute;
            left: .6rem;
            top: 1rem;
            width: 13rem;
            height: 14rem;
        }
        .about-part2-content {
            margin-top: 17.22rem;
            p {
                margin-top: 0.4rem;
                font-size: .5rem;
                font-family: "PingFangSC";
                color: #333;
                line-height: 0.8rem;
                letter-spacing: 0.6px;
            }
        }
    }
    .service1 {
        position: relative;
        width: 100%;
        height: 26.68rem;
        // height: 100vh;
        background-color: #242424;
        overflow: hidden;
        .service1-title {
            position: absolute;
            right:  1rem;
            top: 2rem;
            text-align: right;
            width: 3.6rem;
            .serverce1-line {
                margin-left: 3rem;
                margin-right: 0;
                margin-bottom: .54rem;   
                width: 0.6rem;
                height: 0.12rem;
                border-bottom: 3px solid #fff;
            }
            p {
                color: #fff;
                font-size: .66rem;
                font-family: "PingFangSC";

            }
            .sanjiao {
                position: absolute;
                top: 2.7rem;
                right: 0;
                display: flex;
                flex-wrap: wrap;
                align-content: space-between;
                width: 0.28rem;
                height: 1.16rem;
                img {
                    width: 0.28rem;
                    height: 0.25rem;
                }
            } 
        }
        .service1-rect {
            position: absolute;
            top: .7rem;
            right: .6rem;
            width: 5.2rem;
            height: 6.4rem;
        }
        .service1-content-wrap {
            margin-top: 3.93rem;
            width: 100%;
            height: 22.75rem;
            background: url(../assets/images/index-1-03.jpg) no-repeat;
            background-size: cover;
            overflow: hidden;
            h2 {
                margin: 12rem 0 0 1.2rem;
                font-size: .54rem;
                font-family: "PingFangSC";
                color: #fff;
                font-weight: 700;
            }
            .service1-content {
                font-size: .44rem;
                line-height: .8rem;
                color: #aaa;
                margin: 4.46rem 0 0 .6rem;
                width: 10.6rem;
            }

        }

    }
    .service2 {
        position: relative;
        width: 100%;
        height: 26.68rem;
        // height: 100vh;
        overflow: hidden;
        .service2-title {
            position: absolute;
            top: .88rem;
            left: .6rem;
            width: 9.8rem;
            height: 11.6rem;
            background: url(../assets/images/index-1-04.jpg) no-repeat;
            background-size: cover;
            h2 {
                margin: 4.5rem 0 0 0.6rem;
                font-size: .54rem;
                font-family: "PingFangSC";
                color: #333;
                font-weight: 700;
            }
            .service2-content {
                font-size: .44rem;
                line-height: .8rem;
                color: #333;
                margin: 1.2rem 0 0 .6rem;
                width: 8.5rem;
            }
        } 
        .item-list {
            width: 12rem;
            height: 21.2rem;
            margin: 5.48rem 0 0  3rem;
            padding: 8.57rem 0 0 0 ;
            box-sizing: border-box;
            background: url(../assets/images/index-1-06.jpg) no-repeat;
            background-size: cover;

            li {
                width: 100%;
                height: 2.2rem;
                position: relative;
            }
            .baoshuiCircle {
                position: absolute;
                top: 0.48rem;
                left: 0.67rem;
                width: 1.1rem;
                height: 1.1rem;
                background: url(../assets/images/icon-circle.png) no-repeat;
                background-size: 1.1rem 1.1rem;
                text-align: center;
                line-height: 1.1rem;
                font-size: .36rem;
                font-family: "PingFangSC";
                color: #fff;

            }
            .baoshuiEach {
                display: inline-block;
                margin: 0.3rem 0 0 2.3rem; 
                width: 8.5rem;
                font-family: "PingFangSC"; 
                color: #fff;
                font-size: .44rem;
                line-height: 0.8rem;
            }


        }
    }
    .service3 {
        position: relative;
        width: 100%;
        height: 26.68rem;
        // height: 100vh;
        overflow: hidden;
        .background {
            position:absolute;
            right: 0;
            top: 0;
            background-color: #f0f0f0;
            width: 50%;
            height: 100%;
        }
        .service3-rect1 {
            margin: 0.9rem 0 0 6.3rem; 
            width: 1.2rem;
            height: 2.9rem;
        }
        .service3-content-wrap {
            position:absolute;
            left: 0;
            top: 3.78rem;
            width: 13.2rem;
            height: 20.22rem;
            background: url(../assets/images/index-1-07.jpg) no-repeat;
            background-size: cover;
            overflow: hidden;
            h2 {
                margin: 7.9rem 0 0 7.5rem;
                font-size: .54rem;
                font-family: "PingFangSC";
                color: #fff;
                font-weight: 700;
            } 
            .service3-content {
                font-size: .44rem;
                line-height: .8rem;
                color: #fff;
                margin: 2.9rem 0 0 1.2rem;
                width: 10.3rem;
                font-family: "PingFangSC";

            }
        }
        .service3-rect2 {
            position: absolute;
            bottom: 2.67rem;
            right: 0.6rem;
            width: 1.2rem;
            height: 1.2rem;
        }
    } 
    .contact {
        position: relative;
        width: 100%;
        height: 26.68rem;
        // height: 100vh;
        overflow: hidden;
        background: url(../assets/images/index-1-08.jpg) no-repeat;
        background-size: cover;
        padding: 1.85rem 0 0 1.2rem;
        box-sizing: border-box;
        .contact-title-wrap {
            width: 7.93rem;
            height: 13.62rem;
            background-color: #f0f0f0;
            padding-left: 0.6rem;
            box-sizing: border-box;
            overflow: hidden;
            .contact-line {
                margin-top: 1.35rem;
                width: 0.6rem;
                height: 0.12rem;
                border-bottom: 0.12rem solid #333;
            }
            h2 {
                margin-top: 0.6rem;
                font-size: .66rem;
                color: #333;
                font-weight: 700;
                font-family: "PingFangSC";

            }
            .contact-content {
                margin-top: 4.7rem;
                width: 7rem;
                font-size: .44rem;
                color: #333;
                line-height: 0.8rem;
                font-family: "PingFangSC";
            }
            button {
                background-color: #3dae9e;
                margin: 0.7rem 0 0 0;
                border: 0;
                padding: 0;
                width: 3.5rem;
                height: 0.88rem;
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
        .contactInfo {
            position: relative;
            margin-top: 2.7rem;
        }
        .chuangkou {
            font-size: .56rem;
            color: #fff;
            letter-spacing: 2px;
        }
        .contactInfoList {
            margin: 1.1rem 0 0 0;
        }
        .contactInfoList li {
            position: relative;
            width: 11.9rem;
            margin-top: 0.55rem;
            font-size: 0.46rem;
            padding-left: 1.1rem;
            font-family: "PingFangSC";
            line-height: 0.8rem;
            color: #fff;
            box-sizing: border-box;
            span {
                position:absolute;
                top: 0.2rem;
                left: 0;
                width: 0.51rem;
                height: 0.62rem;
                background: url(../assets/images/icon-location.png) no-repeat;
                background-size: 0.51rem 0.62rem ; 
            }
        } 
        .contactInfoList li:nth-child(2) span {
            position:absolute;
            top: 0.2rem;
            left: 0;
            width: 0.57rem;
            height: 0.57rem;
            background: url(../assets/images/phone.png) no-repeat;
            background-size: 0.57rem 0.57rem ; 
        }
        .contactInfoList li:nth-child(3) span{
            position:absolute;
            top: 0.2rem;
            left: 0;
            width: 0.59rem;
            height: 0.46rem;
            background: url(../assets/images/emil.png) no-repeat;
            background-size: 0.59rem 0.46rem ; 
        }
    }
}  
 
      
</style>

