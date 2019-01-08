<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
     <div class="btn" @click="openLightBox">
      <text class="btn-txt">点击按钮弹出全屏图片</text>
    </div>
   <wxc-button text="Open Popup"
                @wxcButtonClicked="buttonClicked">
    </wxc-button>
    <div :show="isShow">
      12121
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
