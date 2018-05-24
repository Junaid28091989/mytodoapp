import React from 'react'
import PropTypes from 'prop-types'


const Footer = (props) => {
  const { activeCount, completedCount } = props

  return (
<footer className="footer" style={{padding: '4%'}}>
      <span className="todo-count">
        Number of Items Active: <strong>{activeCount}</strong>
      
      </span>
      <br/>
      <span className="todo-count">
        Number of Items Completed: <strong>{completedCount}</strong>
      </span>
    </footer>
  )
}

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired
}

export default Footer
