import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		loadedMeetups:[
			{imageUrl:'https://c1.staticflickr.com/9/8652/16586825346_7898b04cff_b.jpg', id:'sasadfef121', title:'Meetup in São Paulo'},
			{imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Rio_de_Janeiro_Helicoptero_47_Feb_2006.jpg/800px-Rio_de_Janeiro_Helicoptero_47_Feb_2006.jpg',id:'testerio', title:'Meetup in Rio de Janeiro'},

		],
		user:{
			id: 'abc123',
			registeredMeetups:['sasadfef121'] 
		}
	},
	mutations:{},
	actions:{},
	getters:{}
})
