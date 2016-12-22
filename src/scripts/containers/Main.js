import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { map, join, forEach, includes } from 'lodash'
import './main.sass'

import Letter from '../components/letter/Letter'
import MissedLetters from '../components/missedLetters/MissedLetters'
import GameOver from '../components/gameOver/GameOver'
import * as wordActions from '../actions/wordActions'


class Main extends Component {
  constructor(props) {
    super(props)

    this.onKeyUpEvent = ::this.onKeyUpEvent
  }

  componentWillMount() {
    const { fetchNewWord } = this.props.word
    document.addEventListener('keyup', this.onKeyUpEvent, false)
    fetchNewWord()
  }

  onKeyUpEvent(e) {
    e.preventDefault()
    const { word, miss } = this.props.data
    const { missedLetter, hitLetter } = this.props.word
    const hitted = []
    forEach(word, (letter, key) => {
      if (e.key === letter && e.which >= 65 && e.which <= 90) {
        hitted.push(key)
      }
    })
    if (hitted.length < 1) {
      if (!includes(miss, e.key)) missedLetter(e.key)
    } else {
      console.info(hitted.length, hitted)
      forEach(hitted, (value) => {
        hitLetter(value)
      })
    }
  }

  render() {
    const { word, hit, isPlaying } = this.props.data
    console.info(this.props)
    return (
      <div style={{ height: '100%' }}>
        {join(word, '')}
        <div>
          <MissedLetters />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {map(word, (letter, key) =>
            <Letter key={key} exposed={hit[key] === '_'} letter={letter} />
          )}
        </div>
        {!isPlaying ? <GameOver /> : null}
      </div>
    )
  }
}

const bindActions = dispatch => ({
  word: bindActionCreators(wordActions, dispatch)
})

const mapStateToProps = state => ({
  data: state.wordReducer,
})

Main.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  word: PropTypes.objectOf(PropTypes.func),
}

export default connect(mapStateToProps, bindActions)(Main)
