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
        date: '2017-07-17'
      },
      {
        imageUrl: 'https://abrilviagemeturismo.files.wordpress.com/2016/10/paris-verao-franca.jpeg?quality=70&strip=info&w=920',
        id: 'cascascs',
        title: 'Meetup in Paris',
        date: '2017-07-19'
      }
    ],
    user: {
      id: 'sdfghjk',
      registeredMeetups: ['cascascs']
    }
  },
  mutations: {},
  actions: {},
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