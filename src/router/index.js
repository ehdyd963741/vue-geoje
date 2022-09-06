import {createRouter, createWebHistory} from 'vue-router'
// Router 는 화면의 일부에 즉, RouterView 라는 
// 컴포넌트에 다른 컴포넌트를 보여주는 역할을 합니다.
// html 로 생각을 하면, <a href="#아이디"></a>와 같습니다.
// 클릭을 해서 내용갱신시 웹브라우저에 
// 주소 창에 # 을 표현하지 않기위해
// crateWebHistory 를 사용하여 관리합니다.
// crateWebHistory 는 Browser의 history 객체와 연관
const router = createRouter(
  {
  history:createWebHistory(),
  // routes: [{path:'/페이지명',name:'별칭',component:RouterView에 보여줄 컴포넌트}]
  routes:[]
  }
);
export default router;