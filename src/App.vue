<template>

  <div>
    <!-- 더보기 메뉴 -->
    <MoreWrapView />
    <!-- 모바일 버튼 -->
    <MbBt />
    <!-- 모바일 메뉴 내용 -->
    <MbWrapView />

    <div class="wrap">
    <!-- 상단 영역 -->
    <header-view></header-view>
    <!-- 비주얼 영역 -->
    <visual-view></visual-view>
    <!-- 퀵메뉴 영역 -->
    <quick-menu-view></quick-menu-view>
    <!-- 커뮤니티 영역 -->
    <community-view></community-view>
    <!-- 갤러리 영역 -->
    <gallery-view></gallery-view>
    <!-- 배너 영역 -->
    <banner-view></banner-view>
    <!-- 하단 영역 -->
    <footer-view></footer-view>
    </div>

  </div>
</template>

<script>
  import MoreWrapView from '@/components/MoreWrapView.vue'
  import MbBt from '@/components/MbBt.vue'
  import MbWrapView from'@/components/MbWrapView.vue'
  import HeaderView from '@/components/HeaderView.vue'
  import VisualView from '@/components/VisualView.vue'
  import QuickMenuView from '@/components/QuickMenuView.vue'
  import CommunityView from '@/components/CommunityView.vue'
  import GalleryView from '@/components/GalleryView.vue'
  import BannerView from '@/components/BannerView.vue'
  import FooterView from '@/components/FooterView.vue'

  import { useStore } from 'vuex'


  export default {
    name: 'App',
    components: {
      MoreWrapView,
      MbBt,
      MbWrapView,
      HeaderView,
      VisualView,
      QuickMenuView,
      CommunityView,
      GalleryView,
      BannerView,
      FooterView
    },
    setup() {
      const store = useStore();
      store.dispatch('fetchGetMenu');
      store.dispatch('fetchGetVisual');
      store.dispatch('fetchGetGallery');
      store.dispatch('fetchGetMovie');
      return {

      }
    }
  }
</script>

<style>
  @charset 'utf-8';
  @import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);
  @import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
  @import url(https://fonts.googleapis.com/css?family=Raleway:400,600,700,800);
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

  @font-face {
    font-family: 'GmarketSansLight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'GmarketSansBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    outline-style: none;
  }

  ul,
  li {
    list-style: none;
  }

  img {
    vertical-align: middle;
    border: 0;
  }

  a {
    text-decoration: none;
    color: #000;
  }


  /* scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 5px;
    background-color: #f7f7f7;
    -moz-border-radius: 0px;
    -webkit-border-radius: 0px;
    border-radius: 0px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #aaa;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
  }

  /* 위쪽은 기본작업입니다. */

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Open Sans', GmarketSansMedium, GmarketSansLight, GmarketSansBold, '맑은 고딕', '돋움', Dotum, '굴림', Gulim, Sans-serif;
    font-size: 12px;
    font-size: 15px;
    line-height: 1.5;
    letter-spacing: -0.6px;
  }

  /* 공통요소(재사용할 내용) */

  .clearfix::after {
    content: '';
    position: relative;
    display: block;
    width: 100%;
    clear: both;
  }

  .inner {
    position: relative;
    display: block;
    margin: 0 auto;
    max-width: 1400px;
  }
</style>