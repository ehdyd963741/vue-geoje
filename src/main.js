import { createApp } from 'vue'
import App from './App.vue'
// vue 프로그램이 실행이 되면 자동으로 시작되는 .js
// EntryPoint(진입시작점)
// 확장자 .js는 생략가능
import router from './router/index'
import store from './store/store'

createApp(App).use(router).use(store).mount('#app')
