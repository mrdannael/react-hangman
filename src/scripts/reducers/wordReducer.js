import update from 'immutability-helper'
import * as actionTypes from '../actions/actionTypes'

const initialState = {
  word: [],
  hit: [],
  miss: [],
  isPlaying: false,
}

export default function wordReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.NEW_WORD:
      return update(state, {
        $merge: {
          word: action.word,
          miss: action.miss,
          hit: action.word,
          isPlaying: action.isPlaying,
        }
      })
    case actionTypes.LETTER_HIT:
      return update(state, {
        hit: {
          [action.idx]: { $set: '_' },
        }
      })
    case actionTypes.LETTER_MISSED:
      return update(state, {
        $merge: {
          miss: [...state.miss, action.letter],
        }
      })
    case actionTypes.END_GAME:
      return update(state, {
        $set: {
          ...state,
          isPlaying: false,
        }
      })
    default:
      return state
  }
}
