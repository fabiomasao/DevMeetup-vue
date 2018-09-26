import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		loadedMeetups:[
			{imageUrl:'https://c1.staticflickr.com/9/8652/16586825346_7898b04cff_b.jpg', 
			 id:'sasadfef121', 
			 title:'Meetup in São Paulo',
			 date: '2018-12-20'},
			{imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Rio_de_Janeiro_Helicoptero_47_Feb_2006.jpg/800px-Rio_de_Janeiro_Helicoptero_47_Feb_2006.jpg',
			 id:'testerio', 
			 title:'Meetup in Rio de Janeiro',
			 date:'2018-12-25'},

		],
		user:{
			id: 'abc123',
			registeredMeetups:['sasadfef121'] 
		}
	},
	mutations:{
		createMeetup (state, payload){
			state.loadedMeetups.push(payload)
		}
	},
	actions:{
		createMeetup({commit}, payload){
			const meetup ={
				title: payload.title,
				location: payload.location,
				imageUrl: payload.imageUrl,
				description: payload.description,
				date: payload.date,
				id: 'testedeid'
			}
			commit('createMeetup', meetup)
		}


	},
	getters:{
		loadedMeetups (state){
			return state.loadedMeetups.sort((meetupA, meetupB) =>{
				return meetupA.date > meetupB.date
			})
		},
		featuredMeetups (state, getters){
			return getters.loadedMeetups.slice(0, 5)
		},

		loadedMeetup(state){
			return (meetupid) => {
				return state.loadedMeetups.find((meetup) => {
					return meetup.id === meetupid

				})
			}
		}

	}
})
