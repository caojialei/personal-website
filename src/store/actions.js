// import * as types from './mutation-types'

import {SET_CURRENT_PAGE} from './mutation-types'
export default {
  getCurrentPage({commit}, data) {
    commit(SET_CURRENT_PAGE, {data})
  }
}
