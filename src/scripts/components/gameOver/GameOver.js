import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as wordActions from '../../actions/wordActions'

function GameOver(props) {
  return (
    <div className="gameover">
      <div className="header">GAME OVER</div>
      <button
        className="button"
        onClick={props.word.fetchNewWord}
        autoFocus
      >
        NEW GAME
      </button>
    </div>
  )
}

GameOver.propTypes = {
  word: PropTypes.objectOf(PropTypes.func),
}

const bindActions = dispatch => ({
  word: bindActionCreators(wordActions, dispatch),
})

const mapStateToProps = state => ({
  data: state.wordReducer,
})

export default connect(mapStateToProps, bindActions)(GameOver)
