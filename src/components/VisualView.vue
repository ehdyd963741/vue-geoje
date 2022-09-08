<template>
  <section class="visual">

    <!--  Swiper -->
  <Swiper
    :modules="modules"
    :autoplay = "{
      delay: 1000,
      disableOnInteraction: false
    }"
    :loop = "true"
    :pagination = "{
      el: '.sw-visual-pg',
      clickable: 'true'
    }"
    :effect="'fade'"
    @swiper="visualSlide"
    class="sw-visual"
  >
    <SwiperSlide class="swiper-slide" v-for="(item, index) in visualData" :key="index">
      <a 
      :href="item.link" 
      :style="{
        backgroundImage:`url(${ resW ? item.imgurl : item.imgurl_mb })`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }"

      :data-bg-mb="item.imgurl_mb"
      :data-bg="item.imgurl"
      >
      </a>
    </SwiperSlide>

<!-- 슬라이더 페이지네이션 -->
      <div class="sw-visual-control">
        <div class="sw-visual-pg"></div>
        <button class="sw-visual-bt">
          <span class="material-icons-outlined" @click="controlSlide">
            {{slideState}}
          </span>
        </button>
      </div>

  </Swiper>
  </section>
</template>

<script>
  import { computed,ref, onMounted } from 'vue';
  import {useStore} from 'vuex'
  import { Swiper, SwiperSlide} from 'swiper/vue'
  import 'swiper/css'
  import {Autoplay, EffectFade, Pagination} from 'swiper'
  import 'swiper/css/pagination'
  import 'swiper/css/effect-fade'


  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    
    setup() {
      // state의 visualData 를 받아온다.
      const store = useStore();
      // getter의 visualData 를 computed로 받아온다.
      const visualData = computed(() => store.getters.visualData);
      // Style 바인딩을 이용한다. :style = " 내용 "

      const slide = ref(null);
      // Swiper 슬라이드 객체를 저장하기 위해서
      const visualSlide = (swiper) => {
        // ref라서 value로 저장
        slide.value = swiper;
        // 1번부터 실행
        slide.value.slideTo(1);
      }
      // 아이콘을 변경하기 위해 문자열을 저장
      const slideState = ref('pause');
      // 버튼아이콘을 클릭할때마다 실행
      const controlSlide = () => {
        // 상태 파악후 start/ pause/ 아이콘 모양 변경
        if(slide.value.autoplay.running){
          slide.value.autoplay.stop();
          slideState.value = 'play_arrow';
        }else{
          slide.value.autoplay.start();
          slideState.value = 'pause';
        }
      }


      // 현재 1400 보다 크면 true, 작으면 false
      const resW = ref(true);
      onMounted( () => {
      // checkWin 메서드 : resW 체크 하는 메서드
      const checkWin = () => {
          // window 너비를 체크함
          let w = window.innerWidth;
          if(w <= 1400) {
            // 1400 같거나 작으면
            resW.value = false;            
          }else{
            // 1400 보다 크다
            resW.value = true;            
          }
          // console.log(w)
          // console.log(resW.value)
        }
        // window에 resize 이벤트를 연결
        window.addEventListener('resize', checkWin);

        // 최포 한번 실행
        checkWin();
      })
      return {
        modules: [Autoplay, EffectFade, Pagination],
        // Swiper 를 template 에 사용했으므로 전달해 준다.
        visualSlide,
        controlSlide,
        slideState,
        visualData,
        resW
      }
    }
  }
</script>

<style>
  /* 비주얼 영역 */
  .visual {
    position: relative;
    display: block;
    height: 477px;
  }

  .sw-visual {
    width: 100%;
    height: 100%;
  }

  .sw-visual a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }

  .vs-1 {
    background: url('@/assets/images/banner_1_20200915_0.jpg') no-repeat center;
    background-size: cover;
  }

  .vs-2 {
    background: url('@/assets/images/banner_2_20200915_0.jpg') no-repeat center;
    background-size: cover;
  }

  .vs-3 {
    background: url('@/assets/images/banner_4_20200915_0.jpg') no-repeat center;
    background-size: cover;
  }

  .sw-visual-control {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 50px;

    display: block;
    z-index: 9;
  }

  .sw-visual-pg .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: #fff;
    opacity: 0.5;
    margin-right: 10px;
  }

  .sw-visual-pg {
    float: left;
  }

  .sw-visual-pg .swiper-pagination-bullet-active {
    opacity: 1.0;
  }

  .sw-visual-bt {
    position: absolute;
    width: 23px;
    height: 22px;
    float: left;
    background: transparent;
    /* background: url('@/assets/images/pause.png') no-repeat center; */
    cursor: pointer;
    border: 0;
    font-family: 'Material Icons';
    color: #fff;
    font-size: 10px;
  }

  .sw-visual-bt-play {
    background: url('@/assets/images/play.png') no-repeat center;
  }

  /* visual PC 버전 */
  /* visual 반응형 버전 */
  @media all and (max-width: 1400px) {
    .visual {
      min-width: 50vw;
      height: 50vh;
    }
  }
</style>