import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    menuDataArr:[],
    visualDataArr: [],
    galleryDataArr: [],
    movieData: {},
    infoDataArr: [],
    newsDataArr: [],
    bannerDataArr: []
  },
  actions: {
    fetchGetMenu({commit}){
      axios.get('./data/menu.json')
      .then(res => {
        commit('UPDATE_MENU_DATA', res.data);
      })
      .catch(err => console.log(err))
    },
    fetchGetVisual({commit}){
      axios.get('./data/visual.json')
      .then(res => {
        commit('UPDATE_VISUAL_DATA', res.data);
      })
      .catch(err => console.log(err))
    },

    fetchGetGallery({commit}){
      axios.get('./data/gallery.json')
      .then(res => {
        commit('UPDATE_GALLERY_DATA', res.data);
      })
      .catch(err => console.log(err))
    },

    fetchGetMovie({commit}){
      axios.get('./data/movie.json')
      .then(res => {
        commit('UPDATE_MOVIE_DATA', res.data);
      })
      .catch(err => console.log(err))
    },

    fetchGetInfo({commit}){
      axios.get('./data/info.json')
      .then(res => {
        commit('UPDATE_INFO_DATA', res.data);
      })
      .catch(err => console.log(err))
    },

    fetchGetNews({commit}){
      axios.get('./data/news.json')
      .then(res => {
        commit('UPDATE_NEWS_DATA', res.data);
      })
      .catch(err => console.log(err))
    },

    fetchGetBanner({commit}){
      axios.get('./data/banner.json')
      .then(res => {
        commit('UPDATE_BANNER_DATA',res.data);
      })
      .catch(err => console.log(err))
    }
  },  

  mutations: {

    UPDATE_MENU_DATA(state, payload) {
      state.menuDataArr = payload
    },

    UPDATE_VISUAL_DATA(state, payload) {
      state.visualDataArr = payload
    },
    UPDATE_GALLERY_DATA(state, payload) {
      state.galleryDataArr = payload
    },
    UPDATE_MOVIE_DATA(state, payload) {
      state.movieData = payload
    },
    UPDATE_INFO_DATA(state, payload) {
      state.infoDataArr = payload
    },
    UPDATE_NEWS_DATA(state, payload) {
      state.newsDataArr = payload
    },
    UPDATE_BANNER_DATA(state, payload){
      state.bannerDataArr = payload
    }
  },

  getters: {
    menuData(state){
      return state.menuDataArr
    },
    visualData(state){
      return state.visualDataArr
    },
    galleryData(state){
      return state.galleryDataArr
    },
    movieData(state){
      return state.movieData
    },
    infoData(state){
      return state.infoDataArr
    },
    newsData(state){
      return state.newsDataArr
    },
    bannerData(state){
      return state.bannerDataArr
    }
  }
})