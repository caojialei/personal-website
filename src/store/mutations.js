import {SET_ARTICLE_LIST_CURRENT_PAGE} from './mutation-types'

export default {
  [SET_ARTICLE_LIST_CURRENT_PAGE](state, payload) {
    state.articleListCurrentPage = payload.data
  }
}
