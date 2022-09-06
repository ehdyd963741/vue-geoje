<template>
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
</template>

<script>
import HeaderView from '@/components/HeaderView.vue' 
import VisualView from '@/components/VisualView.vue' 
import QuickMenuView from '@/components/QuickMenuView.vue' 
import CommunityView from '@/components/CommunityView.vue' 
import GalleryView from '@/components/GalleryView.vue' 
import BannerView from '@/components/BannerView.vue' 
import FooterView from '@/components/FooterView.vue' 

export default {
  name: 'App',
  components: {
    HeaderView,
    VisualView,
    QuickMenuView,
    CommunityView,
    GalleryView,
    BannerView,
    FooterView
  },
  setup() {
    return{

    }
  }
}
</script>

<style>

</style>