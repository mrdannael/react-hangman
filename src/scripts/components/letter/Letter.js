import React, { PropTypes } from 'react'

export default function Letter(props) {
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 50,
          height: 50,
          background: '#54565D'
        }}
      >
        {props.exposed ? props.letter : null}
      </div>
    </div>
  )
}

Letter.propTypes = {
  exposed: PropTypes.bool,
  letter: PropTypes.string,
}
