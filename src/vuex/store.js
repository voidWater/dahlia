import Vue from 'vue';
import vuex from 'vuex';
import Hmtp from './hmtp'
Vue.use(vuex);

export default new vuex.Store({
		modules:{
			hmtp:Hmtp
		},
		    state:{
		    rootVal:"根节点Store的值"
		},
	  
	  getters:{
		getRootVal(state){
		  return state.rootVal
		}
	  },
	  mutations:{
		changeRootVal(state,payload){
			console.log("根节点Store的changeRootVal被调用了")
			state.rootVal=payload
		}
	  },
	  actions:{
		changeRootValByAction(context,payload){
		  console.log("根节点Store的changeRootValByAction被调用了")
		  context.commit("changeRootVal",payload)
		}
	  }
})