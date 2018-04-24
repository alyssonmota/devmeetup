import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://thenypost.files.wordpress.com/2017/04/new-york.jpg?quality=90&strip=all&w=618&h=410&crop=1',
        id: 'cjkuaskj',
        title: 'Meetup in New York',
        date: new Date(),
        location: 'New York'
      },
      {
        imageUrl: 'https://abrilviagemeturismo.files.wordpress.com/2016/10/paris-verao-franca.jpeg?quality=70&strip=info&w=920',
        id: 'cascascs',
        title: 'Meetup in Paris',
        date: new Date(),
        location: 'Paris',
        description: 'It\'s Paris!'
      }
    ],
    user: {
      id: 'sdfghjk',
      registeredMeetups: ['cascascs']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'uicbsdjkbc'
      }
      // Reach out Firebase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
