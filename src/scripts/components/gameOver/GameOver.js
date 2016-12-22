import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as wordActions from '../../actions/wordActions'

function GameOver(props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        background: 'black',
        opacity: 0.7, // should be rgba
      }}
    >
      <div style={{ color: 'white', fontSize: 48 }}>GAME OVER</div>
      <button
        style={{
          fontFamily: 'AllerDisplay',
          borderRadius: 50,
          color: '#ffb900',
          fontSize: 24,
          padding: '10px 35px 10px 35px',
          border: 'dashed #ffb900 4px',
          textDecoration: 'none',
          background: 'none',
          cursor: 'pointer',
        }}
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
