import React, { PropTypes } from 'react'
import './letter.sass'

export default function Letter(props) {
  return (
    <div className="letter">
      {props.exposed ? props.letter : null}
    </div>
  )
}

Letter.propTypes = {
  exposed: PropTypes.bool,
  letter: PropTypes.string,
}
