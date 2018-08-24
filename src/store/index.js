import Vue from 'vue'
import Vuex from 'vuex'
// import actions from './actions'
// import getters from './getters'
// import mutations from './mutations'
// import state from './state'

Vue.use(Vuex)

// export default new Vuex.Store({
//   actions,
//   getters,
//   mutations,
//   state
//   // strict: debug,
//   // plugins: debug ? [createLogger()] : []
// })

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutation: {
    increment(state) {
      state.count++
    }
  }
})
