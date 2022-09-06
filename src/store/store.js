import { createStore } from 'vuex'
// vuex는 데이터를 보관하고,
// 업데이트 한 이후에 
// 컴포넌트에서 필요로 한
// 데이터를 참조한다.
// 공통 데이터 저장소 (state)
export default createStore(
  {
  // 데이터
  state: {},

  // 외부 Json 및 서버연동
  // axios 호출 시점
  // mutation을 commit 으로 호출하면서 데이터를 전달한다.
  actions: {},

  // actions로 부터 데이터를 전송받고 state를 업데이트 한다.
  mutations: {},
  // 외부 컴포넌트에서 state를 참조할때 활용
  // state가 바뀌면 즉시 반영을 위해서 외부 컴포넌트는 
  // computed로 처리하는것이 일반적이다.
  getters: {}
  }
)