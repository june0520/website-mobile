<template>
    <div class="contact-container">
        <vue-header :imgUrl='src'></vue-header>
        <section class="address clearfix">
            <div class="beijing-office">
                <div class="green-rect"></div>
                <img src="../assets/images/page4-map.jpg" alt="" class="map">
                <img src="../assets/images/BEIJING.png" alt="" class="beijing">
                <div class="beijing-info">
                    <h2 class="title">{{$t('index.Bj_office')}}</h2>
                    <span class="line"></span>
                    <ul class="infolist">
                        <li>
                            <p>{{$t('index.addr')}}</p>
                        </li>
                        <li>
                            <p>+86 <br>+86 </p>
                        </li>
                        <li>
                            <p>  </p>
                        </li>
                    </ul>
                </div>
            </div>
            <img src="../assets/images/TAIWAN.png" alt="" class="taiwan">
            <div class="taiwan-office">
                <h2 class="title">{{$t('index.Taiwan_Office')}}</h2>
                <span class="line"></span>
                <ul class="infolist">
                    <li>
                        <p>{{$t('index.tw_addr')}}</p>
                    </li>
                    <li>
                        <p>+86</p>
                    </li>
                    <li>
                        <p> </p>
                    </li>
                </ul>
            </div>

        </section>
        <section class="form-container clearfix">
            <div class="green-rect"></div>
            <div class="content-wrap">
                <div class="sanjiao">
                    <img src="../assets/images/green-shape.png" alt="">
                    <img src="../assets/images/green-shape.png" alt="">
                    <img src="../assets/images/green-shape.png" alt="">
                </div>
                <p class="content" v-if="formFlag">{{$t('index.need_further')}}</p>
                <p class="content" v-else>{{$t('index.relevant_message')}}</p>
            </div>
            <div class="form-title">
                <span @click="formFlag=true" :class="{'checkeded':formFlag}">{{$t('index.Contact_Us')}}</span>
                <img src="../assets/images/icon-top.png" alt="" v-show='formFlag' class="abc">
                <span @click="formFlag=false" :class="{'checkeded':!formFlag}">{{$t('index.Subscribe')}}</span>
                <img src="../assets/images/icon-top.png" alt="" v-show="!formFlag">
            </div>
            <div class="form-body">
                <input type="text" v-model="form.surname" :placeholder="$t('index.First_name')" class="xing outline" :class="{'error': error_surname}" @change="checkXing" >
                <input type="text" v-model="form.name" :placeholder="$t('index.Last_name')" class="ming outline" :class="{'error': error_name}" @change="checkMing">
                <input type="text" v-model="form.email" :placeholder="$t('index.E_mail')" class="email outline" :class="{'error':error_email}" @change="checkEmail">
                <input type="text" v-model="form.mobile" :placeholder="$t('index.Mobile_Phone')" class='phone outline' :class="{'error':error_mobile}" @change="checkPhone">
                <input type="text" v-model="form.tel" :placeholder="$t('index.Phone')" class="tel outline" >
                <textarea :placeholder="$t('index.your_Requirement')" v-model="form.demand" class="demand outline" maxlength="120" v-if='formFlag'></textarea>
                <textarea :placeholder="$t('index.sign_up_for_this_event')" v-model="form.instruction" class="sign outline" v-if='formFlag'></textarea>
                <div class="radiobox" v-if='!formFlag'>
                    <p>{{$t('index.sign_up_for_this_event')}}：</p>
                    <input type="checkbox" name="dy" id="us" v-model="relation" value="1">
                    <label for="us">{{$t('index.Property_in_UK')}}</label>

                    <input type="checkbox" name="dy" id="germany" v-model="relation" value="2">
                    <label for="germany">{{$t('index.Property_in_DE')}}</label>

                    <input type="checkbox" name="dy" id="Japan" v-model="relation" value="3">
                    <label for="Japan">{{$t('index.Property_in_JP')}}</label>

                    <input type="checkbox" name="dy" id="taiwan" v-model="relation" value="4">
                    <label for="taiwan">{{$t('index.Property_in_TW')}}</label>

                    <input type="checkbox" name="dy" id="bs" v-model="relation" value="5">
                    <label for="bs">{{$t('index.Tax_Return_Service')}}</label>

                    <input type="checkbox" name="dy" id="dk" v-model="relation" value="6">
                    <label for="dk">{{$t('index.Mortgage_Service')}}</label>

                </div>
                <button class="btn" @click="submit">{{$t('index.Submit')}} <img src="../assets/images/icon-long-right.png" alt="" class="contact-icon"></button>
            </div>
        </section>
    </div>
</template>
<script>
    // import { Toast} from "mint-ui"
    import vueHeader from "../components/header"
    export default {
        data(){
            return {
                formFlag: true,
                src: require('../assets/images/contact.png'),
                error_surname: false,
                error_name: false,
                error_email: false,
                error_mobile: false,
                form:  {
                    surname: '', // 姓
                    name: '',  // 名
                    email: '',
                    mobile: '',
                    tel: '',
                    demand: '', // 需求
                    instruction: '', // 报名说明会
                    source: 1  // 1-联系我们   2-订阅
                },
                relation: [] //  国家选择
            }
        },
        methods: {
            checkXing(){
                var re = /[\u4e00-\u9fa5\w]+/
                if(re.test(this.form.surname)){
                    this.error_surname = false
                    return
                } else if(this.form.surname===''){
                    this.error_surname = true
                    this.$toast('姓氏不能为空')
                } else {
                    this.$toast('请输入正确的姓氏')
                }

            },
            checkMing(){
                var re = /[\u4e00-\u9fa5\w]+/
                if(re.test(this.form.name)){
                    this.error_name = false
                    return
                } else if(this.form.name === '') {
                    this.error_name = true
                    this.$toast('名字不能为空')
                } else {
                    this.$toast('请输入正确的名字')
                }
            },
            checkEmail(){
                var re = /\w+@\w{2,3}\.[a-z]{2,3}$/
                if(re.test(this.form.email)){
                    this.error_email = false
                    return
                } else if(this.form.email === '') {
                    this.error_email = true
                    this.$toast('邮箱不能为空')
                } else {
                    this.$toast('请输入正确的邮箱地址')
                }

            },
            checkTel (){
                var re = /^\d{8}$/
                if(this.form.tel === ''){
                    return
                } else if(re.test(this. form.tel)) {
                    return
                } else {
                    this.$toast('请输入正确的电话号码')
                }

            },
            checkPhone(){
                var re = /^1[3456789]\d{9}$/
                if(this.form.mobile === ''){
                    this.error_mobile = true
                    this.$toast('手机号码不能为空')
                } else if(re.test(this.form.mobile)) {
                    this.error_mobile = false
                    return
                } else {
                    this.$toast('请输入正确的手机号码 ')
                }

            },
            submit() {
                let params = this.form
                this.form.source = this.formFlag?1:2
                if(this.form.source == 2 ) {
                    params.relation = this.relation.length>0?this.relation.join(','): '0'
                }
                this.$axios.post('https://bondedsite.vmh5.com/front/form',
                    params)
                    .then(function(res){
                        console.log(res.data)
                        if(res.data.error == 0) {
                            this.$toast('提交成功')
                        }
                    }.bind(this))
            }
        },
        components:{
            vueHeader
        }
    }
</script>
<style lang="less" scoped>
    .contact-container {
        .address {
            width: 100%;
            height: 53.32rem;
            background: url(../assets/images/page4-1.jpg) no-repeat;
            background-size: cover;
            position: relative;
            .beijing-office {
                position: relative;
                float:right;
                margin-top:3rem;
                height: 23rem;
                width: 13.2rem;
                background-color: #fff;
                .green-rect {
                    position:absolute;
                    top: -0.6rem;
                    right: 0.6rem;
                    width: 7rem;
                    height: 10.2rem;
                    background-color: #3dae9e;
                }
                .map {
                    position:absolute;
                    top: 0;
                    right: 1.2rem;
                    width: 13.2rem;
                    height: 9rem;
                }
                .beijing{
                    position:absolute;
                    bottom: 0.2rem;
                    left: 0;
                    width: 2.38rem;
                    height: 13.15rem;
                }
                .beijing-info {
                    position:absolute;
                    top: 11.5rem;
                    left: 3.2rem;
                    .title {
                        height: 1.1rem;
                        font-size: 0.55rem;
                        color: #333;
                        font-weight: 700;
                    }
                    .line {
                        display: inline-block;
                        width: 0.9rem;
                        height: 0.1rem;
                        background-color: #333;
                    }
                    .infolist {
                        margin-top: 1.4rem;
                        li {
                            margin-bottom: 0.7rem;
                            padding-left: 1.1rem;
                            width: 9.5rem;
                            font-size: 0.44rem;
                            font-family: "PingFangSC";
                            color: #333;
                            line-height: 0.8rem;
                            box-sizing: border-box;
                            background: url(../assets/images/icon-location.png)  0px 4px no-repeat;
                            background-size: 0.51rem 0.62rem ;
                        }
                        li:nth-child(2) {
                            background: url(../assets/images/phone.png) 0px 4px no-repeat;
                            background-size: 0.57rem 0.57rem ;
                        }
                        li:nth-child(3){
                            background: url(../assets/images/emil.png)0px 4px  no-repeat;
                            background-size: 0.59rem 0.46rem ;
                        }
                    }
                }
            }
            .taiwan {
                position:absolute;
                top: 24.1rem;
                right: 0;
                width: 3.8rem;
                height: 14rem;
            }
            .taiwan-office {
                position:absolute;
                top: 36.6rem;
                left: 1.76rem;

                .title {
                    height: 1.1rem;
                    font-size: 0.55rem;
                    color: #fff;
                    font-weight: 700;
                }
                .line {
                    display: inline-block;
                    width: 0.9rem;
                    height: 0.1rem;
                    background-color: #fff;
                }
                .infolist {
                    margin-top: 1.4rem;
                    li {
                        margin-bottom: 0.7rem;
                        padding-left: 1.1rem;
                        width: 9.5rem;
                        font-size: 0.44rem;
                        font-family: "PingFangSC";
                        color: #fff;
                        line-height: 0.8rem;
                        box-sizing: border-box;
                        background: url(../assets/images/icon-location.png) 0px 4px no-repeat;
                        background-size: 0.57rem 0.57rem ;
                    }
                    li:nth-child(2) {
                        background: url(../assets/images/phone.png)0px 4px  no-repeat;
                        background-size: 0.59rem 0.46rem ;
                    }
                    li:nth-child(3) {
                        background: url(../assets/images/emil.png)0px 4px  no-repeat;
                        background-size: 0.59rem 0.46rem ;
                    }
                }
            }
        }
        .form-container {
            position: relative;
            width: 100%;
            height: 26.68rem;
            background-color: #fff;
            .green-rect {
                position: absolute;
                top: -1.7rem;
                right: 0;
                width: 14.4rem;
                height: 9rem;
                background-color: #3dae9e;
            }
            .content-wrap {
                position: absolute;
                top: -1.7rem;
                right: 0;
                width: 13.8rem;
                height: 9rem;
                background-color: #f0f0f0;
                .sanjiao {
                    position: absolute;
                    top: 1.7rem;
                    left: 1.2rem;
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
                .content {
                    margin: 3.57rem 2.2rem 0 1.2rem;
                    color: #333;
                    font-weight: 700;
                    font-size: 0.44rem;
                    line-height: 0.8rem;
                    font-family: "PingFangSC";

                }
            }
            .form-title {
                position: relative;
                margin: 8.35rem auto 0;
                width: 12.6rem;
                border-bottom: 0.12rem solid #3dae9e;
                display: flex;
                justify-content: space-around;
                padding-bottom: 0.8rem;
                span {
                    font-size: 0.44rem;
                    color: #333;
                    font-family: "PingFangSC";
                }
                img {
                    position: absolute;
                    bottom: -2px;;
                    left: 25%;
                    transform: translateX(-50%);
                    width: 0.51rem;
                    height: 0.28rem;
                }
                img:nth-child(4) {
                    position: absolute;
                    bottom: -2px;;
                    left: 75%;
                }
                .checkeded{
                    font-size: 0.6rem;
                    color: #3dae9e;
                }
            }
            .form-body {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                margin: 0.6rem 1.2rem 0;
                .xing,
                .ming,
                .phone,
                .tel {
                    width: 6.15rem;
                    height: 1.33rem;
                }
                .email {
                    width: 100%;
                    height: 1.32rem;
                }
                .demand,
                .sign {
                    width: 100%;
                    height: 2.36rem;
                    resize: none;
                    padding-top: 0.45rem;
                    box-sizing: border-box;
                }
                button {
                    background-color: #3dae9e;
                    margin: 0.85rem 0 0 0;
                    border: 0;
                    padding: 0;
                    width: 4.6rem;
                    height: 1.25rem;
                    font-size: .44rem;
                    color: #fff;
                    text-align: left;
                    text-indent: 1.2rem;
                    letter-spacing: 1px;
                    line-height: 1.25rem;
                    .contact-icon {
                        width: 0.92rem;
                        height: 0.2rem;
                        margin-left: 0.75rem;
                        vertical-align: middle;
                    }
                }
                .radiobox {
                    margin-top: 0.85rem;
                    font-size: 0;
                    p {
                        font-size: 0.44rem;
                        color: #333;
                        font-family: "PingFangSC";
                    }
                }

            }
        }
    }
    label {
        display: inline-block;
        height: 0.63rem;
        width: 4.2rem;
        font-size: 0.44rem;
        font-family: "PingFangSC";
        margin-top: 0.8rem;
        color: #333;
    }

    input[type=checkbox] + label::before {
        content: "\a0";  /*不换行空格*/
        display: inline-block;
        vertical-align: 0px;
        width: 0.55rem;
        height: 0.55rem;
        margin-right: 0.47rem;
        border-radius: 50%;
        background-color: #f0f5f4;
        border: 1px solid #c9c9c9;
        text-indent: 2px;
        line-height: .65;  /*行高不加单位，子元素将继承数字乘以自身字体尺寸而非父元素行高*/
        padding: 2px;
        box-sizing: border-box;
    }
    input[type="checkbox"]:checked + label::before {
        background-color: #3dae9e; /* 选中的背景颜色 */
        border: 1px solid #3dae9e;
        padding: 2px;
        background-clip: content-box;
    }
    input[type='checkbox'] {
        /* 隐藏掉原先实际的 radio 框，之所以没用 display:none; 这种简单直接的方式，
            是因为这种方法会把它从键盘 tab 键切换焦点的队列中完全删除 */
        position: absolute;
        clip:rect(0,0,0,0);       /* 第一种隐藏方式：剪切为0 */
        /* visibility: hidden; */ /* 第二种隐藏方式：隐藏 */

    }
    .outline {
        margin-top: 0.4rem;
        outline: none;
        border: 1px solid #999;
        text-indent: 0.42rem;
        font-size: 0.44rem;
    }
    .error {
        border: 1px solid #ff0000;
    }
    input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
        font-size: 0.44rem;
        color: #d9d9d9;
    }
    input:-moz-placeholder, textarea:-moz-placeholder {
        font-size: 0.44rem;
        color: #d9d9d9;
    }
    input::-moz-placeholder, textarea::-moz-placeholder {
        font-size: 0.44rem;
        color: #d9d9d9;
    }
    input:-ms-input-placeholder, textarea:-ms-input-placeholder {
        font-size: 0.44rem;
        color: #d9d9d9;
    }


    .clearfix:before,.clearfix:after {
        content: '';
        display: table;
    }
    .clearfix:after {
        clear: both;
    }

</style>