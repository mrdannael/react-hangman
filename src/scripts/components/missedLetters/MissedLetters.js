import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { map } from 'lodash'

function MissedLetters(props) {
  return (
    <div>
      Missed letters:
      {map(props.data.miss, (elem, key) =>
        <span key={key}>{elem}</span>
      )}
    </div>
  )
}

MissedLetters.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
}

const mapStateToProps = state => ({
  data: state.wordReducer,
})

export default connect(mapStateToProps)(MissedLetters)
