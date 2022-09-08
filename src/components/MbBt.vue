<template>
  <a href="#" class="mb-bt">
    <span class="line"></span>
  </a>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 모바일 관련 */
/* 모바일 메뉴 */
.mb-bt {
  position: fixed;
  right: 15px;
  top: 25px;
  display: none;
  width: 24px;
  height: 14px;
  z-index: 99999;
}

.mb-bt::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 2px;
  background-color: #333;
  transition: all 0.3s;
}

.line {
  position: absolute;
  left: 0;
  top: 50%;
  display: block;
  width: 100%;
  height: 2px;
  background-color: #333;
  transition: all 0.3s;
}

.mb-bt::after {
  content: '';
  position: absolute;
  left: 0;
  top: 100%;
  display: block;
  width: 100%;
  height: 2px;
  background-color: #333;

  transition: all 0.3s;
}

.mb-bt-open::before {
  top: 50%;
  transform: rotate(45deg);
}

.mb-bt-open .line {
  width: 0;
}

.mb-bt-open::after {
  top: 50%;
  transform: rotate(-45deg);
}

@media all and (max-width: 1000px) {
  .mb-bt {
    display: block;
  }
}
  


</style>