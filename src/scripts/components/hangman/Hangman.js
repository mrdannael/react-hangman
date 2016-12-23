import React, { PropTypes } from 'react'
import { map } from 'lodash'
import './hangman.sass'

function Hangman(props) {
  const { miss } = props

  const flow = [
    'head',
    'neck',
    'corpus',
    'right-arm',
    'left-arm',
    'right-hand',
    'left-hand',
    'right-leg',
    'left-leg',
    'right-foot',
    'left-foot',
  ]

  return (
    <div>
      <div className="hangman">
        <div className="img bar" />
        {map(miss, (val, i) => (
          <div key={i} className={`img ${flow[i]}`} />
        ))}
      </div>
    </div>
  )
}

Hangman.defaultProps = {
  miss: [],
}

Hangman.propTypes = {
  miss: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Hangman
