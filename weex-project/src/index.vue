<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
     <div class="btn" @click="openLightBox">
      <text class="btn-txt">点击按钮弹出全屏图片</text>
    </div>
   <wxc-button text="Open Popup"
                @wxcButtonClicked="buttonClicked">
    </wxc-button>
    <div :show="isShow" class="div1" >
      <text>sdfsdfsdfsd</text>  
      <text :style='{color:"red"}'>2222</text>  
      <text :style='{color:"blue"}'>8989789798这天气真的很好，我
        们玩的都很开心，心情都很愉快或许这就是我们想要的幸fsdffsdfsfsf s ss福</text>  
    </div>
    <wxc-popup width="500"
               pos="left"
               :show="isShow"
               @wxcPopupOverlayClicked="overlayClicked">
    </wxc-popup>
    <text class="greeting">The environment is ready!</text>
    <router-view/>
  </div>
</template>

<script>
// import  WxcLightbox  from 'weex-ui/packages/wxc-lightbox'
import { WxcButton, WxcPopup } from 'weex-ui';
var navigator = weex.requireModule('navigator')
var modal = weex.requireModule('modal')
export default {
  components: {  WxcButton, WxcPopup },
  name: 'App',
  data () {
    return {
      isShow: false,
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  },
  methods: {
    buttonClicked () {
       navigator.push({
          url: 'home',
          animated: "true"
        }, event => {
          modal.toast({ message: 'callback: ' + navigator })
        })
      this.isShow = true;

    },
    overlayClicked () {
      this.isShow = false;
    }
  }
}
</script>

<style scoped>
  .text1{
    display: inline-block;
    color:red;
  }
  .div1{
    width: 750px;
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    justify-content: left;
  }
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
