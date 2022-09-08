<template>
  <section class="community">
    <div class="inner clearfix">
      <div class="community-box">
        <div class="community-top bg-line">
          <h3>이룸소식</h3>
          <a href="#" class="community-more">전체보기</a>
        </div>
        <div class="community-main">
          <ul class="community-list data-info">
            <li>
              <a href="#">&#60;6월 문화특강 [모스큐브&멘톨비누 만들기]&#62;</a>
              <span>2022.06.17</span>
            </li>
            <li>
              <a href="#">&#60;6월 인문학특강 [4차 산업혁명과 청년]&#62;</a>
              <span>2022.06.30</span>
            </li>
            <li>
              <a href="#">내꿈공간(내 일을 꿈꾸는 청년창업공간) 대관 안내&#62;</a>
              <span>2022.08.20</span>
            </li>
            <li>
              <a href="#">&#60;6월 취창업 프로그램 , NCS 특강 안내 ♡&#62;</a>
              <span>2022.08.17</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="community-box">
        <div class="community-top bg-line">
          <h3>청년정책 새소식</h3>
          <a href="#" class="community-more">전체보기</a>
        </div>
        <div class="community-main">
          <ul class="community-list data-news">
            <li>
              <a href="#">「2022년 청년, 거제에서 한 달 살아보기」 참여 청년 모집!!</a>
              <span>2022.06.15</span>
            </li>
            <li>
              <a href="#">2022년 거제시 청년 월세 지원사업 선정 결과</a>
              <span>2022.06.08</span>
            </li>
            <li>
              <a href="#">청춘다락: 7월 프로그램 참여 청년 모집</a>
              <span>2022.06.08</span>
            </li>
            <li>
              <a href="#">제2기 거제시 청년정책네트워크 위원 모집 연장 안내</a>
              <span>2022.05.30</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="community-box calendar">
        <div class="community-top">
          <h3>센터일정</h3>
          <a href="#" class="community-more">전체보기</a>
        </div>
        <div class="community-main">

        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style scoped>
/* 커뮤니티 영역 */
.community {
  position: relative;
  display: block;
  padding: 70px 0;
}

.community .inner {}

.community-box {
  position: relative;
  display: block;
  float: left;
  width: 32.5%;
  height: 372px;
  margin-right: 1.5%;
  padding: 30px;

  overflow: hidden;
  border: 1px solid #e6e8eb;
}

.calendar {
  width: 32%;
  margin-right: 0;
}

.community-top {
  position: relative;
  display: block;
  padding-bottom: 20px;
}

.bg-line {
  background: url('@/assets/images/img_bg_line.png') repeat-x;
  background-position: 0 100%;
}

.community-top h3 {
  position: relative;
  display: block;
  font-size: 22px;
  color: #0e62b2;
  font-weight: 300;
  white-space: nowrap;
}

.community-more {
  position: absolute;
  right: 0;
  top: 6px;
  display: block;
  padding-left: 18px;
  white-space: nowrap;
  font-size: 15px;
  color: #333;
}

.community-more::before {
  content: '';
  position: absolute;
  left: 0;
  top: 11px;
  display: block;
  width: 8px;
  height: 2px;
  background-color: #131313;
}

.community-more::after {
  content: '';
  position: absolute;
  left: 3px;
  top: 8px;
  display: block;
  width: 2px;
  height: 8px;
  background-color: #131313;
}

.community-main {
  position: relative;
  display: block;
  padding-top: 25px;
}

.community-list {
  position: relative;
  display: block;

}

.community-list li {
  position: relative;
  display: block;
  overflow: hidden;
  border-bottom: 1px solid #e6e6e6;
  line-height: 53px;
}

.community-list li:last-child {
  border-bottom: none;
}

.community-list li a {
  position: relative;
  display: block;
  float: left;
  font-size: 16px;
  color: #444;
  font-weight: 300;

  /* 말줄임(...) 표현 */
  width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

}

.community-list li span {
  position: relative;
  display: block;
  float: right;
  font-size: 15px;
  color: #444;
}

/* 커뮤니티 PC 버전 */
/* 커뮤니티 반응형 */
@media all and (max-width: 1000px) {

  .community {
    padding: 5vw 0;
  }

  .community-box:nth-child(1) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }

  .community-box:nth-child(2) {
    width: 49%;
    margin-right: 2%;
  }

  .community-box:nth-child(3) {
    width: 49%;
    margin-right: 0;
  }
}

@media all and (max-width: 640px) {
  .community-box:nth-child(2) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }

  .community-box:nth-child(3) {
    width: 100%;
  }
}


</style>