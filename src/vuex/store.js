import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  id:1,	
  todos:[
	  {
		  text:"I'm Vuex",
		  selected:!1,
		  id:1
	  }
  ],
  filter:0	
}

export default new Vuex.Store({
  state,
  mutations,
  actions	
})
