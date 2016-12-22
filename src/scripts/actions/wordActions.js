import 'whatwg-fetch'
import * as actionTypes from './actionTypes'

export function missedLetter(letter) {
  return {
    type: actionTypes.LETTER_MISSED,
    letter,
  }
}

export function hitLetter(idx) {
  return {
    type: actionTypes.LETTER_HIT,
    idx,
  }
}

export function endGame() {
  return {
    type: actionTypes.END_GAME,
  }
}

export function fetchedNewWord(word) {
  return {
    type: actionTypes.NEW_WORD,
    word: word.toLowerCase().split(''),
    miss: [],
    isPlaying: true,
  }
}

export function fetchNewWord() {
  return dispatch =>
    fetch(actionTypes.WORDNIK_API)
      .then(response => response.json())
      .then(data => dispatch(fetchedNewWord(data.word)))
      .catch(err => console.error('Error while fetchin word:', err))
}
